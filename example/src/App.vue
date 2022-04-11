<script setup lang="ts">
import { ref } from 'vue';
import Vue3ToggleButton from 'vue3-toggle-button';

const isActive = ref(true);

function toggle() {
  isActive.value = !isActive.value;
}
</script>

<template>

  <Vue3ToggleButton v-model:isActive="isActive" :handleColor="'#cc00cc'"> </Vue3ToggleButton>
  <p @click="toggle">Value:  {{isActive}}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
