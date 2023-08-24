<template>
    <h1 v-if="age < 18">Es Menor de Edad</h1> <!-- directiva v-if no esta en el dom -->
    <h1 v-else>Es Mayor de Edad</h1>

    <h1 v-show="age < 18">Es Menor de Edad</h1> <!-- directiva v-show Esta en el dom  pero lo oculta con css-->
    <h1 v-show="age > 18">Es Mayor de Edad</h1>

</template>
<script lang="ts" setup>
    let age = 10;
</script>
<style></style>
