<template>
    <h3>contador Composition</h3>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>
<script lang="ts" setup>
    import { ref, Ref } from "vue";

    let counter: Ref = ref(0);
    const addCounter = (): void => {
        counter.value++;
    };
</script>
<style></style>
