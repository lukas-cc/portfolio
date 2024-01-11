import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { Button } from "./ui/button";

export const SocialLinks = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <p className="text-2xl">Socials</p>
      <div className="flex justify-center gap-12 md:w-1/3 md:gap-8">
        <Button variant="ghost" size="icon">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/lukas-cc"
          >
            <GithubIcon width={20} height={20} />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/just_scepta"
          >
            <TwitterIcon width={20} height={20} />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/lukas-ciepielowski-ba3024293/"
          >
            <LinkedInIcon width={20} height={20} />
          </a>
        </Button>
      </div>
    </section>
  );
};
