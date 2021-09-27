<template>
    <h2>01.</h2><b>Choose</b> Platform
    <h2>02.</h2><b>Searching</b> Game
    <div class="card">
        <div class="card_header">
            <input type="search" v-model.trim.lazy="search" class="input-game" placeholder="Search games...">
        </div>
        <hr>
        <div id="scrollList" class="container off-bottom">
          <div class="scrollbox">
            <ul class="list">
              <li class="item" v-for="(user, index) in searchFunction.slice(0,11)" :key="user">
                <span>{{ index }}</span> {{ user.team }}
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
import games from '../../party_streams.json'

export default {
  name: 'SearchGame',
  setup() {
    const user = ref(games)
    const search = ref("")

    const searchFunction = computed(() => {
        return user.value.filter((item) => {
            return item.game.toLowerCase().includes(search.value.toLowerCase());
        })
      })
      return {
        search, searchFunction, user
      }
    }
}
</script>

<style scoped>
    h2 {
        color: var(--color-menu)
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
    
    .card {
        padding: 0;
    }

    /* Scroll List */
    .list {
      list-style: none;
    }

    .item {
        padding: 0.5rem;
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

    /* end Scroll List */

</style>