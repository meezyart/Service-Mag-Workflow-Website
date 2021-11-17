import React from "react";
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../../client-config";

const Figure = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const gatsbyImageData = getGatsbyImageData(
    node,
    { maxWidth: 3000 },
    clientConfig.sanity
  );
  return (
    <figure>
      <GatsbyImage image={gatsbyImageData} alt={node.alt} />

    </figure>
  );
};

export default Figure;