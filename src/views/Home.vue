<template>
    <section class="full">
        <Navbar />
        <div class="card-group">
          <div class="card">
            <h1 style="font-size: 3rem;">
              start<br>
              <span class="accent">
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
          <div class="card">
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

.card {
  justify-content: center;
  background-color: var(--color-bg-card);
  padding: 2rem;
}

.categories {
    margin-bottom: 2rem;
}

.game {
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
    color: white;
    background-color: var(--color-accent-secondary);
}

.signin {
    margin-left: 2rem;
    margin-right: 2rem;
}

.signup {
    border-radius: 30px;
    background-color: var(--color-bg-active-secondary);
    box-shadow: var(--box-shadow) var(--color-shadow);
    color: var(--color);
    margin: 0.5rem 0;
    padding: 1rem 2rem;
}

.accent {
  color: var(--color-accent);
}

/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 768px) {
    .categories {
        margin-top: 3rem; 
    }
}
</style>