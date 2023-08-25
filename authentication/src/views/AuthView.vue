<template>
  <h1>Auth Backend</h1>
  <div class="container">
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
      <button
        type="submit"
        class="btn btn-primary mt-2"
        @click.prevent="authUser"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import AuthService from "../service/AuthService";
let email: Ref<string> = ref("");
let password: Ref<string> = ref("");
const authUser = async () => {
  const auth = new AuthService();
  const success = await auth.login(email.value, password.value);
  if (success) alert("Exito");
  //$cookies.set("auth", success.access_token);
  else alert("Login Incorrecto");
};
/*const getUserInfo = ()  {
    const token = $session.get('auth')
}*/
/*const takeInfoFromUser = ()  {
    const token = $cookies.get('auth')
}*/
</script>

<style scoped></style>
