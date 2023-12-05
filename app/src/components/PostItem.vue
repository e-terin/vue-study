<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  // components:{
  //   Button
  // },
  // setup(){
  //   return {
  //     'buttonText': "Удалить"
  //   }
  // }
}
</script>

<template>
<div>
  <p>
    {{ this.post.title }}
  </p>
  <p>
    {{ this.post.body }}
  </p>
  <div>
    <MyButton>Удалить</MyButton>
  </div>
</div>
</template>

<style scoped>

</style>