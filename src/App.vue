<script setup lang="ts">
import { ref } from 'vue'
import Vue3ToggleButton from "./components/Vue3ToggleButton.vue";

var isChecked = ref(true);

function callback(value: boolean) {
  console.log("Clicked: %s", value);

}

</script>

<template>
  <h1>Component Test</h1>
  <p>Toggle Example</p>
  <p>Value: {{ isChecked }}</p>
  <p>
    <Vue3ToggleButton v-model:isActive="isChecked" @on-change="callback" :handleColor="'#213381'"></Vue3ToggleButton>
  </p>

  <footer>

  </footer>
</template>

<style>
</style>
