<template>
  <section>
    <img :src="post.imgUrl" alt="">
    <div class="postStyle">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <p>Posted by {{post.user}}</p>
      <button v-if="post.parentId==user._id" @click="deletePost(post)" type="delete">Delete</button>
      <button @click="commentForm=post.parentId">Comment</button>
      <button>Vote UP</button>
    </div>
    <div v-if="commentForm==post.parentId">
      <input type="text" name="body" placeholder="body" v-model="comment.body" required>
      <input type="url" name="imgUrl" placeholder="Image url" v-model="comment.imgUrl">
      <button @click="addComment(comment),commentForm=0">Submit</button>
    </div>
    <div v-for="comment in comments">
      <comment :comment='comment'></comment>
    </div>
  </section>
</template>

<script>
  import comment from "./comment.vue"
  export default {
    name: 'Post',
    data() {
      return {
        commentForm: 0,
        comment: {
          body: '',
          imgUrl: '',
          user: '',
          rating: 0,
          userId: '',
          parentId: ''
        }
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      comments() {
        return this.$store.state.comments[this.post._id]
      }
    },
    props: ["post"],
    components: { comment },
    methods: {
      addComment(comment) {
        this.comment.user = this.user.name
        this.comment.userId = this.user._id
        this.comment.parentId = this.post._id
        this.$store.dispatch('addComment', this.comment)
      },
      deletePost(post) {
        this.$store.dispatch('deletePost', post)
      }
    }
  }
</script>

<style>
  .postStyle{
    background-color: rgba(100,100,100,0.5)
  }
</style>