<script setup lang="ts">
import {ref} from 'vue';

const props = withDefaults(defineProps<{
  handleDiameter?: string;
  handleDistance?: string;
  handleColor?: string;
  handleBorderRadius?: string;
  trackColor?: string;
  trackWidth?: string;
  trackHeight?: string;
  trackActiveColor?: string;
  trackBorderWidth?: string;
  trackBorderRadius?: string;
  isActive?: boolean;
}>(), {
  handleDiameter: '30px',
  handleDistance: '40px',
  handleColor: '#fff',
  handleBorderRadius: '50%',
  trackColor: '#ccc',
  trackWidth: '70px',
  trackHeight: '30px',
  trackActiveColor: '#2196f3',
  trackBorderWidth: '1px',
  trackBorderRadius: '34px',
  isActive: true,
});

const emit = defineEmits<{
  (event: 'update:isActive', isActive: boolean): void;
  (event: 'onChange', isActive: boolean): void;
}>();

const isActive = ref(props.isActive);

function setNewToggleState() {
  isActive.value = !isActive.value;
  emit('update:isActive', isActive.value);
  emit('onChange', isActive.value);
}
</script>

<template>

  <div class="toggle-slider" >
    <label class="switch">
      <input v-model="isActive" type="checkbox" @click="setNewToggleState" />
      <span class="track">
        <span class="handle"></span>
      </span>
    </label>
  </div>

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
