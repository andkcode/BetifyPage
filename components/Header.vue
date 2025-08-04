<template>
  <div class="app-container w-full h-[4rem] sm:h-[5rem] lg:h-[6rem] flex items-center bg-transparent px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
    <div class="flex items-center justify-between w-full h-full relative">
      
      <!-- Logo Section -->
      <UButton class="flex items-center space-x-1 sm:space-x-2 bg-transparent hover:bg-transparent flex-shrink-0" to="/">
        <img src="/assets/logo.jpg" alt="logo" class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 rounded-[0.3rem]" />
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Betify</h1>
      </UButton>

      <nav class="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-m font-semibold">
        <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600">How it works</NuxtLink>
        <NuxtLink to="/results" class="hover:text-blue-600">Results</NuxtLink>
        <NuxtLink to="/pricing" class="hover:text-blue-600">Pricing</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600">Blog</NuxtLink>
      </nav>

      <UButton to="https://t.me/parse_exchanges_bot" target="_blank"
        icon="mingcute:telegram-fill"
        class="flex justify-center items-center bg-blue-500 rounded-full text-white font-bold px-8 py-3 hover:bg-blue-600 cursor-pointer"
      >
        Telegram
      </UButton>
    </div>
  </div>
</template>
