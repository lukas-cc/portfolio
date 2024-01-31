"use client";

import {
  NextIcon,
  ReactIcon,
  TypescriptIcon,
  TailwindIcon,
  MuiIcon,
} from "./icons";
import { Card } from "./card";

export const SkillSection = () => {
  const iconArray = [
    <TypescriptIcon width={80} height={80} key={0} />,
    <ReactIcon width={80} height={80} key={1} />,
    <NextIcon width={160} height={80} key={2} />,
    <TailwindIcon width={80} height={80} key={3} />,
    <MuiIcon width={80} height={80} key={4} />,
  ];

  return (
    <section className="p-8">
      <p className="pb-4 text-center text-2xl">My current tech stack:</p>
      <div className="flex w-full flex-wrap justify-center gap-10 pt-16 lg:gap-12">
        <Card
          icon={iconArray[0]}
          text="For typesafety and better developer experience."
        />
        <Card icon={iconArray[1]} text="My preferred frontend framework." />
        <Card
          icon={iconArray[2]}
          text="Fullstack web at its best - makes building fullstack apps a breeze."
        />
        <Card
          icon={iconArray[3]}
          text="My go to styling solution, by far the most enjoyable."
        />
        <Card icon={iconArray[4]} text="Only at work..." />
      </div>
    </section>
  );
};
