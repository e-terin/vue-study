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
      <MyInput v-model="post.title"></MyInput>
      <MyInput v-model="post.body"></MyInput>
      <button class="" @click="createPost">Создать</button>
    </div>
  </form>
</template>

<style scoped>

</style>