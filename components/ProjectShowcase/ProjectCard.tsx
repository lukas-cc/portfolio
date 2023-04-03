import React from "react";

type ProjectCardProps = {
  children: React.ReactNode;
  title: string;
  text: string;
};
export const ProjectCard: React.FC<ProjectCardProps> = ({
  children,
  title,
  text,
}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>{children}</figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Demo</button>
        </div>
      </div>
    </div>
  );
};
