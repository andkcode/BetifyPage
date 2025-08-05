<template>
  <div class="flex flex-col w-full h-full text-gray-800">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-16 md:px-16 md:pt-24">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Security</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Role & Permissions</h2>
      </div>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Role</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Abilities</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Admin</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Verifies users/disputes, appoints moderators, resolves escalations
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Creator</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Launches disputes, sets deadline, resolver, visibility (public/private)
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Resolver</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Chooses the winning outcome after deadline; may cancel with refunds
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">User</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Places bets on accessible disputes, tracks results, earns from referrals
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
