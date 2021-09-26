<template>
    <section class="section-fluid">
        <form class="card" @submit.prevent="signin">
            <header>
                <h2>Sign in</h2>
            </header>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" placeholder="user@example.com">
            <label for="pass">Password</label>
            <input type="password" id="pass" name="password" v-model="password" placeholder="***********">
            <label for="rememberMe">
                <input type="checkbox" id="rememberMe">
                Remember Me
            </label>
            <p v-if="errMsg"> {{ errMsg }} </p>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script setup>
    import { useRouter } from 'vue-router' // import router
    
    const email = ref('')
    const password = ref('')
    const errMsg = ref() // ERROR MESSAGE
    const router = useRouter() // get a reference to our vue router

    const signIn = () => { // we also renamed this method 
        firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
            .then((data) => {
              console.log('Successfully logged in!');
              router.push('/') // redirect to the Home
            })
            .catch(error => {
              switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'Invalid email'
                    break
                case 'auth/user-not-found':
                    errMsg.value = 'No account with that email was found'
                    break
                case 'auth/wrong-password':
                    errMsg.value = 'Incorrect password'
                    break  
                default:
                    errMsg.value = 'Email or password was incorrect'
                    break
        }
      });
    }
</script>

<style scoped>
    .section-fluid {
        height: 100vh;
        align-content: center;
    }
</style>
