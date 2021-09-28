<template>
    <div class="text-title">
        <h2>01.</h2><b>Choose</b> Platform
    </div>
    <div class="game-tabs">
        <span class="active">🎉 Party</span><span>Matchs</span><span>Streams</span>
    </div>
    <div class="text-title">
        <h2>02.</h2><b>Searching</b> Game
    </div>
    <div class="card">
        <input type="search" v-model.trim.lazy="search" class="input-game" placeholder="Search games...">
        <hr>
        <div id="scrollList" class="container off-bottom">
          <div class="scrollbox">
            <ul class="list">
              <li class="item" v-for="(player, index) in searchFunction.slice(0,11)" :key="player.id">
                <span>{{ index }}</span> {{ player.team }}
                <button class="add-button" @click="addPlayer(player)">+</button>
              </li>
            </ul>
          </div>
          <div class="shadow shadow-bottom" aria-hidden="true"></div>
        </div>
       <button class="button-search">Search Now</button>
    </div>
</template>

<script>
import { ref, computed } from "vue"
import { useStore } from "vuex";
import games from '../../party_streams.json'

export default {
  name: 'SearchGame',
  setup() {
    const user = ref(games)
    const search = ref("")
    const player = ref("")
    const store = useStore();

    const searchFunction = computed(() => {
        return user.value.filter((item) => {
            return item.game.toLowerCase().includes(search.value.toLowerCase());
        })
    })
   const addPlayer = (player) => {
      console.log(player)
      store.dispatch("storeGamePlayer", player);
   }
   return {
        search,
        searchFunction,
        user,
        addPlayer,
        player
   }}
}
</script>

<style scoped>
    .text-title > h2 {
        color: var(--color-menu);
    }
    
    .text-title > b {
        padding-left: 3px;
        padding-right: 3px;
    }
    
    .game-tabs {
        height: 3.2rem;
        background-color: var(--color-bg-card);
        border-radius: 30px;
        padding: 0.3rem;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }
    
    .game-tabs > span {
        width: 33.3333333333%;
        padding: 0.7rem;
        text-align: center;
        border-radius: 30px;
    }
    
    .active {
         background-color: var(--color-bg);
    }

    .input-game {
        padding: 1.2rem 1.2rem 0 1.2rem;
        font-weight: bold;
    }

    .input-game,
    .input-game:focus-visible {
        border: none;
        outline: none;
    }
    
    .button-search {
        margin: 0 1.2rem 1.2rem;
    }
    
    .button-search:hover {
        filter: brightness(var(--hover-brightness));
    }
    
    .card {
        padding: 0;
    }
   
    .text-title {
        display: inline-flex;
        align-items: baseline;
        margin-bottom: 1rem
    }

    /* Scroll List */
    .list {
      list-style: none;
    }

    .item {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    #scrollList {
      overflow: hidden;
      position: relative;
      margin: 0 1.5rem 1.5rem 1.5rem;
      border-radius: var(--border-radius);
    }

    #scrollList .scrollbox {
      height: 200px;
      padding-top: 1.2rem;
      overflow: auto;
      scrollbar-width: none;
    }

    #scrollList .shadow {
      bottom: 0;
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      transition: all 0.2s ease-out;
    }

    #scrollList.off-bottom .shadow-bottom {
      box-shadow: 0 -1em 1em -1em var(--color-shadow) inset;
    }
    
    .add-button {
        position: absolute;
        right: 0;
        border-radius: calc(var(--border-radius) - 5px);
        width: 20px;
        height: 20px;
        line-height: 0;
        background: var(--color-bg);
        border-color: var(--color-bg);
        color: var(--color-text);
        padding: 0;
        margin: 0;
    }
    
    .add-button:hover {
        filter: brightness(var(--hover-brightness));
    }

    /* end Scroll List */

</style>