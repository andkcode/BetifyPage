<template>
  <footer class="w-full text-black pt-12 pb-6 px-8 md:px-20">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

      <!-- Brand -->
      <div class="flex flex-col space-y-4 ">
        <div class="flex items-center space-x-3">
          <img src="/assets/logo.jpg" alt="logo" class="h-12 w-12 rounded-[0.3rem]" />
          <h1 class="text-3xl font-bold">Betify</h1>
        </div>
        <p class="text-sm text-neutral-700 max-w-sm">
          The ultimate hub for smart predictions and analytics. Trust the data. Win smarter.
        </p>
        <p class="text-xs text-gray-500">
          © {{ new Date().getFullYear() }} Betify. All rights reserved.
        </p>
      </div>

      <div class="flex flex-col space-y-2 text-sm font-medium">
        <h2 class="text-lg font-semibold mb-2">Quick Links</h2>
        <NuxtLink to="/" class="hover:text-blue-600 transition">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600 transition">About</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600 transition">Blog</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-blue-600 transition">Contributors</NuxtLink>
      </div>

      <div class="flex flex-col space-y-2 text-sm font-medium">
        <h2 class="text-lg font-semibold mb-2">Documentation</h2>
        <NuxtLink to="/" class="hover:text-blue-600 transition">Privacy Policy</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600 transition">Terms of Service</NuxtLink>
      </div>

      <div class="flex flex-col space-y-2 text-sm font-medium">
        <h2 class="text-lg font-semibold mb-2">Connect</h2>
        <UButton to="/" icon="line-md:twitter-x" class="hover:text-white transition bg-transparent hover:bg-transparent">Twitter</UButton>
        <UButton to="/about" icon="ic:baseline-facebook" class="hover:text-blue-600 transition bg-transparent hover:bg-transparent">Facebook</UButton>
        <UButton to="/about" icon="streamline:instagram-solid" class="hover:text-red-600 transition bg-transparent hover:bg-transparent">Instagram</UButton>
      </div>
    </div>
  </footer>
</template>
