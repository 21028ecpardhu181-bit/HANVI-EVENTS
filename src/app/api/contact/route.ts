import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, celebrationType, eventDate, guestCount, budgetRange, notes } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Please enter a valid full name (minimum 2 characters).' }, { status: 400 });
    }

    const cleanPhone = (phone || '').replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit phone number.' }, { status: 400 });
    }

    if (email && typeof email === 'string' && email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json({ error: 'Please enter a valid email address format.' }, { status: 400 });
      }
    }

    // Sanitized inquiry record
    const inquiryRecord = {
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : null,
      celebration_type: celebrationType || 'Weddings',
      event_date: eventDate || null,
      guest_count: guestCount || 'Unspecified',
      budget_range: budgetRange || 'Flexible',
      notes: notes ? notes.trim() : '',
      submitted_at: new Date().toISOString(),
    };

    console.log('New Contact Inquiry Received:', inquiryRecord);

    // Save inquiry to Supabase database table 'public.inquiries'
    try {
      const { error: dbError } = await supabaseAdmin
        .from('inquiries')
        .insert([inquiryRecord]);

      if (dbError) {
        console.warn('Supabase Inquiries Table Insert Notice:', dbError.message);
      }
    } catch (dbErr) {
      console.warn('Database insert notice:', dbErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your event inquiry has been registered. Event Director Ch. Kala Prasad & team will contact you within 24 hours.',
      inquiryRecord,
    });
  } catch (err: unknown) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: (err as Error)?.message || 'Failed to submit contact form.' },
      { status: 500 }
    );
  }
}
