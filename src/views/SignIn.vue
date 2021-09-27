<template>
    <section class="section-fluid">
        <form class="card" @submit.prevent="signIn">
            <header>
                <h2>Sign in</h2>
            </header>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" placeholder="user@example.com">
            <label for="pass">Password</label>
            <input type="password" id="pass" name="password" v-model="form.password" placeholder="***********">
            <label for="rememberMe">
                <input type="checkbox" id="rememberMe">
                Remember Me
            </label>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const form = reactive({
      email: "",
      password: "",
    });
    const store = useStore();

    const signIn = () => {
      store.dispatch("signInAction", form);
    };
    return {
      form,
      signIn,
    };
  },
};
</script>

<style scoped>
    .section-fluid {
        height: 100vh;
        align-content: center;
    }
</style>
