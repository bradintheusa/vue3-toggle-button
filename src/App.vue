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
:root {
  --link: hsl(215, 49%, 49%);
  --gap: 8px;
  --gap-half: calc(var(--gap) / 2);
  --gap-quarter: calc(var(--gap) / 4);
  --gap-double: calc(var(--gap) * 2);
  --content-width: 800px;

  --fg: #2c3e50;
  --bg: #ecf0f1;
  --bg-emphasis: #f5f7fa;

  --border: #ccc;
  --border-radius: 4px;
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--fg);
  margin: 0 auto;
  max-width: var(--content-width);
}

#app .instructions {
  font-size: 1.1rem;
}

#app .instructions code {
  font-size: .9rem;
}

#app .instructions li {
  margin-bottom: var(--gap);
}

#app details {
  margin: var(--gap-double) 0;
  /* max-width: var(--content-); */
  padding: var(--gap);
  background: var(--bg-emphasis);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
}

#app pre {
  font-size: 14px;
  padding: var(--gap);
  margin: 0 auto;
  /* max-width: var(--); */
  text-align: left;
  overflow-x: scroll;
  max-height: 500px;
}

#app ul {
  list-style: none;
  padding: 0;
  text-align: left;
  /* max-width: 800px; */
  margin: var(--gap) auto;
}

#app .draggable {
  border-radius: var(--radius);
}

#app summary::after {
  content: " (click to expand)";
}

#app h1 {
  font-size: 2rem;
}

#app h2 {
  font-size: 1.5rem;
}

#app a {
  color: var(--link);
  padding: var(--gap-quarter);
  text-decoration: none;

  display: inline-block;
  position: relative;
}

#app a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: hsl(215, 83%, 67%);
  transform-origin: bottom right;
  transition: transform 0.15s ease-in-out;
}

#app a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
