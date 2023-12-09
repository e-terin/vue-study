<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyButton",
})
</script>

<template>
  <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
    <slot/>
  </button>
</template>

<style scoped>

</style>