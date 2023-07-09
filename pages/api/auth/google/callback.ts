import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${req.headers.origin}/api/auth/google/callback`
  );

  const { code = '' } = req.query;

  const { tokens } = await oauth2Client.getToken(code.toString());

  // Verify the ID token
  const ticket = await oauth2Client.verifyIdToken({
    idToken: tokens.id_token ||'',
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { email, name } = ticket?.getPayload() ?? {};
  // Generate and store a session or token for the user
  console.log(email,name)
  res.redirect("/"); // Redirect to the home page or any other page after successful login
}