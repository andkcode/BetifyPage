<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Platform</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Referral System</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">Learn about Betify referral system</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p class="text-base leading-relaxed text-gray-800">
        Betify’s referral system rewards users for bringing new participants into the platform. It’s designed to drive organic growth, reward loyal users, and incentivize community building — all while keeping the system fair, transparent, and decentralized.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">What Is the Referral System?</h1>
      <p class="text-base leading-relaxed text-gray-800">
        The referral system allows users to generate a unique invite link and earn rewards when invited users:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Join Betify</li>
        <li>Create or bet on disputes</li>
        <li>Participate actively over time</li>
      </ul>
      <p class="text-base leading-relaxed text-gray-800">
        It’s free, unlimited, and available to everyone — even unverified users.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">How it works</h1>
      <p class="text-base leading-relaxed text-gray-800">
        The referral system allows users to generate a unique invite link and earn rewards when invited users:
      </p>
      <ul class="space-y-2 text-base text-gray-700 list-decimal pl-6">
        <li>Generate Your Referral Link
          <ol class="space-y-1 text-base text-gray-700 pl-6">
            <li>Use the bot command: /referral</li>
            <li>This will generate a personal tracking link: https://t.me/BetifyBot?start=ref_YourUsername</li>
          </ol>
        </li>
        <li>Share It
          <ol class="space-y-1 text-base text-gray-700 pl-6">
            <li>Send it to friends, post in communities, embed in websites, or add to your social bios.</li>
          </ol>
        </li>
        <li>Earn Rewards
          <ol class="space-y-1 text-base text-gray-700 pl-6">
            <li>When users sign up using your link, you start earning a % of platform fees from their activity (without affecting their payouts).</li>
          </ol>
        </li>
      </ul>
    </section>

      <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Referral Rewards Breakdown</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Action by Referral</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">You Earn</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Referral joins</td>
              <td class="py-3 px-4 text-sm text-gray-800">Welcome bonus (optional)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Referral bets</td>
              <td class="py-3 px-4 text-sm text-gray-800">% of their platform fee (e.g., 10%)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Referral creates dispute</td>
              <td class="py-3 px-4 text-sm text-gray-800">% of dispute activity (if applicable)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Referral invites others</td>
              <td class="py-3 px-4 text-sm text-gray-800">Tiered reward (see below)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto">
      <p class="text-base leading-relaxed text-gray-800">
        You do not earn from:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Dispute losses</li>
        <li>Inactive or spam accounts</li>
        <li>Cancelled disputes</li>
      </ul>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Special Campaigns & Bonuses</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Betify occasionally launches referral campaigns with time-limited bonuses:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Double rewards for top referrers</li>
        <li>Airdrops or NFTs for milestones (e.g., 10 or 50 invites)</li>
        <li>Leaderboard-based prizes (monthly/seasonal)</li>
      </ul>
      <p class="text-base flex font-semibold flex-row justify-start items-center leading-relaxed text-gray-800">
        <UIcon name="ci:line-l" class="text-3xl text-blue-600" />
        Stay updated in the official Betify community channel or via the /news bot command.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Tracking & Dashboard</h1>
      <p class="text-base leading-relaxed text-gray-800">
        All referral activity can be viewed using: /referral_stats
      </p>
      <p class="text-base leading-relaxed text-gray-800">
        You’ll see:
      </p>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Total invited users</li>
        <li>Active referrals (those who bet or create)</li>
        <li>Total earnings</li>
        <li>Tiered stats (Level 1–3)</li>
      </ul>
      <p class="text-base leading-relaxed text-gray-800">
        All rewards are logged and processed automatically, with withdrawals available once a threshold is reached (e.g., 5 USDT).
      </p>
    </section>


    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Anti-Abuse & Fair Use Policy</h1>
      <p class="text-base leading-relaxed text-gray-800">
        To ensure fairness:
      </p>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Fake/multiple accounts under the same user are disqualified</li>
        <li>Bot activity is monitored and blocked</li>
        <li>Referrals must be organic, not incentivized through giveaways or cash unless part of official Betify campaigns</li>
        <li>Abusers may be banned from the referral program and forfeit rewards</li>
      </ul>
      <p class="text-base flex font-semibold flex-row justify-start items-center leading-relaxed text-gray-800">
        <UIcon name="ci:line-l" class="text-3xl text-blue-600" />
        Betify reserves the right to update referral rules at any time, especially during governance transitions.
      </p>
    </section>

      <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Withdrawal of Referral Earnings</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Requirement</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Value</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Minimum Earnings</td>
              <td class="py-3 px-4 text-sm text-gray-800">Typically 5–10 USDT</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Withdrawal Frequency</td>
              <td class="py-3 px-4 text-sm text-gray-800">Weekly (every Friday)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Supported Assets</td>
              <td class="py-3 px-4 text-sm text-gray-800">USDT, BET (future token), ETH</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Claim Command</td>
              <td class="py-3 px-4 text-sm text-gray-800">/claim_referral</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-base leading-relaxed text-gray-800">
        In the future, rewards may also be staked, used to reduce platform fees, or converted into governance power.
      </p>
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
