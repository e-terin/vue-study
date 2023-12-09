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
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Заголовок
            </label>
          </div>
          <div class="md:w-2/3">
            <MyInput v-model="post.title"></MyInput>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Содержимое
            </label>
          </div>
          <div class="md:w-2/3">
            <MyInput v-model="post.body"></MyInput></div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="" @click="createPost">Создать</button>
          </div>
        </div>
      </form>
    </div>
  </form>
</template>

<style scoped>

</style>