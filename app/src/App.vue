<template>
  <button @click="addLike">Add Like</button>
  <button @click="addDislike">Add Dislike</button>
  <div>
    {{ likes }}<br>
    {{ dislikes }}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      likes: 0,
      dislikes: 0
    }
  },
  methods: {
    addLike(){
      this.likes++
    },
    addDislike(){
      this.dislikes++
    }
  }

}
</script>

<style>

</style>
