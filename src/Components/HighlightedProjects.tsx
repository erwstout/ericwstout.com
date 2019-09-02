import React from "react";

interface Props {
  link: string;
  project: string;
  projectDescription: string;
}

const HighlightedProjects: React.FC<Props> = ({
  link,
  project,
  projectDescription
}: Props) => (
  <div style={{ marginBottom: `30px` }}>
    <h3>
      <a href={link} title={project}>
        {project}
      </a>
    </h3>
    <p>{projectDescription}</p>
  </div>
);

export default HighlightedProjects;
