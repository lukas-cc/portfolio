import React from "react";

type ProjectCardProps = {
  children: React.ReactNode;
  title: string;
  text: string;
  href: string;
};
export const ProjectCard: React.FC<ProjectCardProps> = ({
  children,
  title,
  text,
  href,
}) => {
  return (
    <div className="card card-compact w-96 bg-base-300 shadow-xl">
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
