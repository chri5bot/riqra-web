import React from "react";
import { ApolloProvider } from "react-apollo";
import { createClient } from "./client";
import { GlobalStyle } from "./styles/reset.css";
import Routes from "./routes";

function App() {
  return (
    <ApolloProvider client={createClient()}>
      <GlobalStyle />
      <Routes />
    </ApolloProvider>
  );
}

export default App;
