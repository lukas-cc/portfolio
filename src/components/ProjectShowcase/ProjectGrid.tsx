import Image from "next/image";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => {
  return (
    <section className="flex flex-col items-center gap-12 p-8">
      <p className="text-center text-2xl">My personal projects:</p>
      <div className="flex flex-col gap-20 md:flex-row">
        <ProjectCard
          title="Weather App"
          text="A minimalistic and beautiful weather app"
          href="https://weather-app-lukas-cc.vercel.app/"
        >
          <Image
            src="/weather-app.png"
            alt="weather app"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-4/5 object-cover"
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
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-4/5 object-cover"
          />
        </ProjectCard>
      </div>
    </section>
  );
};
