import { SocialLinks } from "../../components/social-links";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center gap-20 pb-8">
      <div className="flex flex-grow justify-center pt-8">
        <section className="mx-6 flex flex-col text-center text-xl md:mx-0 md:w-1/2">
          <h1 className="mb-8 text-6xl">About me</h1>
          <p>
            Hey! I am Lukas. I am 25 years old and currently live in Hamburg,
            Germany. I have a masters degree in Informatics.
          </p>
          <br />
          <p>
            I mostly do stuff for the web. In addition to an app&apos;s
            functionality, I pay close attention to its visual appeal. I try to
            create an eye-catching app that enhances the overall user
            experience.
          </p>
        </section>
      </div>
      <SocialLinks />
    </div>
  );
}
