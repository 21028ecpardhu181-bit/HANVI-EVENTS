-- ============================================================================
-- HANVI EVENTS - COMPLETE SUPABASE STORAGE RLS FIX
-- Copy and run this script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/kklikcbsvrdbnolmifff/sql/new
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------------------------------------------
-- 1. STORAGE BUCKET SETUP (hanvi-media)
-- ----------------------------------------------------------------------------
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'hanvi-media',
  'hanvi-media',
  true,
  52428800, -- 50MB max file size
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm', 'video/quicktime']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 52428800;

-- ----------------------------------------------------------------------------
-- 2. GRANT PERMISSIONS & SAFE ALL-IN-ONE STORAGE RLS POLICIES
-- ----------------------------------------------------------------------------
GRANT USAGE ON SCHEMA storage TO anon, authenticated, service_role, public;
GRANT ALL ON TABLE storage.objects TO anon, authenticated, service_role, public;
GRANT ALL ON TABLE storage.buckets TO anon, authenticated, service_role, public;

-- Drop old/conflicting storage policies
DO $$
BEGIN
  EXECUTE 'DROP POLICY IF EXISTS "Public Read Access" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Public Upload Access" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Public Update Access" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Public Delete Access" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Give anon full access to hanvi-media" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Give public access to buckets" ON storage.buckets';
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- Policy 1: Bucket Access Policy
CREATE POLICY "Give public access to buckets"
ON storage.buckets FOR ALL
TO public
USING (true)
WITH CHECK (true);

-- Policy 2: Complete Media Access Policy (SELECT, INSERT, UPDATE, DELETE)
CREATE POLICY "Give anon full access to hanvi-media"
ON storage.objects FOR ALL
TO public
USING (bucket_id = 'hanvi-media')
WITH CHECK (bucket_id = 'hanvi-media');

-- ----------------------------------------------------------------------------
-- 3. DATABASE TABLES SETUP
-- ----------------------------------------------------------------------------

-- Table A: Function Services
CREATE TABLE IF NOT EXISTS public.services (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  tagline TEXT,
  description TEXT,
  short_description TEXT,
  starting_price TEXT,
  hero_image TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  related_services TEXT[] DEFAULT '{}',
  faq JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table B: Contact Form & Consultation Inquiries
CREATE TABLE IF NOT EXISTS public.inquiries (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  celebration_type TEXT,
  event_date TEXT,
  guest_count TEXT,
  budget_range TEXT,
  notes TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table C: Gallery Photos, Videos & Reels
CREATE TABLE IF NOT EXISTS public.gallery_media (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  type TEXT NOT NULL DEFAULT 'image', -- 'image', 'reel', 'film'
  title TEXT NOT NULL,
  subtitle TEXT,
  category TEXT NOT NULL DEFAULT 'All',
  image_url TEXT NOT NULL,
  video_url TEXT,
  views TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table D: Event Wizard Admin Config
CREATE TABLE IF NOT EXISTS public.wizard_configs (
  id TEXT PRIMARY KEY DEFAULT 'default_config',
  celebration_types TEXT[] DEFAULT '{}',
  guest_count_options TEXT[] DEFAULT '{}',
  budget_options TEXT[] DEFAULT '{}',
  whatsapp_number TEXT DEFAULT '9700929650',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on Database Tables
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wizard_configs ENABLE ROW LEVEL SECURITY;

-- Database Policies
DO $$ BEGIN
  EXECUTE 'DROP POLICY IF EXISTS "Public Read Services" ON public.services';
  EXECUTE 'DROP POLICY IF EXISTS "Public Write Services" ON public.services';
  EXECUTE 'DROP POLICY IF EXISTS "Public Create Inquiries" ON public.inquiries';
  EXECUTE 'DROP POLICY IF EXISTS "Public Read Inquiries" ON public.inquiries';
  EXECUTE 'DROP POLICY IF EXISTS "Public Read Gallery" ON public.gallery_media';
  EXECUTE 'DROP POLICY IF EXISTS "Public Write Gallery" ON public.gallery_media';
  EXECUTE 'DROP POLICY IF EXISTS "Public Read Wizard Config" ON public.wizard_configs';
  EXECUTE 'DROP POLICY IF EXISTS "Public Write Wizard Config" ON public.wizard_configs';
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

CREATE POLICY "Public Read Services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public Write Services" ON public.services FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Public Create Inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Inquiries" ON public.inquiries FOR SELECT USING (true);

CREATE POLICY "Public Read Gallery" ON public.gallery_media FOR SELECT USING (true);
CREATE POLICY "Public Write Gallery" ON public.gallery_media FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Public Read Wizard Config" ON public.wizard_configs FOR SELECT USING (true);
CREATE POLICY "Public Write Wizard Config" ON public.wizard_configs FOR ALL USING (true) WITH CHECK (true);

-- Indexes & Triggers
CREATE INDEX IF NOT EXISTS idx_services_slug ON public.services(slug);
CREATE INDEX IF NOT EXISTS idx_inquiries_submitted_at ON public.inquiries(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON public.gallery_media(category);

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_services_updated_at ON public.services;
CREATE TRIGGER trg_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
