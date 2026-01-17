import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  firstName: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email, firstName }: WelcomeEmailRequest = await req.json();

    if (!email || !firstName) {
      return new Response(
        JSON.stringify({ error: "Email and firstName are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="font-size: 16px; color: #333; line-height: 1.6;">Hi ${firstName},</p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">Welcome to LaunchOS! We're excited to build your client acquisition system.</p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;"><strong>Your first step:</strong> Complete your onboarding so we have everything we need to build your system.</p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">Once you submit your onboarding, our team will get to work building your website, Google Ads campaigns, and marketing infrastructure — all within 72 hours.</p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">While you're there, explore your Operator's Guide — it has scripts for closing leads, requesting reviews, and maximizing every opportunity that comes through your new system.</p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">Questions? Reply to this email or use the support chat in your dashboard.</p>

        <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 30px;">— The LaunchOS Team</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "LaunchOS <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to LaunchOS — Complete Your Onboarding to Get Started",
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: res.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
