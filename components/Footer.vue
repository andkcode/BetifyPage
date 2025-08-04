<template>
<footer class="w-full text-white pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 px-4 sm:px-8 md:px-12 lg:px-20">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
      
      <!-- Brand Section -->
      <div class="flex flex-col space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
        <div class="flex items-center space-x-2 sm:space-x-3">
          <img src="/assets/logo.jpg" alt="logo" class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-[0.3rem]" />
          <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">Betify</h1>
        </div>
        <p class="text-xs sm:text-sm text-gray-700 max-w-sm leading-relaxed">
          The ultimate hub for smart predictions and analytics. Trust the data. Win smarter.
        </p>
        <p class="text-xs text-gray-400">
          © {{ new Date().getFullYear() }} Betify. All rights reserved.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col space-y-2 text-sm font-medium">
        <h2 class="text-base sm:text-lg font-bold mb-2 text-blue-300">Quick Links</h2>
        <NuxtLink to="/" class="hover:text-blue-600 transition-colors py-1">Home</NuxtLink>
        <NuxtLink to="/guide" class="hover:text-blue-600 transition-colors py-1">Guide</NuxtLink>
        <!-- <NuxtLink to="/results" class="hover:text-blue-600 transition-colors py-1">Results</NuxtLink>
        <NuxtLink to="/pricing" class="hover:text-blue-600 transition-colors py-1">Pricing</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600 transition-colors py-1">Blog</NuxtLink> -->
      </div>

      <!-- Documentation -->
      <div class="flex flex-col space-y-2 text-sm font-medium">
        <h2 class="text-base sm:text-lg font-bold mb-2 text-blue-300">Documentation</h2>
        <NuxtLink to="/" class="hover:text-blue-600 transition-colors py-1">Privacy Policy</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600 transition-colors py-1">Terms of Service</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600 transition-colors py-1">FAQ / Help</NuxtLink>
      </div>

      <!-- Social Connect -->
      <div class="flex flex-col text-sm font-medium">
        <h2 class="text-base sm:text-lg font-bold mb-2 text-blue-300">Connect</h2>
        <div class="flex flex-col space-y-1">
          <UButton to="/" icon="line-md:twitter-x" class="hover:text-white text-white transition bg-transparent hover:bg-transparent justify-start p-1">
            <span class="ml-2">Twitter</span>
          </UButton>
          <UButton to="/about" icon="ic:baseline-facebook" class="hover:text-blue-600 text-white transition bg-transparent hover:bg-transparent justify-start p-1">
            <span class="ml-2">Facebook</span>
          </UButton>
          <UButton to="/about" icon="streamline:instagram-solid" class="hover:text-red-600 text-white transition bg-transparent hover:bg-transparent justify-start p-1">
            <span class="ml-2">Instagram</span>
          </UButton>
        </div>
      </div>
    </div>
      </div>
    </div>
  </footer>
</template>
