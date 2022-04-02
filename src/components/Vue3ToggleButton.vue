<script setup lang="ts">
// import { ref } from 'vue'
const props = defineProps({
  handle: {
    diameter: {
      type: Number,
      default: 30
    },
    distance: {
      type: Number,
      default: 40
    },
    color: '#fff',
    borderRadius: "50%",
  },
  track: {
    color: {
      type: String,
      default: '#ccc'
    },
    width: {
      type: Number,
      default: 70
    },
    height: {
      type: Number,
      default: 30
    },
    activeColor: {
      type: String,
      default: '#2196F3'
    },
    borderWidth: {
      type: Number,
      default: 0
    },
    borderRadius: '34px',
  },
    active: {
      type: String,
      default: '#2196F3'
    },  
  isActive: {
    type: Boolean,
    default: true
  },
})

const track_activeColor = props.active;

function getHandleDistance() {
  let handleDistance = 0;
  if (props.options && props.options.handle && props.options.track) {
    handleDistance = props.options.track.width - props.options.handle.diameter;
  } else {
    handleDistance = props.handle.distance;
  }
  return handleDistance;
}
function getStyleObject() {
  let styleObj = {
    '--handle-diameter': props.handle.diameter + 'px',
    '--handle-color': props.handle.color,
    '--handle-border-radius': props.handle.borderRadius,
    '--handle-distance': props.getHandleDistance + 'px',
    '--track-color': props.track.color,
    '--track-width': props.track.width + 'px',
    '--track-height': props.track.height + 'px',
    '--track-active-color': props.track.activeColor,
    '--track-border-width': props.track.borderWidth + 'px',
    '--track-border-radius': props.track.borderRadius
  };
  return styleObj;
}

function setNewToggleState() {
  this.isActive = !this.isActive;
}

</script>

<template>
  <h1>Loaded</h1>
  <div class="toggle-slider" :style="getStyleObject">
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

.toggle-slider {
  color:red;
  height: 20em;
  background-color: v-bind('track_activeColor');
}
.switch {
  position: relative;
  display: inline-block;
  width: var(--track-width);
  height: var(--track-height);
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
    background-color: var(--track-color);
    cursor: pointer;
    border: var(--track-border-width) solid var(--track-color);
    border-radius: var(--track-border-radius);
    transition: 0.4s;
    .handle {
      display: flex;
      width: var(--handle-diameter);
      height: var(--handle-diameter);
      background-color: var(--handle-color);
      border-radius: var(--handle-border-radius);
      transition: 0.4s;
    }
  }
  input:checked + .track {
    background-color: var(--track-active-color);
    border: var(--track-border-width) solid var(--track-active-color);
  }
  input:focus + .track {
    box-shadow: 0 0 1px var(--track-active-color);
  }
  input:checked + .track > .handle {
    transform: translateX(var(--handle-distance));
  }
}
</style>
