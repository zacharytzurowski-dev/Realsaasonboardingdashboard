import { supabase } from './supabase'

interface SendWelcomeEmailParams {
  email: string
  firstName: string
}

export async function sendWelcomeEmail({ email, firstName }: SendWelcomeEmailParams): Promise<void> {
  const { error } = await supabase.functions.invoke('send-welcome-email', {
    body: { email, firstName }
  })

  if (error) {
    console.error('Failed to send welcome email:', error)
    // Don't throw - we don't want to block signup if email fails
  }
}
