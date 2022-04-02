<script setup lang="ts">
import { ref } from 'vue'
import Vue3ToggleButton from './components/Vue3ToggleButton.vue'

const isActive = ref(true);
</script>

<template>

  <Vue3ToggleButton v-model="isActive" :handleColor="'#302010'"> </Vue3ToggleButton>
  <p>Value:  {{isActive}}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
