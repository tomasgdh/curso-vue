<template>
    <form>
        <input type="text" v-model="inputText" />
        <h3>{{ inputText }}</h3>
        <input type="checkbox" v-model="agree" /> Acepto los terminos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="France">France</option>
            <option value="Portugal">Portugal</option>
        </select>
    </form>
</template>
<script lang="ts" setup>
    import { ref, Ref } from "vue";
    let inputText: Ref<string> = ref("");
    let agree: Ref<boolean> = ref(false);
    let country: Ref<string> = ref("Spain");
</script>
<style scoped></style>
