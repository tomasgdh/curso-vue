import { createApp, provide, h } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
//import { ApolloClients } from "@vue/apollo-composable"//para mas de un cli de Apollo

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
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
