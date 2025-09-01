import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactEmailRequest = await req.json();
    
    console.log("Received contact form submission:", formData);

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "Tech Q Contact Form <onboarding@resend.dev>",
      to: ["Techqho@outlook.com"],
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Service Interest:</strong> ${formData.service}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #0066cc; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This email was sent from the Tech Q contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Tech Q <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting Tech Q - We'll be in touch soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            Thank You for Contacting Tech Q!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Hi ${formData.firstName},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to Tech Q! We have received your message and our team will review it shortly.
          </p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">What happens next?</h3>
            <ul style="line-height: 1.8;">
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll contact you via email or phone to discuss your ${formData.service} needs</li>
              <li>We'll provide you with a customized solution proposal</li>
            </ul>
          </div>
          
          <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #0066cc;">Your Message Summary:</p>
            <p style="margin: 10px 0 0 0; font-style: italic;">"${formData.message.substring(0, 100)}${formData.message.length > 100 ? '...' : ''}"</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">
            If you have any urgent questions, feel free to contact us directly at:
          </p>
          
          <div style="background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
            <p style="margin: 5px 0;"><strong>Email:</strong> Techqho@outlook.com</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> [Your Phone Number]</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
            Best regards,<br>
            <strong>The Tech Q Team</strong>
          </p>
        </div>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);
    console.log("Customer email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        businessEmail: businessEmailResponse,
        customerEmail: customerEmailResponse
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);