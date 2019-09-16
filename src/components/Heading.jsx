import React from "react";

const Heading = ({ topic }) => {
  return (
    <h1 className="heading">
      Books on "<span className="topic">{topic}</span>"
    </h1>
  );
};

export default Heading;
