import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import { HeroVisual } from "./hero-visual";

export const Hero = () => {
  return (
    <section className="relative isolate w-full">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(#2d2e2e_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_75%)] bg-size-[40px_40px]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-8 md:min-h-[calc(100dvh-4.5rem)] md:grid-cols-[1fr_1.1fr] md:px-8 md:pt-16">
        <div className="flex flex-col gap-6">
          <h1 className="animate-hero-in text-5xl leading-none font-semibold tracking-tighter motion-reduce:animate-none md:text-6xl lg:text-7xl">
            Lukas Ciepielowski
          </h1>
          <p className="animate-hero-in text-muted-foreground max-w-[40ch] text-lg leading-relaxed [animation-delay:80ms] motion-reduce:animate-none md:text-xl">
            Full-stack engineer at E&V Technology in Hamburg. I build web apps
            that look as good as they work.
          </p>
          <div className="animate-hero-in flex flex-wrap gap-3 pt-2 [animation-delay:160ms] motion-reduce:animate-none">
            <Button asChild size="lg" className="active:scale-[0.98]">
              <a href="#projects">View projects</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 px-6 active:scale-[0.98]"
            >
              <a
                href="https://github.com/lukas-cc"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubLogoIcon className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
};
