import { SocialLinks } from "../../components/SocialLinks";

const About = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-20">
      <div className="mt-8 flex w-full justify-center">
        <section className="mx-4 flex w-auto flex-col text-center text-xl md:mx-0 md:w-1/2">
          <h1 className="mb-8 text-6xl">About me</h1>
          <p>
            Hey! I am Lukas. I am 23 years old and I currently live in Hamburg,
            Germany. I mostly do frontend stuff for the web.
          </p>
          <p>
            And I <b className="text-accent">love</b> it.
          </p>
          <p>
            In addition to functional aspects of an app, I also put a lot of
            effort to the look and feel of that app. This means that I strive to
            create an aesthetically pleasing and intuitive design that enhances
            the overall user experience and satisfaction with the app.
          </p>
        </section>
      </div>
      <SocialLinks />
    </div>
  );
};

export default About;
