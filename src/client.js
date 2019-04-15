import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { createUploadLink } from "apollo-upload-client";
import { API_URL } from "./config";

export const createClient = () => {
  const errorsLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const link = errorsLink.concat(
    createUploadLink({
      uri: API_URL
    })
  );

  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
};
