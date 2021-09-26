<template>
  <input type="text" v-model="searchGame" placeholder="Search games...">
    <div id="example3" class="container off-bottom">
      <div class="scrollbox">
        <ul class="list" v-for="item in items" :key="item.id">
          <li class="item">
            {{ item.name }}-<img v-bind:src="'../img/' + item.img" v-bind:alt="item.name">
          </li>
        </ul>
      </div>
      <div class="shadow shadow-top" aria-hidden="true"></div>
      <div class="shadow shadow-bottom" aria-hidden="true"></div>
    </div>
</template>

<script>
import data from '../../party_streams.json'
export default {
  name: 'SearchGame',
  data() {
    return {
        buscar: ''
    }
  },
  computed: {
    items() {
        return data.filter(item => {
            return item.game.toLowerCase().includes(this.buscar.toLowerCase());
        });
    },
  }
}
</script>

<style>
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