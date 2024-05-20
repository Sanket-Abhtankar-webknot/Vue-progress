<!-- StepBlocks.vue -->
<template>
  <div :class="$style.s_list_container">
    <div
      :class="[$style.s_list_item, { [$style.s_list_item_active]: props.step === item.di }]"
      v-for="item in viewsList"
      :key="item.name"
    >
      <div>{{ item.id }}</div>
      <div>
        <p>step {{ item.id }}</p>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{ step: string }>()

const viewsList = ref([
  { name: 'YOUR INFO', id: 1, di: 'pd' },
  { name: 'SELECT PLAN', id: 2, di: 'sp' },
  { name: 'ADD-ONS', id: 3, di: 'add' },
  { name: 'SUMMARY', id: 4, di: 'sb' }
])

console.log(props.step, 'steps')
</script>

<style module lang="scss" src="./sidestep.module.scss"></style>
