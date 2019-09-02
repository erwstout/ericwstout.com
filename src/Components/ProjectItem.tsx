import React from "react";
import Button from "./Button";

interface Props {
  url: string;
  name: string;
  description: string;
  keywords: Array<string>;
}

const ProjectItem: React.FC<Props> = ({ url, name, description, keywords }) => (
  <div className="col" style={styles.column}>
    <h2>
      <a href={url} title={name}>
        {name}
      </a>
    </h2>
    {keywords.map((keyword, i) => {
      return (
        <span key={`keyword${i}`} style={styles.keyword}>
          {keyword}
        </span>
      );
    })}
    <p style={styles.text}>{description}</p>
    <Button url={url} text="View Project" />
  </div>
);

const styles = {
  keyword: {
    display: `inline-block`,
    margin: `0 8px 0 0`,
    fontSize: `11px`,
    color: `rgb(185, 185, 185)`
  },
  text: {
    marginBottom: `60px`
  },
  column: {
    marginBottom: `80px`
  }
};

export default ProjectItem;
