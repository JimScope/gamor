<template>
    <section class="fluid">
        <form class="card" @submit.prevent="signUp">
            <header>
                <h2>Sign Up</h2>
            </header>
            {{ user }}
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" placeholder="user@example.com">
            <label for="pass">Password</label>
            <input type="password" id="pass" name="password" v-model="form.password" placeholder="***********">
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

    const signUp = () => {
      store.dispatch("signUpAction", form);
    };

    return {
      form,
      signUp,
    };
  },
};
</script>

<style scoped>
card {
  background-color: var(--color-border)
}
</style>