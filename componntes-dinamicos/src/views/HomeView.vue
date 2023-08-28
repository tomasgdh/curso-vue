<template>
  <h1>Listado de Usuarios</h1>
  <input
    type="texto"
    placeholder="filtrar usuario"
    v-model="search"
    @keyup="Handlersearch"
  />
  <div>
    <button @click="HandlerLayout(ListLayout)">Ver en Lista</button>
    <button @click="HandlerLayout(CardLayout)">Ver en Tarjetas</button>
    <button @click="HandlerLayout(TableLayout)">Ver en Tabla</button>
  </div>
  <component :is="layout" :content="fileredUser" />
</template>
<script lang="ts" setup>
import { ref, Ref, defineAsyncComponent, onMounted } from "vue";
import IUser from "../interfaces/IUser";

const search = ref("");
const fileredUser: Ref<Array<IUser>> = ref([]);

const Handlersearch = () => {
  fileredUser.value = users.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );
};

const ListLayout = defineAsyncComponent(
  () => import("../layout/ListLayout.vue")
);
const TableLayout = defineAsyncComponent(
  () => import("../layout/TableLayout.vue")
);
const CardLayout = defineAsyncComponent(
  () => import("../layout/CardLayout.vue")
);

const layout = ref(ListLayout); //lo ponemos como default

const HandlerLayout = (comp) => (layout.value = comp);

const users: Ref<Array<IUser>> = ref([
  {
    name: "Luis",
    age: "50",
    position: "frontend",
  },
  {
    name: "Juanjo",
    age: "90",
    position: "fullstack",
  },
  {
    name: "Lucia",
    age: "25",
    position: "frontend",
  },
  {
    name: "Ana",
    age: "41",
    position: "backend",
  },
  {
    name: "Roberto",
    age: "55",
    position: "backend",
  },
]);

onMounted(() => {
  fileredUser.value = users.value;
});
</script>

<style scoped></style>
