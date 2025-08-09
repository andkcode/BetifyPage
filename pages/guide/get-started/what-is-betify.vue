<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Get Started</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">What is Betify?</h2>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p class="text-base leading-relaxed text-gray-800">
        Betify is a decentralized prediction market and dispute resolution platform operated via Telegram, where anyone can create, join, and resolve trustless bets on real-world outcomes.
      </p>
            <p class="text-base leading-relaxed text-gray-800">It combines the power of Web3 with the simplicity of Telegram’s interface, enabling users to forecast events, settle disputes, and earn rewards — all in a transparent, peer-governed, and censorship-resistant way.</p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Why Betify?</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Traditional prediction markets and betting platforms suffer from:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>High fees</li>
        <li>Centralized control</li>
        <li>Slow onboarding</li>
        <li>Lack of transparency</li>
        <li>Geographic restrictions</li>
      </ul>
      <p class="text-base leading-relaxed text-gray-800">
        Betify solves all of this.
      </p>
      <p class="text-base leading-relaxed text-gray-800">
        With no KYC, no middleman, and fully on-chain logic, Betify makes it easy for anyone to:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Bet on real events — politics, sports, crypto, trends</li>
        <li>Create custom markets and challenges</li>
        <li>Resolve disputes through decentralized actors</li>
        <li>Participate in governance, verification, and moderation</li>
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Core Features</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Feature</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Dispute Creation</td>
              <td class="py-3 px-4 text-sm text-gray-800">Any user can create a prediction market ("dispute") about any outcome</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">On-chain Settlement</td>
              <td class="py-3 px-4 text-sm text-gray-800">Outcomes are verified and resolved by independent resolvers or the crowd</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Private & Public Markets</td>
              <td class="py-3 px-4 text-sm text-gray-800">Create invite-only bets or open global prediction pools</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">No Middlemen</td>
              <td class="py-3 px-4 text-sm text-gray-800">No centralized entity controls your funds or outcomes</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Telegram-Native Interface</td>
              <td class="py-3 px-4 text-sm text-gray-800">All interaction happens within a simple, fast Telegram bot UI</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Multi-Token Support</td>
              <td class="py-3 px-4 text-sm text-gray-800">Bet and payout in USDT, ETH, or other supported currencies</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Referral System</td>
              <td class="py-3 px-4 text-sm text-gray-800">Earn by inviting others to the platform</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Verification System</td>
              <td class="py-3 px-4 text-sm text-gray-800">Protect market integrity by verifying disputes and users</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Governance (Coming Soon)</td>
              <td class="py-3 px-4 text-sm text-gray-800">Token-based voting to shape the platform’s future</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full px-6 py-10 md:px-10 mx-auto">
      <div class="max-w-5xl">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">How It Works – At a Glance</h3>
        <ul class="space-y-4 px-6 text-base text-gray-700 list-decimal">
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Join Telegram Bot</div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Use <BetifyText text="@BetifyBot" class="font-normal text-base" /></li>
              <li>Start with /help or /create to get going</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Create or Join a Dispute<BetifyText text="/mybets" class="font-normal text-base" /></div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Disputes are prediction markets with outcomes</li>
              <li>Choose type (public/private), resolver, deadline</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">
            <div class="flex flex-row items-center">Place a Bet<BetifyText text="/mydisputes" class="font-normal text-base" /></div>
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Use supported tokens to pick an outcome</li>
              <li>View live odds, volume, and expiry</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Outcome Is Resolved
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Neutral resolver picks outcome</li>
              <li>Optionally escalated if there's disagreement</li>
            </ul>
          </li>
          <li class="text-xl text-gray-800 font-semibold">Payout
            <ul class="space-y-4 text-base font-normal text-gray-700 list-disc pl-2 pt-2">
              <li>Winning side gets paid instantly, fees are deducted</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Example Use Cases</h1>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Crypto Prediction: “Will ETH break $4,000 by Sep 1st?”</li>
        <li>Sports: “Will Real Madrid win this weekend?”</li>
        <li>Politics: “Will Biden run for re-election?”</li>
        <li>Community Challenges: “Will John go to the gym 10x this month?”</li>
        <li>Business Forecasts: “Will Apple release an M5 chip by Q2?”</li>
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Who Is Betify For?</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Role</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Use Case</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Forecasters</td>
              <td class="py-3 px-4 text-sm text-gray-800">Predict outcomes and earn from being right</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Creators</td>
              <td class="py-3 px-4 text-sm text-gray-800">Launch markets about anything</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Communities</td>
              <td class="py-3 px-4 text-sm text-gray-800">Run internal bets (DAOs, Telegram groups, etc.)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Resolvers</td>
              <td class="py-3 px-4 text-sm text-gray-800">Earn trust and reputation by resolving markets</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Moderators</td>
              <td class="py-3 px-4 text-sm text-gray-800">Keep the platform fair and abuse-free</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Referrers</td>
              <td class="py-3 px-4 text-sm text-gray-800">Grow the ecosystem and earn passively</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Is Betify Safe?</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Yes — Betify is built with security and fairness as top priorities:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Smart Contracts: All funds and logic are on-chain</li>
        <li>Non-Custodial: Betify never holds your money</li>
        <li>Verified Actors: Market creators, resolvers, and disputes can be verified</li>
        <li>Community Oversight: Escalation and admin moderation ensures resolution fairness</li>
        <li>Open Source (planned): Code and governance will be community-owned</li>
      </ul>
    </section>

   <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">What Makes Betify Different?</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Traditional Betting</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Betify</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Centralized</td>
              <td class="py-3 px-4 text-sm text-gray-800">Decentralized, smart contract-based</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">KYC / Geo-blocked</td>
              <td class="py-3 px-4 text-sm text-gray-800">Anonymous, global</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">High fees</td>
              <td class="py-3 px-4 text-sm text-gray-800">Transparent low fees (1-5%)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Limited bets</td>
              <td class="py-3 px-4 text-sm text-gray-800">Any user can create any prediction</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Opaque results</td>
              <td class="py-3 px-4 text-sm text-gray-800">Public, verifiable dispute resolution</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">No governance</td>
              <td class="py-3 px-4 text-sm text-gray-800">Community voting & governance (soon)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Future Vision</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Betify aims to become:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>The Telegram-native prediction infrastructure</li>
        <li>The go-to toolkit for decentralized truth markets</li>
        <li>A foundation for community-based forecasts</li>
        <li>A decentralized social layer for verifying claims</li>
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
