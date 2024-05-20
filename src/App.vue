<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore

import AddOns from './components/Form/AddOns.vue'
// @ts-ignore
import SelectPlanVue from './components/Form/SelectPlan.vue'
import SummeryBlockVue from './components/Form/SummeryBlock.vue'
// @ts-ignore
import PersonalDataVue from './components/Form/PersonalData.vue'
// @ts-ignore
import StepsBlockVue from './components/Steps/StepsBlock.vue'

type ViewKey = string

const views: Record<ViewKey, any> = {
  pd: PersonalDataVue,
  sp: SelectPlanVue,
  sb: SummeryBlockVue,
  add: AddOns
}
let step = ref<string>('pd')

const handleChangeView = (view: string) => {
  console.log(view)
  step.value = view
}
</script>

<template>
  <div :class="$style.a_container">
    <div :class="$style.a_container_inner">
      <div>
        <StepsBlockVue :step="step" />
      </div>

      <div v-if="views[step]" :key="step">
        <component :class="$style.a_list_c" :is="views[step]" :changeView="handleChangeView" />
      </div>
    </div>
  </div>
</template>

<style module src="./app.module.scss" lang="scss"></style>
