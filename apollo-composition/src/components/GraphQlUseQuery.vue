<template>
  <h1>Comments</h1>
  <div v-if="loading">
    <h3>Loading...</h3>
  </div>
  <div v-else>
    <ul>
      <li v-for="(comment, index) in result.getCommentsFromUser" :key="index">
        <b>{{ comment.name }}:</b> {{ comment.text }}
      </li>
    </ul>
  </div>
  <div v-if="error">
    <h3 style="error">{{ error.message }}</h3>
  </div>
  <button @click="refetch()">Refresh</button>
</template>
<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result, loading, error, refetch, onResult, onError } = useQuery(
  gql`
    query ($name: String!) {
      getCommentsFromUser(name: $name) {
        name
        text
      }
    }
  `,
  () => ({
    //parametros de la consutla
    name: "Tomi",
  }),
  {
    fetchPolicy: "cache-and-network",
    pollInterval: 5000 /* verifica los datos cada 5 seg */,
  }
);
onResult((queryResult) => {
  console.log("query:", queryResult.data);
  console.log("loading query:", queryResult.loading);
  console.log("Status:", queryResult.networkStatus);
});

onError((error) => {
  console.log("error:", error.graphQLErrors);
});

/*const { result, loading, error } = useQuery(gql`
    query {
      getAllComments {
        name
        text
      }
    }
  `);*/
</script>

<style scoped>
.error {
  color: red;
}
</style>
