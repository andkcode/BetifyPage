<template>
  <div class="flex flex-col w-full h-full text-gray-800">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-16 md:px-16 md:pt-24">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Wallet</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Internal Wallet System</h2>
        <p class="mt-6 text-lg leading-relaxed text-gray-600">
          Betify integrates seamlessly with the @send Telegram wallet, enabling:
        </p>
      </div>
    </section>


    <!-- Features Section -->
    <section class="w-full px-6 py-16 md:px-16">
      <div class="max-w-5xl mx-auto">
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>Instant deposits & withdrawals (no external wallets needed)</li>
          <li>No transaction fees</li>
          <li>Bets from balance or direct transfer</li>
        </ul>
      </div>
    </section>

    <section class="w-[45rem] mx-10 md:px-16 text-base text-gray-700">
      <p class="bg-[rgba(255,255,255,0.2)] py-2 px-4">Winnings are auto-credited to your internal wallet after resolution.</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
// No script logic needed for static documentation
</script>

<style scoped>
/* Optional: Customize typography further */
</style>
