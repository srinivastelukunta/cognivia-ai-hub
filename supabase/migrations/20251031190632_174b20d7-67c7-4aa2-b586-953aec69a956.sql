-- Completely lock down verification_codes table
-- Remove all existing policies and create service role only policy with explicit role check

-- Drop all existing policies
DROP POLICY IF EXISTS "Service role only access" ON verification_codes;

-- Create explicit service role only policy
-- This ensures ONLY edge functions (service role) can access verification codes
CREATE POLICY "Explicit service role only policy"
ON verification_codes
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');