import React from "react";

import Form from "./components/Form";
import List from "./components/List";

import { Container, AddComment, ListComments } from "./style";

function Home() {
  return (
    <Container>
      <AddComment>
        <Form />
      </AddComment>
      <ListComments>
        <List />
      </ListComments>
    </Container>
  );
}

export default Home;
