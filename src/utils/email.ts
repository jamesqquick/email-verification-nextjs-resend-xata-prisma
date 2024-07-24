'use server';
import ConfirmEmail from '@/emails/emailConfirmation';
import * as React from 'react';
import { Resend } from 'resend';

export const sendConfirmationEmail = async (email: string, link: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const from = `Email Confirmation <onboarding@resend.dev>`;

  const res = await resend.emails.send({
    from,
    to: email,
    subject: 'Confirm your email',
    react: React.createElement(ConfirmEmail, {
      email,
      link,
    }),
    headers: {
      // this is important for if the subscriber has to resend the confirmation email.
      // the date header ensures there is a change in the email and it is not marked as spam.
      Date: new Date().toUTCString(),
    },
  });

  return res;
};
