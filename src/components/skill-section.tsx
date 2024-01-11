"use client";

import { motion } from "framer-motion";
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
        <Card title="Typescript" icon={iconArray[0]} />
        <Card title="React" icon={iconArray[1]} />
        <Card title="Next.js" icon={iconArray[2]} />
        <Card title="TailwindCSS" icon={iconArray[3]} />
        <Card title="Material UI" icon={iconArray[4]} />
      </div>
    </section>
  );
};
