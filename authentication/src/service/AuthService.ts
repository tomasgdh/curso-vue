import { Ref, ref } from "vue";
class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;
  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  getJwt(): Ref<string> {
    return this.jwt;
  }

  getError(): Ref<string> {
    return this.error;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      let headersList = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        email: email,
        password: password,
      });

      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
      const response = await res.json();
      console.log("response: ", response);
      if ("Unauthorized" in response) {
        this.error.value = "Login failed";
        return false;
      }

      this.jwt.value = response.access_token;
      //$cookies.set("auth", response.data.access_token);
      $session.start();
      $session.set("auth", response.data.access_token);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default AuthService;
