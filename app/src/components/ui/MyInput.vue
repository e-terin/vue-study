<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyInput",
  props: ['modelValue'],
  emits: ['update:modelValue']
})
</script>

<template>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
</template>

<style scoped>

</style>