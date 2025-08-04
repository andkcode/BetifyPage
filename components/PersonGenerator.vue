<template>
  <div class="relative my-5 flex self-center justify-self-center rounded-3xl flex-col items-center justify-center w-full max-w-6xl overflow-hidden shadow-2xl">
    
    <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600">
      <div class="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/15 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 grid-pattern"></div>
      </div>
      
      <div class="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
      <div class="absolute top-20 right-20 w-1 h-1 bg-cyan-200/60 rounded-full animate-bounce animation-delay-500"></div>
      <div class="absolute bottom-20 left-20 w-3 h-3 bg-white/30 rounded-full animate-bounce animation-delay-1500"></div>
      <div class="absolute bottom-10 right-10 w-1.5 h-1.5 bg-purple-200/50 rounded-full animate-bounce animation-delay-2500"></div>
      
      <!-- Dynamic light rays -->
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-12"></div>
      <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent transform -rotate-12"></div>
    </div>

    <!-- Glassmorphism overlay -->
    <div class="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl"></div>

    <!-- Content -->
    <div class="relative z-10 p-8 w-full ">
      <!-- Player VS Player -->
      <div class="flex flex-row items-center justify-center gap-6 mb-6">
        <div class="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 transition-all duration-300 hover:bg-white/25">
          <p class="text-blue-800 font-semibold text-lg">{{ leftUsername }}</p>
        </div>
        
          <div class="flex items-center justify-center">
            <img class="w-12 h-full" src="/assets/logobg.png" alt="hammer"></img>
        </div>
        
        <div class="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 transition-all duration-300 hover:bg-white/25">
          <p class="text-blue-800 font-semibold text-lg">{{ rightUsername }}</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-center mb-8 text-white drop-shadow-lg">
        Who is gonna fucked up Betify?
      </h2>

      <div class="flex items-center flex-row justify-between w-full px-12">
        <div class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-white text-xl font-semibold">Answer</h1>
        <div class="flex flex-col items-center gap-3 justify-center text-center bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
          <h2 class="text-white text-3xl font-bold">
            1.00<span class="text-cyan-200 text-lg font-normal">x</span>
          </h2>
          </div>
        </div>
        
        <div class="flex flex-col items-center gap-2 justify-center text-center bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
          <h2 class="text-cyan-100 text-sm font-bold tracking-wider">TOMORROW</h2>
          <h1 class="text-white text-3xl font-bold">13:00</h1>
          <h3 class="text-cyan-200 text-sm font-medium bg-white/10 px-3 py-1 rounded-full">BO3</h3>
        </div>

        <div class="flex flex-col items-center justify-center gap-4">
          <h1 class="text-white text-xl font-semibold">Answer</h1>
        <div class="flex flex-col items-center gap-3 justify-center text-center bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/25 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
          <h2 class="text-white text-3xl font-bold">
            1.00<span class="text-cyan-200 text-lg font-normal">x</span>
          </h2>
        </div>
      </div>
    </div>
    </div>

    <!-- Bottom glow effect -->13:00
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-b-3xl"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

function generateHumanUsername(maxLength = 15) {
  const syllables = ['an', 'ar', 'el', 'er', 'in', 'jo', 'ka', 'la', 'le', 'li', 'mo', 'na', 'ne', 'ra', 're', 'ri', 'sa', 'se', 'si', 'ta', 'to', 'vi', 'za', 'be', 'bi', 'bo', 'da', 'di', 'do', 'fa', 'fi', 'fo', 'gu', 'ha', 'he', 'hi', 'ja', 'je', 'ji', 'ka', 'ke', 'ki', 'ko', 'lu', 'ma', 'me', 'mi', 'mu', 'nu', 'pa', 'pi', 'po', 'pu', 'qu', 'ra', 'ro', 'ru', 'sa', 'su', 'ta', 'te', 'ti', 'to', 'tu', 'va', 've', 'vi', 'vo', 'wa', 'we', 'wi', 'ya', 'yo', 'za', 'ze', 'zi', 'zo']
  const digits = '0123456789'
  const partsCount = Math.floor(Math.random() * 2) + 2
  let username = ''
  for (let i = 0; i < partsCount; i++) {
    username += syllables[Math.floor(Math.random() * syllables.length)]
  }
  if (username.length > maxLength - 3) {
    username = username.slice(0, maxLength - 3)
  }
  const digitsCount = Math.floor(Math.random() * 4)
  for (let i = 0; i < digitsCount; i++) {
    username += digits.charAt(Math.floor(Math.random() * digits.length))
  }
  return username.slice(0, maxLength)
}

const leftUsername = ref(generateHumanUsername())
const rightUsername = ref(generateHumanUsername())
</script>

<style scoped>
.grid-pattern {
  background-image: 
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-2500 {
  animation-delay: 2.5s;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>