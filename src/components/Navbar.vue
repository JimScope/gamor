<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><a href="#">Streams</a></li>
                <li><a href="#">Party</a></li>
                <li><a href="#">Premium</a></li>
            </ul>
        </nav>
        <a class="logo">Gamor</a>
        <div class="second-menu">
            <router-link to="/signin">Sign in</router-link>
            <button class="alternate">Create Account</button>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
/* Nav */
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    display: inline-block;
    padding: 0 20px;
}

li:first-child {
    padding-left: 0;
}

a,
button,
router-link {
    transition: all 0.3s ease 0s;
}

button {
    border-radius: 30px;
}

.logo {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--color);
    transform: translateX(-50%)
}

.second-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.second-menu a {
    padding: 0 20px;
}

.router-link-active {
    color: var(--color);
    font-weight: bold
}

</style>