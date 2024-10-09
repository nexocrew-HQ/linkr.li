import { getLinks, getSession, getUser } from "@/backend/actions";
import { APP_URL } from "@/config.json";
const DiscordOauth2 = require("discord-oauth2");
const { v4: uuidv4 } = require("uuid");
const uuids = uuidv4();

export async function GET(req: Request) {
  try {
    const sessionID = req.headers.get("sessionID");
    if (!sessionID) {
      return Response.redirect(APP_URL);
    }
    const sessionData = await getSession(sessionID);

    if (!sessionData) {
      return Response.redirect(APP_URL);
    }

    const oauth = new DiscordOauth2();

    oauth
      .tokenRequest({
        clientId: "332269999912132097",
        clientSecret: "937it3ow87i4ery69876wqire",

        code: "query code",
        scope: "identify guilds",
        grantType: "authorization_code",

        redirectUri: "http://localhost/callback",
      })
      .then(console.log);
  } catch (error) {
    return Response.redirect(APP_URL);
  }
}
