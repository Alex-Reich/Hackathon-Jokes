<template>
  <section>
    <p>{{subComment.body}}</p>
    <p>author: {{subComment.user}}</p>
    <p>Rating: {{subComment.rating}}</p>

    <button v-if="subComment.userId==user._id" @click="deleteSubComment(subComment)" type="delete">Delete</button>
    <button @click="voteSubCommentUp(subComment)">Vote UP</button>
    <button @click="voteSubCommentDown(subComment)">Vote DOWN</button>
    </div>

  </section>
</template>

<script>
  export default {
    name: "subComment",
    data() {
      return {
        subcomment: {
          body: '',
          imgUrl: '',
          user: '',
          rating: 0,
          userId: '',
          parentId: ''
        }
      }
    },
    props: ["subComment"],
    
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      deleteSubComment(subComment) {
        this.$store.dispatch('deleteSubComment', subComment)
      },
      voteSubCommentUp(subComment){
        subComment.rating++;
        this.$store.dispatch('voteSubCommentUp',subComment)
      },
      voteSubCommentDown(subComment){
        subComment.rating--;
        this.$store.dispatch('voteSubCommentDown', subComment)
      }
    }
  }


</script>
<style>
</style>