-- Fix verification_codes and newsletter_subscribers security issues
-- Ensure ONLY service role (edge functions) can access verification codes
-- and ONLY service role can update newsletter subscriber verification status

-- Drop all existing policies on verification_codes
DROP POLICY IF EXISTS "Service role full access to verification codes" ON verification_codes;
DROP POLICY IF EXISTS "Allow anonymous inserts only" ON verification_codes;

-- Create service role only policy for verification_codes
-- No anonymous access at all - only edge functions can manage verification codes
CREATE POLICY "Service role only access"
ON verification_codes
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fix newsletter_subscribers UPDATE policy
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Service role can update verification status" ON newsletter_subscribers;

-- Create restricted service role policy for updates
CREATE POLICY "Service role only can update subscribers"
ON newsletter_subscribers
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);