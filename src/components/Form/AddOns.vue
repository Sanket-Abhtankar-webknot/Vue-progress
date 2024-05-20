<template>
  <div :class="$style.right_container">
    <div :class="$style.right_meta">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
    </div>
    <form @submit="onSubmit" :class="$style.form_container">
      <div :class="$style.form_container_al">
        <label :class="$style.form_alc">
          <input
            value="1"
            type="checkbox"
            name="addons"
            id="addons"
            v-model="addons"
            v-bind="addonsAttr"
            @change="handleChange"
          />
          <div :class="$style.form_alc_d">
            <div>
              <p>Online Service</p>
              <p>Access multiplayer games</p>
            </div>
            <p>+1/mo</p>
          </div>
        </label>
        <label :class="$style.form_alc">
          <input
            value="2"
            type="checkbox"
            name="addons"
            id="addons"
            v-model="addons"
            v-bind="addonsAttr"
            @change="handleChange"
          />
          <div :class="$style.form_alc_d">
            <div>
              <p>Customizable Profile</p>
              <p>Custom theme on your profile</p>
            </div>
            <p>+1/mo</p>
          </div>
        </label>
        <label :class="$style.form_alc">
          <input
            value="3"
            type="checkbox"
            name="addons"
            id="addons"
            v-model="addons"
            v-bind="addonsAttr"
            @change="handleChange"
          />
          <div :class="$style.form_alc_d">
            <div>
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+1/mo</p>
          </div>
        </label>
      </div>

      <div :class="$style.form_buttons">
        <button type="button">Go Back</button>
        <button type="submit">Next Step</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { aSchema } from '../../utility/schema'
const { handleSubmit, errors, defineField, values } = useForm({
  validationSchema: aSchema,
  initialValues: {
    addons: []
  }
})
const selected = ref<any>([])
const [addons, addonsAttr] = defineField('addons')


const onSubmit = handleSubmit((values) => {
  console.log(values)
  console.log(addons.value, selected)

  // props.changeView('sb')
})

const handleChange = (event: any) => {
  const value = event.target.value as string
  if (event.target.checked && !selected.value.includes(value)) {
    selected.value.push(value)
  } else {
    selected.value = selected.value.filter((item: string) => item !== value)
  }
}

const props = defineProps(['changeView'])
</script>

<style module src="./form.module.scss" lang="scss"></style>
