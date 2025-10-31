import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerifyRequest {
  email: string;
  code: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { email, code }: VerifyRequest = await req.json();

    console.log('Verifying code for:', email);

    // Validate inputs
    if (!email || !code) {
      return new Response(
        JSON.stringify({ error: 'Email and code are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Find the verification code
    const { data: verificationData, error: fetchError } = await supabase
      .from('verification_codes')
      .select('*')
      .eq('email', email)
      .eq('code', code)
      .eq('is_used', false)
      .single();

    if (fetchError || !verificationData) {
      console.error('Verification code not found or already used:', fetchError);
      return new Response(
        JSON.stringify({ error: 'Invalid verification code' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if code has expired
    const now = new Date();
    const expiresAt = new Date(verificationData.expires_at);
    
    if (now > expiresAt) {
      console.error('Verification code expired');
      return new Response(
        JSON.stringify({ error: 'Verification code has expired. Please request a new one.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Mark code as used
    const { error: updateCodeError } = await supabase
      .from('verification_codes')
      .update({ is_used: true })
      .eq('id', verificationData.id);

    if (updateCodeError) {
      console.error('Error marking code as used:', updateCodeError);
      throw updateCodeError;
    }

    // Check if subscriber already exists
    const { data: existingSubscriber } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .single();

    const isMediaProfessional = verificationData.subscriber_type === 'media_professional';

    if (existingSubscriber) {
      // Update existing subscriber
      const { error: updateError } = await supabase
        .from('newsletter_subscribers')
        .update({
          is_verified: true,
          verified_at: new Date().toISOString(),
          is_media_professional: isMediaProfessional
        })
        .eq('email', email);

      if (updateError) {
        console.error('Error updating subscriber:', updateError);
        throw updateError;
      }
    } else {
      // Insert new subscriber
      const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email,
          is_verified: true,
          verified_at: new Date().toISOString(),
          is_media_professional: isMediaProfessional
        });

      if (insertError) {
        console.error('Error inserting subscriber:', insertError);
        throw insertError;
      }
    }

    console.log('Email verified successfully for:', email);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email verified successfully! Welcome to Cognivian.',
        isMediaProfessional 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in verify-newsletter-email:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to verify email' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});