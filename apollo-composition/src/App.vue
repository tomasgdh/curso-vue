<template>
  <h1>Comments</h1>
  <div v-if="loading">
    <h3>Loading...</h3>
  </div>
  <div v-else>
    <ul>
      <il v-for="(comment, index) in result.getAllComments" :key="index">
        Name: {{ comment.name }} | Text:{{ comment.text }}
        <br />
      </il>
    </ul>
  </div>
  <div v-if="error">
    <h3 style="error">{{ error.message }}</h3>
  </div>
</template>
<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    getAllComments {
      name
      text
    }
  }
`);
</script>

<style scoped>
.error {
  color: red;
}
</style>
