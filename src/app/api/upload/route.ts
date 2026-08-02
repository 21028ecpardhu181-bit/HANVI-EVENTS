import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Max file size limits
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'video/mp4',
  'video/webm',
  'video/quicktime',
];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided in request' }, { status: 400 });
    }

    // Validate MIME type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `File type ${file.type} is not supported. Allowed types: images (JPEG, PNG, WebP) and videos (MP4, WebM)` },
        { status: 400 }
      );
    }

    // Validate file size
    const isVideo = file.type.startsWith('video/');
    const maxSize = isVideo ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;

    if (file.size > maxSize) {
      return NextResponse.json(
        { error: `File size exceeds limit of ${isVideo ? '50MB' : '10MB'}` },
        { status: 400 }
      );
    }

    // Sanitize filename
    const safeFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filePath = `uploads/${Date.now()}-${safeFilename}`;
    const bucketName = process.env.SUPABASE_BUCKET_NAME || 'hanvi-media';

    // Convert File to Buffer for Supabase Storage SDK
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Direct upload to Supabase Storage via admin client
    let { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from(bucketName)
      .upload(filePath, fileBuffer, {
        contentType: file.type,
        upsert: false,
      });

    // If bucket not found, auto-create public bucket programmatically and retry
    if (uploadError && uploadError.message.toLowerCase().includes('bucket not found')) {
      console.log(`Bucket "${bucketName}" not found. Auto-creating public bucket...`);
      await supabaseAdmin.storage.createBucket(bucketName, {
        public: true,
        fileSizeLimit: MAX_VIDEO_SIZE,
      });

      // Retry upload after bucket creation
      const retryResult = await supabaseAdmin.storage
        .from(bucketName)
        .upload(filePath, fileBuffer, {
          contentType: file.type,
          upsert: false,
        });

      uploadData = retryResult.data;
      uploadError = retryResult.error;
    }

    if (uploadError) {
      console.error('Supabase Storage Error:', uploadError.message);
      const isRlsError = uploadError.message.toLowerCase().includes('row-level security');
      const errorDetail = isRlsError
        ? `${uploadError.message}. Please copy and run the supabase_setup.sql script in your Supabase SQL Editor (https://supabase.com/dashboard/project/kklikcbsvrdbnolmifff/sql/new) to grant storage permissions!`
        : uploadError.message;

      return NextResponse.json(
        { error: `Supabase Storage upload failed: ${errorDetail}` },
        { status: 500 }
      );
    }

    // Generate public CDN URL from Supabase Storage
    const { data: publicUrlData } = supabaseAdmin.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    return NextResponse.json({
      success: true,
      url: publicUrlData.publicUrl,
      pathname: filePath,
      contentType: file.type,
      storage: 'supabase',
    });
  } catch (err: unknown) {
    console.error('Upload API Error:', err);
    return NextResponse.json(
      { error: (err as Error)?.message || 'Failed to upload file to Supabase Storage' },
      { status: 500 }
    );
  }
}
