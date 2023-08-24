<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.contenido }}</p>
        <input type="text" v-model="message" />
        <button @click="HandlerClick">Di Hola</button>
    </div>
</template>
<script lang="ts" setup>
    import { ref, Ref } from "vue";

    const props = defineProps({
        title: String,
        contenido: String,
    });

    const emits = defineEmits(["sayHi"]);

    const message: Ref<string> = ref("");

    const HandlerClick = () => {
        emits("sayHi", message.value);
    };

    /*    import { defineComponent, ref, Ref } from "vue";
export default defineComponent({
    name: "PostDetail",
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: false,
            default: "este Post no tiene contenido",
        },
    },
    emits: ["sayHi"],
    setup(props, { emit }) {
        const HandlerClick = () => {
            emit("sayHi", message.value);
        };
        let message: Ref<string> = ref("");
        return { props, HandlerClick, message };
    },
});*/
</script>

<style scoped>
    .post {
        border-radius: 10px;
        width: 300px;
        height: 250px;
        background-color: antiquewhite;
        border: 1px solid #000;
        margin: 10px;
        padding: 10px;
    }
</style>
