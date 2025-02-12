"use client";

import {
  NextIcon,
  ReactIcon,
  TypescriptIcon,
  TailwindIcon,
  MuiIcon,
  NodeJsIcon,
} from "./icons";
import { Card } from "./card";

export const SkillSection = () => {
  const iconArray = [
    <TypescriptIcon width={80} height={80} key={0} />,
    <ReactIcon width={80} height={80} key={1} />,
    <NextIcon width={160} height={80} key={2} />,
    <NodeJsIcon width={160} height={80} key={3} />,
    <TailwindIcon width={80} height={80} key={4} />,
    <MuiIcon width={80} height={80} key={5} />,
  ];

  return (
    <section className="p-8">
      <p className="pb-4 text-center text-2xl">My tech stack:</p>
      <div className="grid auto-rows-fr grid-cols-1 gap-10 pt-16 md:grid-cols-2 md:px-36 lg:grid-cols-3">
        <div className="flex w-full justify-center">
          <Card
            icon={iconArray[0]}
            text="For typesafety and better developer experience."
          />
        </div>
        <div className="flex w-full justify-center">
          <Card icon={iconArray[1]} text="My preferred frontend framework." />
        </div>

        <div className="flex w-full justify-center">
          <Card
            icon={iconArray[2]}
            text="Fullstack web at its best - makes building fullstack apps a breeze."
          />
        </div>
        <div className="flex w-full justify-center">
          <Card
            icon={iconArray[3]}
            text="Using one language for the whole stack."
          />
        </div>
        <div className="flex w-full justify-center">
          <Card
            icon={iconArray[4]}
            text="My go to styling solution, by far the most enjoyable."
          />
        </div>
        <div className="flex w-full justify-center">
          <Card
            icon={iconArray[5]}
            text="Ready-to-use components. Primarly used at work."
          />
        </div>
      </div>
    </section>
  );
};
