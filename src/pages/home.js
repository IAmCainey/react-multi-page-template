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
      <h1 className="text-purple-400 text-4xl uppercase">building</h1>
    </div>
  );
}
