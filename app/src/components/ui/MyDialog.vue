<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyDialog",
  props: {
    show:{
      type: Boolean,
      default: false
    }
  },

})
</script>

<template>
  <div v-if="show" class="dialog" @click="$emit('hideDialog')">
    <div @click.stop class="dialog-content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
  .dialog{
    position: fixed;
    top: 0;
    bottom: 0;
    right:0;
    left: 0;
    background-color: rgb(0,0,0,0.5);
    display: flex;
  }
  .dialog-content{
    margin: auto;
    background-color: aqua;
    border-radius: 12px;
    min-height: 50px;
    min-width: 400px;
    padding: 20px;
  }
</style>