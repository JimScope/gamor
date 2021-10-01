<template>
    <nav :class="{ full: !closed }">
        <a id="logo-sm">Gamor</a>
        <a class="toggle" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </a>
        <ul class="left-menu" :class="{ dFlex: !closed }">
            <li><router-link to="/">Home</router-link></li>
            <li><a href="#">Streams</a></li>
            <li><a href="#">Party</a></li>
            <li><a href="#">Premium</a></li>
        </ul>
        <a class="logo">Gamor</a>
        <ul class="right-menu" v-if="userEmail" :class="{ dFlex: !closed }">
            <li><a @click.prevent="signOut" class="logout">Logout</a></li>
        </ul>
        <ul v-else class="right-menu" :class="{ dFlex: !closed }">
            <li><router-link to="/sign-in" class="signin">Sign in</router-link></li>
            <li><router-link to="/sign-up" class="signup">Create Account</router-link></li>
        </ul>
    </nav>
</template>

<script>
import { useStore } from "vuex"
import { ref, computed } from "vue"

export default {
  setup() {
    const store = useStore();
    const userEmail = computed(() => store.state.user);
    const closed = ref(true)

    const signOut = () => {
      store.dispatch("signOutAction");
    };
    const toggleMenu = () => {
      if (closed.value == true) {
        closed.value = false
      } else {
        closed.value = true
      }
    };
    return {
      signOut,
      toggleMenu,
      closed,
      userEmail,
    };
  },
};
</script>

<style scoped>
/* Nav */
nav {
    display: flex;
    align-items: center;
    margin: 3rem 0;
}

ul {
    list-style: none;
    display: flex;
    padding: 0;
    width: 33.3333333333%;
}

.right-menu {
    justify-content: end;
    align-items: center;
}

.left-menu > li {
    margin-right: 35px;
}

.left-menu > li:last-child {
    margin-right: 0
}

.right-menu > li {
   margin-left: 35px;
}

.right-menu > li:first-child {
    margin-left: 0
}

a,
router-link {
    transition: all 0.3s ease 0s;
}

.logo {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--color);
    width: 33.3333333333%;
}

.signin {
    color: var(--color)
}

.signup {
    border-radius: 30px;
    background-color: var(--color-bg-nav-btn);
    box-shadow: var(--box-shadow) var(--color-shadow);
    border: 2px var(--color-border);
    color: var(--color-nav-btn);
    padding: 1rem 2rem;
}


.router-link-active {
    color: var(--color-accent-secondary);
    font-weight: bold
}

#logo-sm,
.toggle {
    display: none
}


/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: center;
        margin-top: 1.20rem;
        margin-bottom: 1.20rem;
        transition: all .8s ease;
    }
    
    ul {
        flex-direction: column;
        align-items: center;
        width: 100%;
        display: none;
    }
    
    .left-menu {
        margin: auto;
    }
    
    .right-menu {
        margin: auto;
    }
    
    .left-menu > li {
        margin: 1rem 0;
        font-size: 1.5rem;
    }
    
    .right-menu > li {
        margin: 1rem 0;
    }
    
    .logo {
        display: none;
    }
    
    .toggle {
        align-self: flex-end;
        display: initial;
        position: absolute;
        cursor: pointer;
    }
    
    #logo-sm {
        display: block;
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--color);
    }
    
    .dFlex {
        display: flex
    }
}

</style>