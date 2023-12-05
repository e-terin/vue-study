<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyInput",
  props: ['modelValue'],
  emits: ['update:modelValue']
})
</script>

<template>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped>

</style>