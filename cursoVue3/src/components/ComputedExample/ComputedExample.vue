<template>
    <div>
        <label v-custom-font.red.xxl>Subtotal</label>
         <input v-custom-size:lg type="number" v-model="subtotal" />
         <h3 v-custom-size:xl>Impuesto a pagar {{ impuesto }}  ({{iva}}%)</h3>
        <h3 v-custom-font.xxl.blue>El total a pagar es {{ total }}  ({{iva}}%)</h3>

    </div>
</template>
<script lang="ts" setup>
    import { ref, Ref, computed } from "vue";
    const iva = 21
    let subtotal: Ref<number> = ref(0);
    const impuesto = computed(() =>  subtotal.value * 21/100);
    const total = computed(() =>  subtotal.value * (1 + 21/100));
</script>

<style scoped></style>
