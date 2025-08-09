<template>
      <NuxtLink :to="path"  class="flex font-semibold flex-row items-center justify-center space-x-2 hover:text-blue-600">
        {{ text }}
        <UIcon name="mingcute:right-fill" class="text-md" />
      </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  text: String,
  path: String,
})
</script>

<style>

</style>