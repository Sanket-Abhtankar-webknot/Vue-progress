<template>
  <p>Your response was in {{ resultTime }}ms</p>
  <p :class="$style.rank">{{ rank }}</p>
</template>

<script>
export default {
  name: 'ResultBlock',
  data() {
    return {
      resultTime: this.result,
      rank: null
    }
  },
  mounted() {
    if (this.result < 250) {
      this.rank = 'Are you lightning!?'
    } else if (this.result < 400) {
      this.rank = 'So you are a mortal..'
    } else {
      this.rank = 'very slow! Are you a old man?'
    }
  },
  props: ['result']
}
</script>

<style module src="./flash.module.scss" lang="scss"></style>
