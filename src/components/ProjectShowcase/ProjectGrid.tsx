import Image from "next/image";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => {
  return (
    <section className="flex flex-col gap-12 md:px-8">
      <p className="text-center text-2xl">My personal projects:</p>
      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <ProjectCard
          title="Weather App"
          text="A simple and beautiful weather app"
          href="https://weather-app-lukas-cc.vercel.app/"
        >
          <Image
            src="/weather-app.png"
            alt="weather app"
            width={600}
            height={600}
            priority
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
            width={600}
            height={600}
            priority
          />
        </ProjectCard>
      </div>
    </section>
  );
};
