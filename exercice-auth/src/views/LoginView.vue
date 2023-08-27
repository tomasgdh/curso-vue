<template>
  <h1>Login</h1>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="login">
      Login
    </button>
  </form>
  <RouterLink :to="{ name: 'register' }"> Create account</RouterLink>

  <p style="color: red">{{ feedBack }}</p>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import useAuth from "../store/auth";
import router from "../router";
const store = useAuth();
const email = ref("");
const password = ref("");
const feedBack = ref("");
const login = async () => {
  feedBack.value = "Sending...";
  const response = await store.login(email.value, password.value);
  if (response == false) {
    //Error
    feedBack.value = "Login error.";
  } else {
    //Success
    router.push({ name: "notelist" });
  }
};
</script>

<style scoped></style>
