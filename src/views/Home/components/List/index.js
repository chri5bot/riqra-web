import React from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

import Button from "../../../../components/Button";

const GET_COMMENTS_QUERY = gql`
  query getCommentsQuery {
    comments {
      id
      content
    }
  }
`;

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteCommentMutation($id: ID!) {
    deleteComment(id: $id)
  }
`;

const List = () => (
  <Query query={GET_COMMENTS_QUERY} fetchPolicy="network-only">
    {({ loading, error, data }) => {
      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <p>Error</p>;
      }

      if (!data) {
        return <p>No Data</p>;
      }

      return data.comments.map(({ id, content }) => {
        return (
          <Mutation
            key={id}
            mutation={DELETE_COMMENT_MUTATION}
            refetchQueries={() => {
              return [{ query: GET_COMMENTS_QUERY }];
            }}
          >
            {(deleteComment, { loading, error }) => (
              <div style={{ display: "flex" }}>
                <span style={{ marginRight: "1rem" }}>{content} </span>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    deleteComment({
                      variables: { id }
                    });
                  }}
                >
                  <Button type="submit" label={loading ? "espera" : "borrar"} />
                </form>
              </div>
            )}
          </Mutation>
        );
      });
    }}
  </Query>
);

export default List;
