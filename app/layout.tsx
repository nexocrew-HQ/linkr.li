import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/linkapp.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-6 text-gray-300 shadow-lg mt-8">
              <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <ul className="flex space-x-4">
                    <li> <Link className="inline" href="https://nexocrew.com/discord">
                      <DiscordIcon className="text-gray-400"></DiscordIcon>
                    </Link></li>
                    <li> <Link href="https://github.com/nexocrew-hq/linkr.li">
                      <GithubIcon className="inline text-gray-400"></GithubIcon>
                    </Link></li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  &copy; {new Date().getFullYear()}{" "}
                  <Link
                    href="https://nexocrew.com"
                    className="text-gray-400 hover:underline"
                  >
                    Nexocrew
                  </Link> - All rights reserved.
                </p>
                <p className="text-gray-400 text-sm">
                  {

                    process.env.TERMS_PAGE && (
                      <Link href={process.env.TERMS_PAGE} className="text-gray-400 hover:underline">
                        Terms of Service
                      </Link>

                    )

                  }

                  {

                    process.env.PRIVACY_PAGE && (
                      <Link href={process.env.PRIVACY_PAGE} className="text-gray-400 hover:underline">
                        Privacy Policy
                      </Link>

                    )

                  }


                  {

                    process.env.IMPRINT_PAGE && (
                      < Link href={process.env.IMPRINT_PAGE} className="text-gray-400 hover:underline">
                        Imprint
                      </Link>

                    )

                  }




                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body >
    </html >
  );
}
