-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  is_media_professional BOOLEAN NOT NULL DEFAULT false,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  verified_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create verification_codes table
CREATE TABLE public.verification_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  code TEXT NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  is_used BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  subscriber_type TEXT NOT NULL CHECK (subscriber_type IN ('newsletter', 'media_professional'))
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_codes ENABLE ROW LEVEL SECURITY;

-- RLS Policies for newsletter_subscribers (allow anonymous inserts for initial registration)
CREATE POLICY "Allow anonymous inserts for newsletter subscribers"
ON public.newsletter_subscribers
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous updates for verification"
ON public.newsletter_subscribers
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public to view verified subscribers"
ON public.newsletter_subscribers
FOR SELECT
TO anon
USING (is_verified = true);

-- RLS Policies for verification_codes (allow anonymous operations for verification flow)
CREATE POLICY "Allow anonymous inserts for verification codes"
ON public.verification_codes
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous selects for verification"
ON public.verification_codes
FOR SELECT
TO anon
USING (true);

CREATE POLICY "Allow anonymous updates for verification"
ON public.verification_codes
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_verification_email ON public.verification_codes(email);
CREATE INDEX idx_verification_expires ON public.verification_codes(expires_at);
CREATE INDEX idx_verification_code ON public.verification_codes(code, email);