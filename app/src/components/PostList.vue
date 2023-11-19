<script>

export default {
  props: {
    posts: {
      type: Array,
      require: true
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="post in posts">
      <p>
        {{ post.title }}
      </p>
      <p>
        {{ post.body }}
      </p>
    </li>
  </ul>
</template>

<style scoped>

</style>