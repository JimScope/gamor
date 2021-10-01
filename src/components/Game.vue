<template>
   <h2 class="title">{{ player.game }} New Season</h2>
   <h6>Join Live Stream</h6>
   <div style="position: relative">
    <div class="glass">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
    </div>
    <button>
        <h3>11 : 45</h3>
    </button>
   </div>
   <div class="players left">
     <img src="../assets/logo.png">
   </div>
   <div class="players rigth">
     <img src="../assets/logo.png">
   </div>
   <img class="img-game" :src="player.image">

</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
export default {
  name: 'Game',
  setup() {
      const store = useStore();
      const player = computed(() => store.state.player)
     return {
        player
      }
  }
}
</script>

<style scoped>
.signin {
    padding: 0 20px;       
}

.card {
    position: relative;
}

button {
    width: 8rem;
    border-radius: 30px;
    background-color:  white;
    border-color: white;
    padding: 0.7rem;
    color: var(--color-secondary);
    font-stretch: expanded;
}

.glass {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    position: relative;
    top: 40px;
    left: -30px;
    background: rgba( 255, 255, 255, 0.10 );
    backdrop-filter: blur( 4px );
    -moz-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.bi-person-plus {
    position: relative;
    padding: 0;
    margin: 0;
    top: 13px;
    left: 15px;
}

.title {
    margin: 0.6rem 0;
    text-align: center;
}

.players {
    position: absolute;
    height: 60px;
    width: 60px;
    padding: 5px;
    background: rgba(0,0,0,0.10);
    border-radius: var(--border-radius)
}

.left{
    align-self: start;
    top: 16rem;
}

.rigth{
    align-self: end;
    top: 20rem
}

.players img {
    position: absolute;
    height: 45px;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}

.img-game {
    max-height: 40vh;
}
</style>