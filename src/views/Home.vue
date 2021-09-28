<template>
    <section class="full">
        <Navbar />
        <div class="card-group">
          <div class="card" style="justify-content: center; padding: 2rem; background-color: #F9F9FC;">
            <h1 style="font-size: 3rem;">
              start<br>
              <span style="color: #d97338;">
                streaming
              </span>
              <br>games<br>differently
            </h1>
            <p>gamor now has <b>stream party</b> platform</p>
            <div style="display: flex; align-items: center; justify-content: space-around;">
              <router-link to="/sign-up" class="signup">Create Account</router-link>
              <router-link to="/sign-in" class="signin">Sign in</router-link>
            </div>
          </div>
          <div class="card game">
            <Game />
          </div>
          <div class="card" style="justify-content: center; padding: 2rem; background-color: #F9F9FC;">
            <SearchGame />
          </div>
        </div>
    </section>
    <section class="categories">
        <Categories />
    </section>
</template>

<script>
// @ is an alias to /src
import SearchGame from '@/components/SearchGame.vue'
import Navbar from '@/components/Navbar.vue'
import Game from '@/components/Game.vue'
import Categories from '@/components/Categories.vue'


export default {
  name: 'Home',
  components: {
    SearchGame,
    Navbar,
    Game,
    Categories
  }
};
</script>

<style scoped>
.full {
    min-height: 100vh;
}

.categories {
    margin-bottom: 2rem;
}

button {
    border-radius: 30px;
    background-color:  white;
    border-color: white;
    color: var(--color)
}

.game {
    position: relative;
    align-items: center;
    justify-content: end;
    padding-bottom: 0;
    color: white;
    background-color: var(--color-secondary);
}

.signin {
    margin-left: 2rem;
    margin-right: 2rem;
}

.signup {
    border-radius: 30px;
    background-color: white;
    box-shadow: var(--box-shadow) var(--color-shadow);
    color: var(--color);
    margin: 0.5rem 0;
    padding: 1rem 2rem;
}
</style>