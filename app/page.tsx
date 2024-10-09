import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Create&nbsp;</span>
        <span className={title({ color: "violet" })}>short&nbsp;</span>
        <br />
        <span className={title()}>Links to share with the world.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Free and easy to use. Open source. Get started now.
        </div>

        {/* Call to Action Button */}
        <div className="mt-6">
          <Link href="/dashboard">
            <Button className="">Get Started</Button>
          </Link>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="mt-12 max-w-xl text-center">
        <h2 className={title()}>How it Works</h2>
        <div className={subtitle({ class: "mt-4" })}>
          It's simple! Just sign in with your Discord account, create short links, and share them with the world.
        </div>
      </div>

    </section>
  );
}
