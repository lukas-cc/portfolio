import Image from "next/image";
import { GithubIcon, TwitterIcon } from "./icons";

export const SocialLinks = () => {
  return (
    <section className="flex justify-center">
      <div className="flex w-1/3 justify-center gap-8">
        <a
          className="btn flex flex-1 gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/lukas-cc"
        >
          <GithubIcon width={20} height={20} />
          <div>Github</div>
        </a>
        <a
          className="btn flex flex-1 gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/just_scepta"
        >
          <TwitterIcon width={20} height={20} />
          <div>Twitter</div>
        </a>
      </div>
    </section>
  );
};
