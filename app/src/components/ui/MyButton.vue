<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyButton",
})
</script>

<template>
  <button>
    <slot/>
  </button>
</template>

<style scoped>

</style>