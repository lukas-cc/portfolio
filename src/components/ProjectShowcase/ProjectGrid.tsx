import React from "react";
import Image from "next/image";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => {
  return (
    <div className="flex gap-6">
      <ProjectCard
        title="Weather App"
        text="A simple but beautiful weather app"
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
        text="Look up beatiful properties"
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
  );
};
