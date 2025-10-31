-- Fix verification_codes security issue: Remove public read access
DROP POLICY IF EXISTS "Allow anonymous selects for verification" ON public.verification_codes;

-- Only allow service role to read verification codes (used by edge function)
CREATE POLICY "Service role can read verification codes"
ON public.verification_codes
FOR SELECT
TO service_role
USING (true);

-- Fix newsletter_subscribers update policy: Ensure only service role can update
DROP POLICY IF EXISTS "Service can update verification status" ON public.newsletter_subscribers;

CREATE POLICY "Service role can update verification status"
ON public.newsletter_subscribers
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

-- Add admin DELETE policy for newsletter_subscribers
CREATE POLICY "Admins can delete subscribers"
ON public.newsletter_subscribers
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));