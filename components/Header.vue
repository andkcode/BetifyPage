<template>
  <div class="app-container w-full h-[6rem] flex items-center bg-transparent px-30">
    <div class="flex items-center justify-between w-full h-full relative">
      
      <div class="flex items-center space-x-2">
        <img src="/assets/logo.jpg" alt="logo" class="h-15 w-15 rounded-[0.3rem]" />
        <h1 class="text-5xl font-bold">Betify</h1>
      </div>

      <nav class="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-m font-semibold">
        <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600">About</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600">Blog</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-blue-600">Contact</NuxtLink>
        <NuxtLink to="/login" class="hover:text-blue-600">Login</NuxtLink>
      </nav>

      <UButton
        icon="mingcute:telegram-fill"
        class="flex justify-center items-center bg-blue-700 rounded-full text-white font-bold px-8 py-3 hover:bg-blue-600 cursor-pointer"
      >
        Telegram
      </UButton>
      
    </div>
  </div>
</template>
