<template>
      <NuxtLink :to="path" class="flex flex-row font-semibold items-center justify-center space-x-4 hover:text-blue-600">
        <UIcon name="mingcute:left-fill" class="text-md" />
        {{ text }}
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