<template>
  <input type="text" v-model="note" />
  <button @click="handlerNote">Save note</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="note in notes" :key="note">
      <v-icon
        name="bi-file-code-fill"
        fill="blue"
        scale="2"
        animation="pulse"
        speed="slow"
        hover="true"
      />
      {{ note }}
    </li>
  </TransitionGroup>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";

const notes: Ref<Array<string>> = ref([]);
const note: Ref<string> = ref("");
const handlerNote = () => {
  notes.value.push(note.value);
  note.value = "";
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
