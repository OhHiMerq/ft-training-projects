import ReactDOM from "react-dom/client";
import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  //   gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query Query {
//         pets {
//           id
//           name
//           breed
//           imageUrl
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
