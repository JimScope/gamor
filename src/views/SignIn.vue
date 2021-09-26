<template>
    <section class="section-fluid">
        <form class="card" @submit.prevent="signin">
            <header>
                <h2>Sign in</h2>
            </header>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" placeholder="user@example.com">
            <label for="pass">Password</label>
            <input type="password" id="pass" name="password" v-model="password" placeholder="***********">
            <label for="rememberMe">
                <input type="checkbox" id="rememberMe">
                Remember Me
            </label>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<style scoped>
    .section-fluid {
        height: 100vh;
        align-content: center;
    }
</style>
