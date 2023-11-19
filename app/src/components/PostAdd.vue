<script>

export default {
  data() {
    return {
      post:
          {
            title: "",
            body: "",
          }
    }
  },

  methods: {
    createPost() {
      this.post.id = Date.now() // добавляем в props post новое поле
      this.$emit('create', this.post) // эммитируем событие родителю и передаем ему данные
      this.post =
          {
            title: "",
            body: "",
          }
    }
  }
}

</script>

<template>
  <form action="" @submit.prevent>
    <div>
      <input type="text" placeholder="Название" v-model="post.title">
      <input type="text" placeholder="Описание" v-model="post.body">
      <button class="" @click="createPost">Создать</button>
    </div>
  </form>
</template>

<style scoped>

</style>