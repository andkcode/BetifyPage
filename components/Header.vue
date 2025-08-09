<template>
  <div class="app-container w-full h-[4rem] sm:h-[5rem] lg:h-[6rem] flex items-center bg-transparent px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
    <div class="flex items-center justify-between w-full h-full relative">
      
      <!-- Logo Section -->
      <UButton class="flex items-center space-x-1 sm:space-x-2 bg-transparent hover:bg-transparent flex-shrink-0" to="/">
        <img src="/assets/logo.png" alt="logo" class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 rounded-[0.3rem]" />
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Betify</h1>
      </UButton>

      <!-- Desktop Navigation - Hidden on mobile/tablet -->
      <nav class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 xl:space-x-6 text-sm lg:text-base xl:text-lg font-semibold">
        <NuxtLink to="/" class="hover:text-blue-600 transition-colors">Home</NuxtLink>
        <NuxtLink to="/guide" class="hover:text-blue-600 transition-colors">Guide</NuxtLink>
        <!-- <NuxtLink to="/results" class="hover:text-blue-600">Results</NuxtLink>
        <NuxtLink to="/pricing" class="hover:text-blue-600">Pricing</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-6`~`0">Blog</NuxtLink> -->
      </nav>

      <!-- Mobile/Tablet Navigation Menu Button -->

      <!-- Telegram Button - Responsive sizing -->
      <UButton to="https://t.me/betify_crypto_bot" target="_blank"
        icon="mingcute:telegram-fill"
        class="hidden sm:flex justify-center items-center bg-blue-500 rounded-full text-white font-bold px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 hover:bg-blue-600 cursor-pointer transition-colors text-xs sm:text-sm md:text-base flex-shrink-0"
      >
        <span class="hidden md:inline">Telegram</span>
      </UButton>

      <!-- Mobile Telegram Button -->
      <UButton to="https://t.me/betify_crypto_bot" target="_blank"
        icon="mingcute:telegram-fill"
        class="sm:hidden flex justify-center items-center bg-blue-500 rounded-full text-white font-bold w-10 h-10 hover:bg-blue-600 cursor-pointer transition-colors flex-shrink-0"
      >
      </UButton>
    </div>

  </div>
</template>

<script setup>

</script>