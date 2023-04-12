import { SocialLinks } from "../../components/SocialLinks";

const About = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-20">
      <div className="mt-8 flex w-full justify-center">
        <section className="flex w-1/2 flex-col text-center text-xl">
          <h1 className="mb-8 text-6xl">About me</h1>
          <p>
            Hey! I am Lukas. I am 23 years and I currently live in Hamburg,
            Germany.
          </p>
          <p>I mostly do frontend stuff for the web.</p>
          <p>
            And I <b className="text-accent">love</b> it.
          </p>
          <p>
            When developing an app, I don&apos;t only focus on the functional
            aspects. But also how my apps feel and look like. I put a lot of
            emphasis on building stunning user interfaces.
          </p>
        </section>
      </div>
      <SocialLinks />
    </div>
  );
};

export default About;
