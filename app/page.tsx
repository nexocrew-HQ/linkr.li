import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

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
      </div>
    </section>
  );
}
