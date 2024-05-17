<template>
  <div v-if="isVisible">
    <div @click="endGame" :class="$style.fb">Catch me if you can</div>
  </div>
</template>

<script>
export default {
  name: 'FlashBlock',
  data() {
    return {
      isVisible: false,
      timer: null,
      count: 0
    }
  },
  props: ['delay'],
  mounted() {
    setTimeout(() => {
      this.isVisible = true
      this.startCounting()
    }, this.delay)
  },
  methods: {
    startCounting() {
      this.timer = setInterval(() => {
        this.count += 10
      }, 10)
    },
    endGame() {
      this.isVisible = false
      clearInterval(this.timer)
      this.$emit('end', this.count)
    }
  }
}
</script>

<style module src="./flash.module.scss" lang="scss"></style>
