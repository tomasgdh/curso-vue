<template>
  <ChildComponent ref="percentageComponent" />
  <button @click="banco">añadir cuenta bancaria</button>
</template>
<script lang="ts" setup>
import ChildComponent from "./ChildComponent.vue";
import { ref, Ref } from "vue";

const percentageComponent: Ref<any | null> = ref(null);
const banco = () => {
  alert("cuenta subida");
  //conectar con el servicio y subir la info.
  percentageComponent.value.recalculate();
};
</script>

<style scoped></style>
