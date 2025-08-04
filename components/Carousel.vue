<script setup lang="ts">
defineProps<{
  prevIcon?: string
  nextIcon?: string
}>()
const items = [
  '../assets/images/logobg.png',
  '../assets/images/logobg.png',
  '../assets/images/logobg.png',
  '../assets/images/logobg.png',
  '../assets/images/logobg.png',
  '../assets/images/logobg.png'
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    orientation="vertical"
    :items="items"
    arrows
    wheel-gestures
    class-names
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :prev="{ color: 'primary' }"
    :next="{ variant: 'solid' }"
    :autoplay="{ delay: 10000 }"
    :ui="{ container: 'h-[336px]', item: 'basis-[70%] transition-opacity [&:not(.is-snapped)]:opacity-10' }"
    class="w-full max-w-xs mx-auto"
  >
    <img :src="item" alt="item" width="320" height="320" class="rounded-lg">

  </UCarousel>
</template>