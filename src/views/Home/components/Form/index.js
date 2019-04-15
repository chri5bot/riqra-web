import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import Button from "../../../../components/Button";
import Title from "../../../../components/Title";

import { StyledForm, ButtonContainer } from "./style";

const GET_COMMENTS_QUERY = gql`
  query getCommentsQuery {
    comments {
      id
      content
    }
  }
`;

const CREATE_COMMENT_MUTATION = gql`
  mutation createCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      content
    }
  }
`;

function Form() {
  const content = useFormInput("");
  return (
    <Mutation
      mutation={CREATE_COMMENT_MUTATION}
      refetchQueries={() => {
        return [{ query: GET_COMMENTS_QUERY }];
      }}
    >
      {(createComment, { loading, error }) => (
        <>
          <Title label="Add Comment" />
          <StyledForm
            onSubmit={e => {
              e.preventDefault();

              if (!content || !content.value) {
                return;
              }

              createComment({
                variables: { input: { content: content.value } }
              });

              content.value = "";
            }}
          >
            <textarea {...content} cols={40} rows={10} />
            <ButtonContainer>
              <Button
                type="submit"
                disabled={!content || !content.value}
                label={loading ? "espera" : "agregar"}
              />
            </ButtonContainer>
          </StyledForm>
        </>
      )}
    </Mutation>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}
export default Form;
