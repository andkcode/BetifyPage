<template>
  <div class="flex flex-col w-full h-full text-gray-800">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-16 md:px-16 md:pt-24">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Platform</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Platform Fees</h2>
        <p class="mt-6 text-lg leading-relaxed text-gray-600">
          Each bet carries a 2% flat commission, broken down transparently:
        </p>
      </div>
    </section>


    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Fee Share</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Recipient</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">0.5%</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Platform
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">0.5%</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Referrer
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">0.5%</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Dispute Creator
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">0.5%</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Resolver
              </td>
            </tr>
          </tbody>
        </table>
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
