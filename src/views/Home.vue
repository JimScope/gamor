<template>
    <Navbar />
    <div class="card-group">
      <div class="card" style="justify-content: center; padding: 3rem">
        <h1 style="font-size: 3rem;">
          start<br>
          <span style="color: #d97338;">
            streaming
          </span>
          <br>games<br>differently
        </h1>
        <p>gamor now has <b>stream party</b> platform</p>
        <div style="display: flex; align-items: center; justify-content: space-around;">
          <button>
            Create Account
          </button>
          <router-link to="/signin" class="signin">Sign in</router-link>
        </div>
      </div>
      <div class="card game">
        <Game />
      </div>
      <div class="card">
        <SearchGame />
      </div>
    </div>
</template>

<script setup>
// @ is an alias to /src
import { onBeforeUnmount } from 'vue'
import SearchGame from '@/components/SearchGame.vue'
import Navbar from '@/components/Navbar.vue'
import Game from '@/components/Game.vue'

export default {
  name: 'Home',
  components: {
    SearchGame,
    Navbar,
    Game
  }
}

const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function(user) {
    if (!user) { // not logged in
        alert('You must be logged in to view this. redirecting to the login page')
        router.push('/signin')
    }
})
onBeforeUnmount(() => {
    // clear up listener
    authListener()
})
</script>

<style scoped>
button {
    border-radius: 30px;
    background-color:  white;
    border-color: white;
    color: var(--color)
}

.game {
    align-items: center;
    justify-content: end;
    padding-bottom: 0;
    color: white;
    background-color: var(--color-secondary);
}
</style>