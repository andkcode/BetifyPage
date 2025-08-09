<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Get Started</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">How to Deposit</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">How to Deposit Funds into Betify</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p class="text-base leading-relaxed text-gray-800">
        You can deposit funds into Betify directly inside Telegram using the @send wallet — no extra platform deposit fees. <br>
        Once deposited, your balance will appear instantly in Betify and can be used for creating disputes, placing bets, or paying resolver fees.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Why Deposit?</h1>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Place bets in disputes and prediction markets</li>
        <li>Fund dispute creation fees (if applicable)</li>
        <li>Ensure you have enough balance for multiple bets</li>
        <li>Participate in private markets requiring upfront stakes</li>
      </ul>
    </section>

    <section class="w-full px-6 py-10 md:px-10 mx-auto">
      <div class="max-w-5xl">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step: Depositing via @send</h3>
        <ul class="space-y-4 px-6 text-base text-gray-700 list-decimal">
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Open Your Wallet</div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>In the Betify bot, type: /wallet</li>
              <li>The bot will display your current balance and a Deposit button.</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Start the Deposit Proces</div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Tap Deposit in the wallet menu.</li>
              <li>You’ll receive instructions to send funds via Telegram’s official @send bot.</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Use Telegram’s @send Feature</div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>In any Telegram chat (even your Saved Messages), type: @send</li>
              <li>Select the currency you want to deposit (e.g., TON, USDT on TON).</li>
              <li>Enter the Betify wallet address provided by the bot.</li>
              <li>Confirm the transaction.</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Wait for Confirmation
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Most deposits appear within a few seconds.</li>
              <li>Once confirmed, your new balance will be displayed in /wallet.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Security & Best Practices</h1>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Never send funds to an address given by anyone other than the official Betify bot.</li>
        <li>Use only currencies supported by Betify — sending unsupported tokens may result in loss.</li>
        <li>Double-check that you are interacting with the verified Betify bot (@BetifyBot).</li>
        <li>If deposit does not appear after 5 minutes, contact support with your transaction ID.</li>
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Common Deposit Issues</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Problem</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Cause</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Solution</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Funds not showing</td>
              <td class="py-3 px-4 text-sm text-gray-800">Sent to wrong address</td>
              <td class="py-3 px-4 text-sm text-gray-800">Verify & re-send to correct Betify wallet</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Deposit pending</td>
              <td class="py-3 px-4 text-sm text-gray-800">Network congestion</td>
              <td class="py-3 px-4 text-sm text-gray-800">Wait — TON usually clears in under 1 min</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Sent unsupported token</td>
              <td class="py-3 px-4 text-sm text-gray-800">Wrong currency used</td>
              <td class="py-3 px-4 text-sm text-gray-800">Contact support — may be unrecoverable</td>
            </tr>
          </tbody>
        </table>
      </div>
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
