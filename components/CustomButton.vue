<template>
  <UButton :type="type" :label="label" :class="className" :color="color" :size="size" @click="click">
    <i v-if="classIcon" :class="classIcon" />
    <slot></slot>
  </UButton>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  click: {
    type: Function,
    default: () => {},
  },
  label: {
    type: String,
  },
  color: {
    type: String,
    default: 'green',
  },
  size: {
    type: String,
    default: 'md',
  },
  className: {
    type: String,
    default: '',
  },
  classIcon: {
    type: String,
    default: '',
  },
});
</script>
