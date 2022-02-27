<script>
export default {
  data() {
    return {
      audioPlayer: Audio,
      audioIsPlaying: false
    }
  },

  mounted() {
    this.audioPlayer = new Audio("/Sunforest_Overture_to_the_Sun.mp3");
    this.audioPlayer.volume = 0.1;
    this.audioPlayer.loop = true;
  },

  unmounted() {
    this.audioPlayer.pause();
    this.audioPlayer = null;
  },

  methods: {
    togglePlayer() {
      this.audioIsPlaying ? this.audioPlayer.pause() : this.audioPlayer.play();
      this.audioIsPlaying = !this.audioIsPlaying;
    }
  } 
}
</script>

<template>
  <p class="fs-1 text-center">Barotrauma Role Provider</p>
  <img src="/debuffs.png" class="img-fluid mx-auto d-block mb-2">
  <img src="/knight_dance.gif" class="img-fluid mx-auto d-block" @click="togglePlayer" title="Look at him dance. How he do it?" >
</template>

<style>

</style>