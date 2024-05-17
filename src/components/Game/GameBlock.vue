<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <h1>How Fast Are You?</h1>
      <p>Click the flashing block as soon as you can</p>
    </div>
    <button @click="startGame" :disabled="isPlaying" :class="$style.play_button">Play</button>
    <FlashBlock v-if="isPlaying" :delay="delay" @end="gameEnded" />
    <ResultBlock  v-if="!!result"  :result="result" />
  </div>
</template>

<script>
import FlashBlock from './FlashBlock.vue'
import ResultBlock from './ResultBlock.vue'

export default {
  name: 'GameBlock',
  data() {
    return {
      isPlaying: false,
      delay: 2000 + Math.random() * 5000,
      result: 0
    }
  },
  components: { FlashBlock, ResultBlock },
  methods: {
    startGame() {
      this.isPlaying = true
      this.result = 0
    },
    gameEnded(count) {
      this.result = count
      this.isPlaying = false
    }
  }
}
</script>

<style module src="./game.module.scss" lang="scss"></style>
