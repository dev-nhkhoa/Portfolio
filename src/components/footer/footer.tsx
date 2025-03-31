import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          This portfolio website was forked from <a href="https://github.com/Naresh-Khatri" target="_blank">Naresh-Khatri</a>. It’s not my original work—I’m simply reusing it.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {year} Naresh-Khatri - {config.author}. All rights reserved.
        </p>
      </div>
     
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
