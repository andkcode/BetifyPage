<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
    <div class="text-center max-w-xl">
      <img src="/assets/logo.jpg" alt="logo" class="h-15 w-15 rounded-[0.3rem]" />
      <h2 class="text-3xl md:text-4xl font-bold mt-4">Page Not Found</h2>
      <p class="text-lg mt-4 text-gray-600 dark:text-gray-400">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <NuxtLink
        to="/"
        class="mt-6 inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-semibold py-3 px-6 rounded-lg shadow transition"
      >
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 404, message: 'Page Not Found' })
  }
})
</script>

