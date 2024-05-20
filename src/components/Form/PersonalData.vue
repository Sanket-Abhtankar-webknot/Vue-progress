<template>
  <div :class="$style.right_container">
    <div :class="$style.right_meta">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
    </div>
    <form @submit="onSubmit" :class="$style.form_container">
      <div :class="$style.form_container_inner">
        <label for="name">
          <div>
            <span>Name</span>
            <span :class="$style.e_text">{{ errors.name }}</span>
          </div>
          <input
            v-bind="nameAttr"
            type="text"
            name="name"
            id="name"
            v-model="name"
            placeholder="Enter name"
          />
        </label>
        <label for="email">
          <div>
            <span>Email</span>
            <span :class="$style.e_text">{{ errors.email }}</span>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            v-bind="emailAttr"
            placeholder="Enter Email"
          />
        </label>
        <label for="phoneNumber">
          <div>
            <span>Phone Number</span>
            <span :class="$style.e_text">{{ errors.phoneNumber }}</span>
          </div>
          <input
            type="text"
            v-bind="phoneNumberAttr"
            v-model="phoneNumber"
            placeholder="e.g. +91 7332435667"
          />
        </label>
      </div>
      <button type="submit">Next Step</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { pdSchema } from '../../utility/schema'

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: pdSchema
})
const [name, nameAttr] = defineField('name')
const [email, emailAttr] = defineField('email')
const [phoneNumber, phoneNumberAttr] = defineField('phoneNumber')
const props = defineProps(['changeView'])

const onSubmit = handleSubmit((values) => {
  console.log(values)
  props.changeView('sp')
})
</script>

<style module src="./form.module.scss" lang="scss"></style>
