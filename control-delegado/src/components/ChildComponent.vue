<template>
  <h1>Porcentaje Completado: {{ percentage }}%</h1>
</template>
<script lang="ts" setup>
import { onMounted, ref, Ref } from "vue";
const percentage: Ref<number> = ref(0);

onMounted(() => {
  //trae el valor del porcentaje del servicio
  percentage.value = 24;
});

const recalculate = () => {
  //actualiza el valor del porcentaje a traves del servicio
  percentage.value = 42;
};
defineExpose({ recalculate });
</script>

<style scoped></style>
