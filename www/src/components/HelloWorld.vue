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
    <div>
      <button @click="postForm=1">Create Post</button>
      <div v-if="postForm==1">
        <form v-on:submit.prevent="addPost">
          <input type="text" name="title" placeholder="title" v-model="post.title" required>
          <input type="text" name="body" placeholder="body" v-model="post.body" required>
          <input type="url" name="imgUrl" placeholder="Image url" v-model="post.imgUrl">
          <button @click="postForm=0" type="submit">Submit</button>
        </form>
      </div>
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
        postForm: 0,
        user: {
          name: ''
        },
        post: {
          title: '',
          body: '',
          imgUrl: '',
          user: this.user.name,
          rating: 0,
          parentId: this.user._id
        }
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
      },
      addPost() {
        this.$store.dispatch('addPost', this.post)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>