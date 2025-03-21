import { SocialLinks } from "../../components/social-links";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center gap-20 pb-8">
      <div className="flex grow justify-center pt-8">
        <section className="mx-6 flex flex-col text-center text-xl md:mx-0 md:w-1/2">
          <h1 className="mb-8 text-6xl">About me</h1>
          <p>
            Hi there! I&apos;m Lukas, a software engineer based in Hamburg,
            Germany.
          </p>
          <p>
            I hold a Master&apos;s degree in Informatics from the University of
            Hamburg (
            <a
              href="https://edoc.sub.uni-hamburg.de/informatik/volltexte/2024/278/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              read my thesis here
            </a>
            ).
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
