<template>
  <button @click="createComment()">Generar Comentario</button>
</template>
<script lang="ts" setup>
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const {
  mutate: createComment,
  loading: createCommentLoading,
  error: createCommentError,
  onDone,
  onError,
} = useMutation(
  gql`
    mutation ($name: String!, $text: String!) {
      createComment(name: $name, text: $text)
    }
  `,
  () => ({
    //parametros del mutate
    variables: { name: "Tomi", text: "Hi from vue again!" },
    update: (cache, { data: { createComment } }) => {
      //cuando los datos estan cacheados
      let data = cache.readQuery({ query: getAllComments });
      data = {
        ...data,
        comments: [...data.comments, createComment],
      };
      cache.writeQuery({ query: getAllComments, data });
    },
  })
);
onDone((done) => {
  console.log(done.value);
});
onError((error) => {
  console.log(error.message);
});
</script>

<style scoped></style>
