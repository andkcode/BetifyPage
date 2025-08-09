<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Disputes</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">How Disputes Work</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">How Betify Disputes Work — Create | Bet | Resolve</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">How Disputes Work in Betify</h1>
      <p class="text-base leading-relaxed text-gray-800">
        A dispute in Betify is a prediction market — a question with multiple possible outcomes. 
        Users can bet on these outcomes using crypto, and a designated resolver determines 
        the result after the deadline. Betify supports public and private disputes, 
        allows full control over market creation, and guarantees decentralized 
        resolution via smart roles.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">What Is a Dispute?</h1>
      <p class="text-base leading-relaxed text-gray-800">
        A dispute is a market where users 
        bet on the outcome of a real-world 
        or digital event. Think of it like 
        creating a decentralized poll where 
        people stake money on different results — and one of them wins.
      </p>
      <div class="space-y-2 flex flex-col">
      <h1 class="text-xl font-semibold text-gray-900">Example Disputes:</h1>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6 italic">
          <li>“Will Ethereum hit $4,000 before Sept 1st?”</li>
          <li>“Will Team A win the next match?”</li>
          <li>“Will this Twitter poll reach 10k votes in 24h?”</li>
        </ul>
      </div>
    </section>


    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Dispute Body</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Field</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Title</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Name of the event (e.g., "Will it rain tomorrow in Paris?")
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Description</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Optional, for context or rules
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Outcomes</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                2+ possible results (e.g., Yes / No)
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Deadline</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Time until which users can place bets
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Resolver</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                Person who will decide the outcome
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Visibility</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                	Public or Private
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Currency</td>
              <td class="py-3 px-4 text-sm text-gray-800">
                The token used for bets (via @send)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Who Can Create a Dispute?</h1>
      <p class="text-base leading-relaxed flex flex-row justify-start items-center text-gray-800">
      Any registered user can create a dispute using the <BetifyText text="/create"/> command in Telegram.
      </p>
      <p class="text-base flex font-semibold flex-row justify-start items-center leading-relaxed text-gray-800">
        <UIcon name="ci:line-l" class="text-3xl text-blue-600" />
        A creator cannot bet in their own dispute to prevent conflict of interest.
      </p>
    </section>

    <section class="w-full px-6 py-10 md:px-10 mx-auto">
      <div class="max-w-5xl">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Dispute Lifecycle</h3>
        <ul class="space-y-4 px-6 text-base text-gray-700 list-decimal">
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Creation Phase<BetifyText text="/create" class="font-normal text-base" /></div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Creator chooses title, outcomes, currency, resolver, deadline, visibility</li>
              <li>Dispute ID is generated</li>
              <li>Dispute goes live, accepting bets</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Betting Phase<BetifyText text="/mybets" class="font-normal text-base" /></div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Users place bets on one or more outcomes</li>
              <li>Multiple bets per user are allowed</li>
              <li>Bets are accepted until the dispute deadline</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Resolution Phase<BetifyText text="/mydisputes" class="font-normal text-base" /></div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Once the deadline passes, only the assigned resolver can resolve</li>
              <li>Resolver selects the winning outcome</li>
              <li>All other outcomes are considered losses</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Payout Phase
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Winners receive payouts proportionally from the losing side</li>
              <li>All payouts go to the user’s internal wallet</li>
              <li>Fees are distributed (more below)</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section class="w-full px-6 py-10 md:px-10 mx-auto">
      <div class="max-w-5xl">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Types of Disputes</h3>
        <ul class="space-y-4 text-base text-gray-700">
          <li class="text-xl text-gray-800 font-semibold">Creation Phase
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc px-6 pt-2">
              <li>Visible to all Betify users</li>
              <li>Anyone can place bets</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Betting Phase
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc px-6 pt-2">
              <li>Hidden from general listings</li>
              <li>Accessible only via a unique link</li>
            </ul>
          </li>
        </ul>
        <p class="text-base flex font-semibold flex-row justify-start pt-2 items-center leading-relaxed text-gray-800">
          <UIcon name="ci:line-l" class="text-3xl text-blue-600" />
          Use private disputes for private groups, DAOs, or trusted circles.
      </p>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Cancellation & Refunds</h1>
      <p class="text-base leading-relaxed flex flex-row justify-start items-center text-gray-800">
        Resolvers can cancel a dispute <strong class="px-1">after</strong> the deadline if:
      </p>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>The outcome is unclear</li>
        <li>The event did not occur</li>       
        <li>Fraud or conflict arises</li>    
      </ul>
      <p class="text-base leading-relaxed flex flex-row justify-start items-center text-gray-800">
        Cancellation refunds <strong class="px-1">all bets</strong> to the original wallets. No fees are taken.
      </p>
    </section>
    <NavigationWrapper leftText="Previous" rightText="Next"  />
  </div>
</template>

<script lang="ts" setup>
import { UIcon } from '#components';
import BetifyText from '~/components/BetifyText.vue';
import NavigationWrapper from '~/components/navigation/NavigationWrapper.vue';

// No script logic needed for static documentation
</script>

<style scoped>
/* Optional: Customize typography further */
</style>
