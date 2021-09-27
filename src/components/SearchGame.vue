<template>
    <h2>01.</h2><b>Choose</b> Platform
    <h2>02.</h2><b>Searching</b> Game
    <div class="card">
      <input type="search" v-model.trim.lazy="search" class="input-game" placeholder="Search games...">
        <div id="example3" class="container off-bottom">
          <div class="scrollbox">
            <ul class="list">
              <li class="item" v-for="(user, index) in searchFunction.slice(0,5)" :key="user">
                {{ index }} {{ user.team }}
              </li>
            </ul>
          </div>
          <div class="shadow shadow-top" aria-hidden="true"></div>
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

<style>
    h2 {
        color: var(--color-menu)
    }

    .input-game,
    .input-game:focus-visible {
        border: none;
        outline: none;
    }
    
    .button-search {
        margin-bottom: 0;
    }

    /* Scroll List */
    .container {
      background-color:white;
      border:solid .5em black;
      border-radius:.5em;
      box-sizing:border-box;
      flex:0 0 30%;
      height:240px;
      margin:.5em;
      overflow:auto;
    }

    .explanation {
      flex: 1 0 60%;
      margin-left:1em;
    }

    .list {
      list-style:none;
      margin:0;
      padding:0;
    }

    .item {
      background-color:lightgray;
      margin:.25em;
      padding:.5em;
    }

    #example3 {
      overflow: hidden;
      position: relative;
    }
    #example3 .scrollbox {
      height: 100%;
      overflow: auto;
    }
    #example3 .shadow {
      bottom: 0;
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      transition: all 0.2s ease-out;
    }
    #example3.off-top .shadow-top {
      box-shadow: 0 1em 1em -1em black inset;
    }
    #example3.off-bottom .shadow-bottom {
      box-shadow: 0 -1em 1em -1em black inset;
    }

    /* end Scroll List */

</style>