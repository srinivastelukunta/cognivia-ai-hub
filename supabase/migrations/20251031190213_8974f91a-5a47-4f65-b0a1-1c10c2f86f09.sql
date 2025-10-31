-- Fix verification_codes security vulnerability
-- Remove dangerous policies that allow anonymous access to verification codes

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts for verification codes" ON verification_codes;
DROP POLICY IF EXISTS "Allow anonymous updates for verification" ON verification_codes;
DROP POLICY IF EXISTS "Service role can read verification codes" ON verification_codes;

-- Create secure policies
-- Only allow service role (edge functions) to manage verification codes
CREATE POLICY "Service role full access to verification codes"
ON verification_codes
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Allow anonymous inserts only (for creating verification codes)
CREATE POLICY "Allow anonymous inserts only"
ON verification_codes
FOR INSERT
TO anon
WITH CHECK (true);