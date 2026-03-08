import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMui,
} from "react-icons/si";

import LogoLoop from "./logo-loop";
import { BaseUiIcon } from "@/components/icons/base-ui-icon";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiMui />,
    title: "MUI",
    href: "https://mui.com",
  },
  {
    node: <BaseUiIcon width={60} height={60} />,
    title: "BaseUI",
    href: "https://base-ui.com",
  },
];

export const SkillSectionV2 = () => {
  return (
    <section className="w-screen">
      <p className="pb-8 text-center text-2xl">My tech stack:</p>
      <div className="relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={30}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={10}
          scaleOnHover
          fadeOut
          fadeOutColor="#09090b"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};
