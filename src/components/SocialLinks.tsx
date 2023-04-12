import Image from "next/image";
import { GithubIcon } from "./icons";

export const SocialLinks = () => {
  return (
    <section>
      <div className="flex w-full justify-center gap-8">
        <a className="btn flex gap-2">
          <GithubIcon width={20} height={20} />
          <div>Github</div>
        </a>
        <button className="btn">
          <div>Twitter</div>
        </button>
        <button className="btn">
          <div>idk</div>
        </button>
      </div>
    </section>
  );
};
