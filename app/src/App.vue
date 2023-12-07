<template>
  <div>
    <PostAdd @create="createPost"></PostAdd>
    <PostList :posts="posts" @removePost="removePost"></PostList>
  </div>
</template>

<script>

import PostAdd from "@/components/PostAdd.vue";
import PostList from "@/components/PostList.vue";

export default {
  name: 'App',
  components: {
    PostAdd, PostList
  },
  data() {
    return {
      posts: [
        {id:1, title:"Пост1" , body:"Тело поста 1"},
        {id:2, title:"Пост2" , body:"Тело поста 2"},
        {id:3, title:"Пост3" , body:"Тело поста 3"},
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    },
    removePost(id){
      this.posts = this.posts.filter(post => post.id !== id)
    }
  }

}
</script>

<style>

</style>
