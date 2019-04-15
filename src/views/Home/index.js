import React from "react";

import Form from "./components/Form";
import List from "./components/List";

function Home({ history }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "25%"
        }}
      >
        <Form />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "75%"
        }}
      >
        <List />
      </div>
    </div>
  );
}

export default Home;
