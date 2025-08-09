<template>
  <div>
    <span class="px-[0.4rem] py-[0.2rem] mx-1 bg-blue-600 text-white rounded-[0.4rem] items-center justify-center flex flex-row w-fit">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: String
})
</script>

<style>

</style>