<template>
  <section>
    <p>{{comment.body}}</p>
    <p>author: {{comment.user}}</p>
    <button v-if="comment.userId==user._id" @click="deleteComment(comment)" type="delete">Delete</button>
    <button @click="commentForm=comment.parentId">Comment</button>
    <div v-if="commentForm==comment.parentId">
      <input type="text" name="body" placeholder="body" v-model="subComment.body" required>
      <input type="url" name="imgUrl" placeholder="Image url" v-model="subComment.imgUrl">
      <button @click="addSubComment(subComment),commentForm=0">Submit</button>
    </div>
    <div v-for="subComment in subComments">
        <subComment :subComment='subComment'></subComment>
      </div>
  </section>
</template>

<script>
  import subComment from "./subComment.vue"
  export default {
    name: "comment",
    data() {
      return {
        commentForm: 0,
        subComment:{
          body: '',
          imgUrl: '',
          user: '',
          rating: 0,
          userId: '',
          parentId: ''
        }
      }
    },
    props: ["comment"],
    components: {subComment},
    computed: {
      user() {
        return this.$store.state.user
      },
      subComments(){
        return this.$store.state.subComments[this.comment._id]
      }
    },
    methods: {
      addSubComment(subComment){
        this.subComment.user = this.user.name
        this.subComment.userId = this.user._id
        this.subComment.parentId = this.comment._id
        this.$store.dispatch('addSubComment', this.subComment)
      },
      deleteComment(comment){
        this.$store.dispatch('deleteComment', comment)
      }
    }
  }


</script>
<style>
</style>