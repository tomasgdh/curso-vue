<template>
  <tr>
    <th scope="row">{{ props.content.name }}</th>
    <td>{{ props.content.age }}</td>
    <td>{{ props.content.position }}</td>
  </tr>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["content"]);
</script>

<style scoped></style>
