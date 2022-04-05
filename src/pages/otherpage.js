import React from "react";
import { Helmet } from "react-helmet";

export default function OtherPage() {
  return (
    <div className="container">
      <Helmet>
        <title>this is the second page</title>
      </Helmet>
      <h1>this is page 2</h1>
      <p>Enjoy</p>
    </div>
  );
}
