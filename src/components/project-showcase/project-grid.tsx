import Image from "next/image";
import { ProjectCard } from "./project-card";

export const ProjectGrid = () => {
  return (
    <section className="flex flex-col items-center gap-12 p-8">
      <h2 className="text-center text-2xl">My personal projects:</h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Weather App"
          text="A minimalistic and beautiful weather app"
          href="https://weather-app-lukas-cc.vercel.app/"
        >
          <Image
            src="/weather-app.png"
            alt="weather app"
            priority
            width={370}
            height={250}
            sizes="100vw"
            className="h-full w-full rounded-lg object-cover"
          />
        </ProjectCard>
        <ProjectCard
          title="Spotify Clone"
          text="A clone of the spotify web player"
          href="https://spotify-clone-lukas-cc.vercel.app/"
        >
          <Image
            src="/spotify.png"
            alt="spotify"
            priority
            width={370}
            height={250}
            sizes="100vw"
            className="h-full w-full rounded-lg object-cover"
          />
        </ProjectCard>
        <ProjectCard
          title="Stock.io"
          text="Browse through stock market data (wip 🏗️)"
          href="https://stockio.vercel.app/"
        >
          <Image
            src="/stock-io.png"
            alt="stockio"
            priority
            width={370}
            height={250}
            sizes="100vw"
            className="h-full w-full rounded-lg object-cover"
          />
        </ProjectCard>
      </div>
    </section>
  );
};
