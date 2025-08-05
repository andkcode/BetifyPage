<template>
  <div class="flex flex-col w-full h-full text-gray-800">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-16 md:px-16 md:pt-24">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Bot</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Bot Commands (Cheat Sheet)</h2>
      </div>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Command</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/start, /help</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Begin your journey & view intro
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/menu</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Open the main menu
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/wallet</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                View wallet, deposit or withdraw funds
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/create</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Launch a new dispute
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/find_by_id</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Search for a dispute by ID
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/mydisputes</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                	See your disputes (created, resolved, or joined)
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/mybets</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                View your active and past bets
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/invite</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Generate your referral link
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-[45rem] mx-10 md:px-16 text-base text-gray-700">
      <p class="bg-[rgba(255,255,255,0.2)] py-2 px-4">Creators and resolvers cannot bet on their own disputes.</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
// No script logic needed for static documentation
</script>

<style scoped>
/* Optional: Customize typography further */
</style>
