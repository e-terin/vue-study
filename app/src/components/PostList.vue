<script>

import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      require: true
    }
  },
  methods: {
    remove(data) {
      this.$emit('removePost',data)
    }
  }
}
</script>

<template>
  <div v-if="posts.length >0 ">
    <div v-for="post in posts">
      <post-item :post="post" :key="post.id" @remove="remove"></post-item>
    </div>
  </div>
  <div v-else>
    Список пользователей пуст
  </div>

</template>

<style scoped>

</style>