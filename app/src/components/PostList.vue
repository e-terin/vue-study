<script>

import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      require: true
    }
  }
}
</script>

<template>
    <div v-for="post in posts">
      <post-item :post="post"></post-item>
    </div>
</template>

<style scoped>

</style>