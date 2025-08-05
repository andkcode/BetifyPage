<template>
  <div class="flex flex-col w-full h-full text-gray-800">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-16 md:px-16 md:pt-24">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Wallet</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Betting Rules & Prices</h2>
      </div>
    </section>


    <!-- Features Section -->
    <section class="w-full px-6 py-16 md:px-16">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Betting Rules</h3>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>Multiple bets per dispute are allowed</li>
          <li>Bets are locked until resolution or cancellation</li>
          <li>Bets close automatically at the creator-defined deadline</li>
        </ul>
      </div>
    </section>
    
    <!-- Use Cases Section -->
    <section class="w-full px-6 py-6 md:px-16">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Understanding Bet Prices</h3>
        <ul class="space-y-3 text-base text-gray-700 list-disc pl-6">
          <li>Prices represent probabilities. A “Yes” share priced at 0.30 = 30% chance.</li>
          <li>Market prices are determined by users — not Betify.</li>
          <li>You can exit early by selling your position before resolution (coming soon).</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
// No script logic needed for static documentation
</script>

<style scoped>
/* Optional: Customize typography further */
</style>
