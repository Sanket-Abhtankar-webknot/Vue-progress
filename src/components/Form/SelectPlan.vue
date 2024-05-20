<template>
  <div :class="$style.right_container">
    <div :class="$style.right_meta">
      <h2>Select Your Plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
    </div>
    <form @submit="onSubmit" :class="$style.form_container">
      <div :class="$style.form_pc_container">
        <label v-for="item in plansData" :key="item.name" :class="$style.form_pc_item">
          <input
            :id="item.name"
            type="radio"
            hidden
            name="plan"
            :value="item.name"
            v-model="plan"
            v-bind="planAttr"
          />
          <div>
            <img :src="item.img" alt="." role="presentation" />
            <div>
              <p>{{ item.name }}</p>
              <p>$9.mo</p>
            </div>
          </div>
        </label>
      </div>
      <p :class="$style.e_text">{{ errors.plan }}</p>
      <div :class="$style.form_pc_container_two">
        <label>
          <span>Monthly</span>
          <input
            v-model="duration"
            v-bind="durationAttr"
            type="checkbox"
            name="duration"
            id="duration"
            def
          />
          <span>Yearly</span>
        </label>
      </div>

      <div :class="$style.form_buttons">
        <button type="button">Go Back</button>
        <button type="submit">Next Step</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { spSchema } from '../../utility/schema'
import { useForm } from 'vee-validate'
// @ts-ignore
import arcadeImg from '../../assets/images/icon-arcade.svg'
// @ts-ignore
import adImg from '../../assets/images/icon-advanced.svg'
// @ts-ignore
import proImg from '../../assets/images/icon-pro.svg'

// @ts-ignore
const { handleSubmit, errors, defineField, values } = useForm({
  validationSchema: spSchema,
  initialValues: {
    plan: 'Arcade',
    duration: 'true'
  }
})

const [plan, planAttr] = defineField('plan')
const [duration, durationAttr] = defineField('duration')

// @ts-ignore
const plansData = ref([
  { name: 'Arcade', img: arcadeImg, price: '' },
  { name: 'Advance', img: adImg, price: '' },
  { name: 'Pro', img: proImg, price: '' }
])

// @ts-ignore
const onSubmit = handleSubmit((values) => {
  console.log(values)
  props.changeView('add')
})

const props = defineProps(['changeView'])

console.log(values)
</script>

<style module src="./form.module.scss" lang="scss"></style>
