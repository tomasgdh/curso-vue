<template>
    <h1>Listado de Post:</h1>
    <div class="container">
        <div v-for="elem in infoPost" :key="elem.title">
            <PostDetail :title="elem.title" :contenido="elem.contenido" 
            @sayHi="showAlert"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import PostDetail from "./PostDetail.vue";
    interface IPost {
        title: string;
        contenido: string;
    }
    let infoPost: Array<IPost> = [
        { title: "Es el Post 1", contenido: "Texto Ejemplo Post 1" },
        { title: "Es el Post 2", contenido: "Texto Ejemplo Post 2" },
        { title: "Es el Post 3", contenido: "Texto Ejemplo Post 3" },
        { title: "Es el Post 4", contenido: "Texto Ejemplo Post 4" },
        { title: "Es el Post 5", contenido: "Texto Ejemplo Post 5" },
    ];
    const showAlert = (msg:string) => {
        alert(msg);
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
