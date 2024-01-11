import React from "react";

export default function page({ params }) {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <h1>The ID is: {params.id}</h1>
      <p>The content should shown here</p>
    </div>
  );
}
