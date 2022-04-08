// React Imports
import React from "react";
import { Helmet } from "react-helmet";

// React Icons
import { FaBeer } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="container">
      <Helmet>
        <title>This is the title</title>
      </Helmet>
      <h1>
        <FaBeer className="dark" /> React Template
      </h1>
      This is more for personal useage but please feel free to use.
    </div>
  );
}
