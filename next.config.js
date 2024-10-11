/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NETXAUTHURL: process.env.AUTHURL,
    NEXTMONGODBURL: process.env.MONGODBURL,
    NEXTAPP_URL: process.env.APP_URL,
    NEXTAPI_KEY: process.env.API_KEY,
    NEXTDISCORD_CLIENTID: process.env.DISCORD_CLIENTID,
    NEXTDISCORD_CLIENTSECRET: process.env.DISCORD_CLIENTSECRET,
    NEXTDISCORD_REDIRECTURI: process.env.DISCORD_REDIRECTURI,
    NEXTADMINID: process.env.ADMINID,
    NEXTURL_SERVER_PORT: process.env.URL_SERVER_PORT,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
