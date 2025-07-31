<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <!-- Player VS Player -->
    <div class="flex flex-row items-center justify-center gap-6">
      <div class="flex items-center gap-2">
        <p class="text-black">{{ leftUsername }}</p>
        <UIcon name="material-symbols-light:swords" alt="Left Face" class="text-[2rem] rounded-full object-cover" />
      </div>
      <p class="text-xl font-bold text-gray-800">VS</p>
      <div class="flex items-center gap-2">
        <UIcon name="material-symbols-light:swords" alt="Right Face" class="text-[2rem] rounded-full object-cover" />
        <p class="text-black">{{ rightUsername }}</p>
      </div>
    </div>

    <!-- Brawl Questions -->
    <div class="w-full max-w-2xl">
      <h2 class="text-xl font-bold text-center mb-4 text-black">What is your name?</h2>
    </div>

    <div class="flex h-[4rem] w-full flex-row items-center justify-center gap-6 bg-black">
      <div class="flex items-center justify-center w-full max-w-2xl">
        <div class="flex flex-col items-center gap-4">
          <p class="text-lg text-white">Betify is your battleground for epic showdowns.</p>
          <p class="text-lg text-white">Craft your contest, challenge your friends, and prove who's the best.</p>
        </div>
        </div>
    </div>
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
