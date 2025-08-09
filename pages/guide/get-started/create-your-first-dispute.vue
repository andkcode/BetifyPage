<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Get Started</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Create Your First Dispute</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">Learn how to create you first dispute on Betify</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p>A dispute in Betify is a prediction event where users bet on an outcome.
      <br>As the creator, you define:</p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>What the dispute is about</li>
        <li>Available outcomes</li>
        <li>Deadline for bets</li>
        <li>The resolver (judge) who will pick the winning outcome</li>
      </ul>
      <p>You cannot bet on your own disputes, but you can earn 0.5% of all bets placed in them.</p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">What is a Dispute?</h1>
      <p>Think of a dispute as a crypto-powered betting room you control.
      <br>It could be:</p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Sports: “Will Team A win the match?”</li>
        <li>Crypto markets: “Will BTC close above $30K by Friday?”</li>
        <li>Events: “Will it rain in London on 15th August?”</li>
        <li>Anything measurable: As long as the outcome is clear and verifiable</li>
      </ul>
    </section>

    <section class="w-full px-6 py-10 md:px-10 mx-auto">
      <div class="max-w-5xl">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step: Creating Your First Dispute</h3>
        <ul class="space-y-4 px-6 text-base text-gray-700 list-decimal">
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Start the Creation Command</div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>In the Betify bot, type: /create</li>
              <li>You’ll be guided step-by-step by the bot.</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Choose the Dispute Type</div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Public Dispute — Visible to all Betify users; anyone can bet</li>
              <li>Private Dispute — Hidden; only accessible via a direct link</li>
              Pro Tip: Private disputes are great for small groups, office pools, or friends.
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Set the Dispute Title & Description</div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Title: Short and clear (e.g., “BTC > $30K by 12:00 UTC Aug 15”)</li>
              <li>Description: Add context, sources, or rules (e.g., “Price measured using Binance spot close price”)</li>
              Best Practice: Include how the outcome will be determined to avoid disputes later.
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Choose Possible Outcomes
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Yes / No</li>
              <li>Team A wins / Team B wins / Draw</li>
              <li>BTC above $30K / BTC below $30K</li>
            </ul>
            <p>Important: Outcomes cannot be changed after the first bet is placed.</p>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Select the Currency & Minimum Bet
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Choose TON or USDT (on TON)</li>
              <li>Set minimum bet amount (e.g., 1 USDT or 0.1 TON)</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Set the Betting Deadline
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>The deadline is the last moment users can place bets</li>
              <li>After the deadline, the resolver decides the outcome</li>
            </ul>
          </li>
          <p>Tip: Give enough time for people to find and join your dispute.</p>
          <li class="text-xl text-gray-800 font-semibold">Assign a Resolver
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>The resolver is the judge who decides the winning outcome</li>
              <li>Can be you (if you’re not betting) or another trusted user</li>
              <li>Must be verified for trusted disputes (higher visibility)</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Review & Confirm
            <p>The bot will show a summary of:</p>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Title</li>
              <li>Description</li>
              <li>Outcomes</li>
              <li>Deadline</li>
              <li>Resolver</li>
              <li>Currency & min bet</li>
            </ul>
          </li>
          <p>If all looks correct → confirm to publish your dispute.</p>
        </ul>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Example of a Public Dispute</h1>
      <p>Title: “Will ETH price be above $3,000 by Aug 20, 2025, 12:00 UTC?”</p>
      <p>Description: “Price based on CoinGecko average spot price. Resolver: @CryptoJudge.”</p>
      <p>Outcomes: Yes / No</p>
      <p>Deadline: Aug 19, 2025, 23:59 UTC</p>
      <p>Currency: TON</p>
      <p>Min Bet: 1 TON</p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">How You Earn as a Creator</h1>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>You get 0.5% commission from all bets placed in your dispute</li>
        <li>This is paid automatically to your internal wallet after payouts</li>
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Rules for Creators</h1>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>You cannot bet on your own disputes</li>
        <li>Once published, most details are final (you cannot change outcomes or resolver)</li>
        <li>Make sure your resolver is available after the deadline</li>
        <li>Avoid ambiguous or subjective disputes — keep outcomes measurable</li>
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Common Mistakes to Avoid</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Mistake</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Why It’s a Problem</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">How to Avoid</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Vague description</td>
              <td class="py-3 px-4 text-sm text-gray-800">Leads to disputes about interpretation</td>
              <td class="py-3 px-4 text-sm text-gray-800">Clearly define win/loss conditions</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Unavailable resolver</td>
              <td class="py-3 px-4 text-sm text-gray-800">Payout delays</td>
              <td class="py-3 px-4 text-sm text-gray-800">Choose a resolver who is active</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Too short deadline</td>
              <td class="py-3 px-4 text-sm text-gray-800">Few participants join</td>
              <td class="py-3 px-4 text-sm text-gray-800">Allow at least a few hours/days</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Unrealistic outcomes</td>
              <td class="py-3 px-4 text-sm text-gray-800">No one bets</td>
              <td class="py-3 px-4 text-sm text-gray-800">Make them fair and believable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Security & Trust Tips</h1>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Use a verified resolver for credibility</li>
        <li>For public disputes, provide transparent references (price sources, scoreboards)</li>
        <li>If you suspect bad behavior from participants, report to Admins</li>
      </ul>
    </section>

    <NavigationWrapper leftText="Previous" rightText="Next" leftPath="/guide/disputes/what-is-a-dispute" rightPath="/guide/disputes/fees" />
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
