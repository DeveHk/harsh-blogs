import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${req.headers.origin}/api/auth/google/callback`
  );

  const authUrl = oauth2Client.generateAuthUrl({
    scope: ["profile", "email"],
  });

  res.redirect(authUrl);
}