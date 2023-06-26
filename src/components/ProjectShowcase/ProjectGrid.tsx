import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import { HoverText } from "../server";

export const ProjectGrid = () => {
  return (
    <section className="flex flex-col gap-12 md:px-8">
      <HoverText text={["Projects", "I", "have", "been", "working", "on:"]} />
      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        <ProjectCard
          title="Weather App"
          text="A simple and beautiful weather app"
          href="https://weather-app-lukas-cc.vercel.app/"
        >
          <Image
            src="/weather-app.png"
            alt="weather app"
            width={400}
            height={400}
            priority
          />
        </ProjectCard>
        <ProjectCard
          title="Immo Search"
          text="A demo project to look up properties"
          href="https://immo-search.vercel.app/"
        >
          <Image
            src="/immo-search.png"
            alt="immo search"
            width={400}
            height={400}
            priority
          />
        </ProjectCard>
      </div>
    </section>
  );
};
