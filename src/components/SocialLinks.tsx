import { GithubIcon, TwitterIcon } from "./icons";

export const SocialLinks = () => {
  return (
    <section className="flex justify-center">
      <div className="flex justify-center gap-12 md:w-1/3 md:gap-8">
        <a
          className="btn flex w-32 gap-2 md:flex-1"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/lukas-cc"
        >
          <GithubIcon width={20} height={20} />
          <div>Github</div>
        </a>
        <a
          className="btn flex w-32 gap-2 md:flex-1"
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
