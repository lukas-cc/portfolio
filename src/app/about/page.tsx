import { SocialLinks } from "../../components/social-links";

const About = () => {
  return (
    <div className="mb-8 flex flex-col justify-center gap-20">
      <div className="mt-8 flex flex-grow justify-center">
        <section className="mx-6 flex flex-col text-center text-xl md:mx-0 md:w-1/2">
          <h1 className="mb-8 text-6xl">About me</h1>
          <p>
            Hey! I am Lukas. I am 24 years old and I currently live in Hamburg,
            Germany. I mostly do frontend stuff for the web.
          </p>
          <p>And I love it.</p>
          <p>
            In addition to an app&apos;s functionality, I pay close attention to
            its visual appeal. I aim to create an eye-catching app that enhances
            the overall user experience.
          </p>
        </section>
      </div>
      <SocialLinks />
    </div>
  );
};

export default About;
