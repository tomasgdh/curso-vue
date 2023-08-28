<template>
  <h1>Componente Lista</h1>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Edad</th>
        <th scope="col">Posicion</th>
      </tr>
    </thead>
    <tbody>
      <UserRow v-for="item in props.content" :key="item.name" :content="item" />
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import UserRow from "../components/UserRow.vue";

const props = defineProps(["content"]);
</script>

<style scoped></style>
