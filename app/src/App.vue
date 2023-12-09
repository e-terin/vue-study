<template>
  <div>
    <MyButton @click="showDialog = true">Добавить пост</MyButton>
    <MyDialog v-model:show="showDialog" @hideDialog="showDialog = false">
      <PostAdd @create="createPost"></PostAdd>
    </MyDialog>
    <PostList :posts="posts" @removePost="removePost"></PostList>
  </div>
</template>

<script>

import PostAdd from "@/components/PostAdd.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/ui/MyDialog.vue";
import MyInput from "@/components/ui/MyInput.vue";
import MyButton from "@/components/ui/MyButton.vue";

export default {
  name: 'App',
  components: {
    MyButton,
    MyInput,
    MyDialog,
    PostAdd, PostList
  },
  data() {
    return {
      posts: [
        {id:1, title:"Пост1" , body:"Тело поста 1"},
        {id:2, title:"Пост2" , body:"Тело поста 2"},
        {id:3, title:"Пост3" , body:"Тело поста 3"},
      ],
      showDialog: false
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
      this.showDialog = false
    },
    removePost(id){
      this.posts = this.posts.filter(post => post.id !== id)
    }
  },

}
</script>

<style>

</style>
