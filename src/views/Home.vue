<template>
    <section class="full">
        <Navbar />
        <div class="card-group">
          <div class="card card-title">
            <h1 class="title">
              start<br>
              <span class="accent">
                streaming
              </span>
              <br>games<br>differently
            </h1>
            <object class="svgs-semicircle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.2349 53.7879"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path id="semicirculo" class="cls-1" d="M25.99693,15.28614S.40811,23.75563.10275,37.31721a13.82156,13.82156,0,0,0,3.04047,8.43237c6.04571,7.99451,18.61476,8.51763,32.33693,7.6127,14.42085-.951,36.48915-3.89949,64.41974-13.42018l14.73321-6.40167h0c1.28507-.66994,9.56842-5.20341,10.435-13.2737a13.0168,13.0168,0,0,0-.95859-6.28567C117.10051-3.56227,90.92635.50911,90.92549.50925h0"/></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.2349 53.7879"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path id="semicirculo" class="cls-1" d="M25.99693,15.28614S.40811,23.75563.10275,37.31721a13.82156,13.82156,0,0,0,3.04047,8.43237c6.04571,7.99451,18.61476,8.51763,32.33693,7.6127,14.42085-.951,36.48915-3.89949,64.41974-13.42018l14.73321-6.40167h0c1.28507-.66994,9.56842-5.20341,10.435-13.2737a13.0168,13.0168,0,0,0-.95859-6.28567C117.10051-3.56227,90.92635.50911,90.92549.50925h0"/></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.2349 53.7879"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path id="semicirculo" class="cls-1" d="M25.99693,15.28614S.40811,23.75563.10275,37.31721a13.82156,13.82156,0,0,0,3.04047,8.43237c6.04571,7.99451,18.61476,8.51763,32.33693,7.6127,14.42085-.951,36.48915-3.89949,64.41974-13.42018l14.73321-6.40167h0c1.28507-.66994,9.56842-5.20341,10.435-13.2737a13.0168,13.0168,0,0,0-.95859-6.28567C117.10051-3.56227,90.92635.50911,90.92549.50925h0"/></g></g></svg>
            </object>
            <p class="subtitle">gamor now has <b>stream party <object class="svgs-sign">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.01191 6.20162"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path id="señal" class="cls-2" d="M.05892,6.06367A72.13978,72.13978,0,0,1,25.33968.20079C29.9268.00291,34.60605.29162,38.93826,2.73323"/></g></g></svg>
            </object></b> platform
            </p>
            <div id="button">
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
  padding: 3rem 2.5rem;
}

#button {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.title {
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 2rem;
}

.subtitle {
  margin-top: 2rem;
  margin-bottom: 2rem;
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

.card-title {
  position: relative;
}

.svgs-semicircle {
  position: absolute;
  width: 15rem;
}

.svgs-semicircle > svg:nth-child(2) {
  position: relative;
  top: -4rem;
}

.svgs-semicircle > svg:nth-child(3) {
  position: relative;
  top: -7rem;
}

.cls-1 {
  fill: none;
  stroke: var(--color-accent);
  stroke-miterlimit: 10;
  stroke-width: 0.3px;
}

p b {
  position: relative;
}

.svgs-sign > svg {
  width: 4rem;
  position: absolute;
  top: 25px;
  left: 10px;
}

.cls-2{
  fill: none;
  stroke: var(--color-accent-secondary);
  stroke-miterlimit: 10;
  stroke-width: 0.8px;
}

/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 768px) {
    .categories {
        margin-top: 3rem; 
    }
    
    .svgs {
    }
}
</style>