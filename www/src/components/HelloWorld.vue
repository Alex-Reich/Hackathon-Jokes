<template>
  <div>
    <!-- The following is for the sign in sign up -->
    <div class="login" v-if="showLogin==0">
      <button @click="sForm=1">Sign In</button>
      <button @click="sForm=2">Sign Up</button>
      <div v-if="sForm==1">
        <form v-on:submit.prevent="getUser">
          <input type="text" name="name" placeholder="Enter User Name" v-model="tuser.name">
          <button @click="showLogin=1" type="submit">Submit</button>
        </form>
      </div>
      <div v-if="sForm==2">
        <form v-on:submit.prevent="addUser">
          <input type="text" name="name" placeholder="Select User Name" v-model="tuser.name">
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
      <button v-if="showLogin==1" @click="postForm=1">Create Post</button>
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
        <p>Posted by {{post.user}}</p>
        <button @click="deletePost(post)" type="delete">Delete</button>



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
        activeUser: {},
        tuser: {
          name: ''
        },
        post: {
          title: '',
          body: '',
          imgUrl: '',
          user: '',
          rating: 0,
          parentId: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch('getPosts')
      this.$store.dispatch('getUsers')
    },
    computed: {
      posts() {
        return this.$store.state.posts
      },
      user(){
        return this.$store.state.user
      }
    },
    methods: {
      addUser() {
        this.activeUser = this.tuser
        this.$store.dispatch('addUser', this.tuser)
      },
      getUser() {
        this.activeUser = this.tuser
        this.$store.dispatch('getUser', this.tuser)
      },
      addPost() {
        console.log(this.posts)
        this.post.user = this.user.name
        this.post.parentId = this.user._id
        this.$store.dispatch('addPost', this.post)
       // this.$store.dispatch('getUser', this.tuser)
      },
      deletePost(post){
        this.$store.dispatch('deletePost', post)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>