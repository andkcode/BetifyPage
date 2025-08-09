<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Bot</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Bot Commands – Cheat Sheet</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">Quick Reference for All Betify Commands</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p class="text-base leading-relaxed text-gray-800">
        Betify operates entirely through Telegram. All actions — from creating a dispute to checking your balance — are triggered by simple commands.<br>
        This page lists every available command, what it does, and how to use it correctly.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">1. Essential Wallet Commands</h1>
      <p>These manage your internal Betify wallet and track your funds:</p>
      <div class="max-w-5xl flex flex-col items-center justify-start">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Command</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Function</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Example</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/wallet</td>
              <td class="py-3 px-4 text-sm text-gray-800">Shows your wallet overview: available balance, locked balance, <br>transaction history, deposit & withdraw options.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/wallet</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/deposit</td>
              <td class="py-3 px-4 text-sm text-gray-800">Generates a deposit address or payment instructions for<br>supported currencies.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/deposit</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/withdraw</td>
              <td class="py-3 px-4 text-sm text-gray-800">Withdraw funds from your internal wallet to your external <br> wallet address.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/withdraw 5 TON</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/send</td>
              <td class="py-3 px-4 text-sm text-gray-800">Instantly transfer funds to another Betify user without <br> blockchain fees.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/send @username 2 TON</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">2. Betting & Dispute Commands</h1>
      <p>These are for placing bets, creating disputes, or resolving them:</p>
      <div class="max-w-5xl flex flex-col items-center justify-start">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Command</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Function</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Example</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/bet</td>
              <td class="py-3 px-4 text-sm text-gray-800">Place a bet on an open dispute.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/bet 123 yes 3 TON</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/create</td>
              <td class="py-3 px-4 text-sm text-gray-800">/create Will ETH reach $3k by Dec 2025?</td>
              <td class="py-3 px-4 text-sm text-gray-800">/deposit</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/disputes</td>
              <td class="py-3 px-4 text-sm text-gray-800">Show a list of active disputes you can bet on.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/disputes</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/resolve</td>
              <td class="py-3 px-4 text-sm text-gray-800">For resolvers: submit a resolution for a finished dispute.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/resolve 123 yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">3. Information & Stats Commands</h1>
      <p>For checking personal stats, leaderboards, or system info:</p>
      <div class="max-w-5xl flex flex-col items-center justify-start">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Command</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Function</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Example</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/stats</td>
              <td class="py-3 px-4 text-sm text-gray-800">Displays your betting stats: total bets, win rate, winnings.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/stats</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/leaderboard</td>
              <td class="py-3 px-4 text-sm text-gray-800">Shows top bettors and resolvers ranked by winnings.	</td>
              <td class="py-3 px-4 text-sm text-gray-800">/leaderboard</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/help</td>
              <td class="py-3 px-4 text-sm text-gray-800">Opens the help menu with guidance on all features.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/help</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/fees</td>
              <td class="py-3 px-4 text-sm text-gray-800">Displays current Betify fee structure and rates.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/fees</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">4. Referral & Rewards Commands</h1>
      <p>To grow your network and earn from referrals:</p>
      <div class="max-w-5xl flex flex-col items-center justify-start">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Command</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Function</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Example</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/referral</td>
              <td class="py-3 px-4 text-sm text-gray-800">Shows your referral link and how much you’ve earned from it.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/referral</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/rewards</td>
              <td class="py-3 px-4 text-sm text-gray-800">Lists bonuses or rewards available to you.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/rewards</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">5. Resolver-Specific Commands</h1>
      <p>Available only to verified resolvers:</p>
      <div class="max-w-5xl flex flex-col items-center justify-start">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Command</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Function</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Example</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/resolver_tasks</td>
              <td class="py-3 px-4 text-sm text-gray-800">List disputes awaiting resolution.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/resolver_tasks</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/resolver_stats</td>
              <td class="py-3 px-4 text-sm text-gray-800">Shows your resolver history and earnings.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/resolver_stats</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">6. Utility & Support Commands</h1>
      <p>Available only to verified resolvers:</p>
      <div class="max-w-5xl flex flex-col items-center justify-start">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Command</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Function</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Example</th>	
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/time</td>
              <td class="py-3 px-4 text-sm text-gray-800">Shows server time (useful for dispute deadlines).</td>
              <td class="py-3 px-4 text-sm text-gray-800">/time</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/support</td>
              <td class="py-3 px-4 text-sm text-gray-800">Opens a link to Betify’s support channel or ticket system.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/support</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">/about</td>
              <td class="py-3 px-4 text-sm text-gray-800">Information about Betify’s mission and mechanics.</td>
              <td class="py-3 px-4 text-sm text-gray-800">/about</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Command Usage Tips</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>No brackets needed — just type the command and required details.</li>
        <li>Commands are case-insensitive (/Bet = /bet).</li>       
        <li>Some commands have optional arguments — if left blank, the bot will prompt you for them.</li> 
        <li>You can run commands in any chat with the bot — group or private.</li> 
        <li>Use /help anytime if you forget a command or need syntax help.</li>    
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Example Quick Flow</h1>
      <ul class="space-y-2 text-base text-gray-700 list-decimal pl-6">
        <li>Check balance – /wallet</li>
        <li>Find disputes – /disputes</li>       
        <li>Place bet – /bet 145 yes 5 TON</li>    
        <li>Check status – /disputes again or wait for bot notification.</li> 
        <li>Withdraw winnings – /withdraw 10 TON</li> 
      </ul>
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
