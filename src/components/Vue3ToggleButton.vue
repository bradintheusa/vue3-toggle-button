<script setup lang="ts">
import { ref, computed } from 'vue'
const emit = defineEmits(['update:isActive']);
const props = defineProps({
  handleDiameter: {
    type: String,
    default: '30px'
  },
  handleDistance: {
    type: String,
    default: '40px'
  },
  handleColor:{
    type: String,
    default: '#fff'
  },
  handleBorderRadius: {
    type: String,
    default: '50%'
  },
  trackColor: {
    type: String,
    default: '#ccc'
  },
  trackWidth: {
    type: String,
    default: '70px'
  },
  trackHeight: {
    type: String,
    default: '30px'
  },
  trackActiveColor: {
    type: String,
    default: '#2196F3'
  },
  trackBorderWidth: {
    type: String,
    default: '1px'
  },
  trackBorderRadius: {
    type: String,
    default: '34px'
  },
  isActive: {
    type: Boolean,
    default: true
  },
})

const isActive = computed({
  get() {
    return props.isActive
  },
  set(value) {
    emit('update:isActive', value)
  }
});


function setNewToggleState() {
  isActive.value = !isActive.value;
  emit('update:isActive', isActive.value);
}

</script>

<template>
  <h1>Loaded</h1>
  <div class="toggle-slider" >
    <label class="switch">
      <input v-model="isActive" type="checkbox" @click="setNewToggleState" />
      <span class="track">
        <span class="handle"></span>
      </span>
    </label>
  </div>
  <h1>----</h1>
</template>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: v-bind(trackWidth);
  height: v-bind(trackHeight);
}  
  input {
    display: none;
  }
  .track {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: v-bind(trackColor);
    cursor: pointer;
    border: v-bind(trackBorderWidth) solid v-bind(trackColor);
    border-radius: v-bind(trackBorderRadius);
    transition: 0.4s;
  }
    .handle {
      display: flex;
      width: v-bind(handleDiameter);
      height: v-bind(handleDiameter);
      background-color: v-bind(handleColor);
      border-radius: v-bind(handleBorderRadius);
      transition: 0.4s;
    }
  
  input:checked + .track {
    background-color: v-bind(trackActiveColor);
    border: v-bind(trackBorderWidth) solid v-bind(trackActiveColor);
  }
  input:focus + .track {
    box-shadow: 0 0 1px v-bind(trackActiveColor);
  }
  input:checked + .track > .handle {
    transform: translateX(v-bind(handleDistance));
  }

</style>
