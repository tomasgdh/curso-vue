<template>
  <h3>Notifications</h3>
  <ul>
    <li v-for="(comment, index) of comments" :key="index">
      <b>{{ comment.name }}:</b> {{ comment.text }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useSubscription } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { watch, ref } from "vue";

const comments = ref([]);
const { result } = useSubscription(
  gql`
    subscription {
      commentCreated {
        name
        text
      }
    }
  `
);

watch(
  result,
  (data) => {
    comments.value.push(data.commentCreated);
  },
  { lazy: true }
);
</script>

<style scoped></style>
