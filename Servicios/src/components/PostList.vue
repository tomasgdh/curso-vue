<template>
    <h1>Listado de posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <RouterLink :to="{ name: 'PostDetail', params: { id: post.id } }">
                {{ post.title }}
            </RouterLink>
        </li>
    </ul>
</template>
<script lang="ts" setup>
    import PostService from "../services/PostService";
    import { onMounted } from "vue";

    const service = new PostService();
    const posts = service.getPosts();
    onMounted(async () => {
        await service.fetchAll();
    });
</script>

<style scoped lang="scss">
    .post-list {
        width: 95vw;
        height: 75px;
        padding: 20px;
        list-style-type: none;
        li {
            padding: 10px;
            width: 100%;
            border: 1px solid #ccc;
            color: $primaryColor;
        }
        a {
            text-decoration: none;
            color: $textColor;
            cursor: pointer;
        }
        a:hover {
            color: $primaryColor;
        }
    }
</style>
