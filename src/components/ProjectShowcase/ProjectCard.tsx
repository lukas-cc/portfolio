type ProjectCardProps = {
  children: React.ReactNode;
  title: string;
  text: string;
  href: string;
};
export const ProjectCard = ({
  children,
  title,
  text,
  href,
}: ProjectCardProps) => {
  return (
    <div className="card card-compact mx-8 bg-base-200 shadow-xl md:mx-0">
      <figure>{children}</figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <a
            className="btn-primary btn"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};
