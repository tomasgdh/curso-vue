import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  //SETTERS
  state: () => {
    return {
      token: null,
      baseUrl: "http://127.0.0.1:8000/api",
    };
  },
  //GETTERS
  getters: {
    //times2: (state) => state.count * 2,
  },
  //ACTIONS
  actions: {
    async login(email: string, password: string): Promise<boolean> {
      const uri = `${this.baseUrl}/auth/login`;
      try {
        let headersList = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
          email: email,
          password: password,
        });

        const rawResponse = await fetch(uri, {
          method: "POST",
          headers: headersList,
          body: bodyContent,
        });
        const response = await rawResponse.json();
        // TODO
        console.log("response: ", response);
        if (!response.status) {
          return false;
        } else {
          this.token = response.token;
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async register(
      name: string,
      email: string,
      password: string
    ): Promise<boolean> {
      const uri = `${this.baseUrl}/auth/register`;
      try {
        let headersList = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
          name: name,
          email: email,
          password: password,
        });

        const rawResponse = await fetch(uri, {
          method: "POST",
          headers: headersList,
          body: bodyContent,
        });
        const response = await rawResponse.json();
        // TODO
        console.log("response: ", response);
        if (!response.status) {
          return false;
        } else {
          this.token = response.token;
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async getNotes() {
      const uri = `${this.baseUrl}/note`;
      try {
        let headersList = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        };

        const rawResponse = await fetch(uri, {
          method: "GET",
          headers: headersList,
        });
        const response = await rawResponse.json();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async createNote(nota: string): Promise<boolean> {
      const uri = `${this.baseUrl}/note`;
      try {
        let headersList = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        };

        let bodyContent = JSON.stringify({
          content: nota,
        });

        const rawResponse = await fetch(uri, {
          method: "POST",
          headers: headersList,
          body: bodyContent,
        });

        const response = await rawResponse.json();

        if (response.message != "Success") {
          return false;
        } else {
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    logout() {
      this.token = null;
    },
  },
});

export default useAuth;
