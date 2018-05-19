<template>
  <section>
    <p>{{subComment.body}}</p>
    <p>author: {{subComment.user}}</p>
    <button v-if="subComment.userId==user._id" @click="deleteSubComment(subComment)" type="delete">Delete</button>
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
      }
    }
  }


</script>
<style>
</style>