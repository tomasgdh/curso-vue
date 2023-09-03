import { createApp, provide, h } from "vue";
import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
//import { WebSocketLink } from "@apollo/client/link/ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
//import { ApolloClients } from "@vue/apollo-composable"//para mas de un cli de Apollo

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

//create websocket link
const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: "ws://localhost:4000/graphql",

          on: {
            connected: () => console.log("connected client"),
            closed: () => console.log("closed"),
          },
        })
      )
    : null;

const link =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === "OperationDefinition" &&
            def.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: link,
  cache,
});

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
    /* //para mas de un cli de Apollo
   provide(ApolloClients, { 
        default:apolloClient,
        client1:apolloClient1,
        client2:apolloClient2,
        client3:apolloClient3,
    });*/
  },
  render: () => h(App),
}).mount("#app");
