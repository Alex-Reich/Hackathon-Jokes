<template>
  <div>
    <!-- The following is for the sign in sign up -->
    <div class="login" v-if="showLogin==0">
      <button @click="sForm=1">Sign In</button>
      <button @click="sForm=2">Sign Up</button>
      <div v-if="sForm==1">
        <form v-on:submit.prevent="getUser">
          <input type="text" name="name" placeholder="Enter User Name" v-model="user.name">
          <button @click="showLogin=1" type="submit">Submit</button>
        </form>
      </div>
      <div v-if="sForm==2">
        <form v-on:submit.prevent="addUser">
          <input type="text" name="name" placeholder="Select User Name" v-model="user.name">
          <button @click="showLogin=1" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <!-- End of sign in sign up code -->


    <div class="post" v-if="showLogin==1">
      <button @click="showLogin=0">Logout</button>
      <h1>Hello, {{user.name}}</h1>
    </div>
    <div v-if="showLogin==1">
      <div class="post" v-for="post in posts">
        <img :src="post.imgUrl" alt="">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>



      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        showLogin: 0,
        sForm: 0,
        activeUser: {},
        user: {
          name: ''
        },
      }
    },
    mounted() {
      this.$store.dispatch('getPosts')
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    methods: {
      addUser() {
        this.$store.dispatch('addUser', this.user)
      },
      getUser() {
        // this.activeUser = this.user
        this.$store.dispatch('getUsers', this.user)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>