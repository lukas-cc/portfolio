import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import { HoverText } from "../HoverText";

export const ProjectGrid = () => {
  return (
    <section className="flex flex-col gap-12">
      <HoverText text={["Projects", "I", "have", "been", "working", "on:"]} />
      <div className="flex gap-6">
        <ProjectCard
          title="Weather App"
          text="A simple and beautiful weather app"
          href="https://weather-app-ts-ruddy.vercel.app/"
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
          text="Look up properties"
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
