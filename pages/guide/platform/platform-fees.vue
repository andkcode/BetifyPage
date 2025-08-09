<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Platform</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Platform Fees</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">Learn about Betify platform fees</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p class="text-base leading-relaxed text-gray-800">
        Betify operates as a decentralized prediction platform that sustains itself through a transparent, low-cost fee model. This page explains what types of fees exist, why they matter, how they’re calculated, and how users can reduce or avoid them in some cases.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Why Fees Exist</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Platform fees are essential to maintain:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Sustainability: Cover operational and infrastructure costs (e.g., hosting, Telegram integration, smart contract gas, etc.)</li>
        <li>Incentives: Reward creators, resolvers, and contributors to dispute integrity</li>
        <li>Fairness: Deter spam, market manipulation, and frivolous dispute creation</li>
        <li>Governance Funding: In future DAO setups, a portion of fees may fund community decisions, feature requests, or dispute appeal pools</li>
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Types of Fees</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Fee Type</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Who pays it</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">When It's Charged</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Typical Rate</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Platform Fee</td>
              <td class="py-3 px-4 text-sm text-gray-800">Bettors</td>
              <td class="py-3 px-4 text-sm text-gray-800">On winning payouts</td>
              <td class="py-3 px-4 text-sm text-gray-800">~1–3%</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Dispute Creation Fee</td>
              <td class="py-3 px-4 text-sm text-gray-800">Creator</td>
              <td class="py-3 px-4 text-sm text-gray-800">Upon dispute creation (only public disputes)</td>
              <td class="py-3 px-4 text-sm text-gray-800">Fixed or % based</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Resolver Fee</td>
              <td class="py-3 px-4 text-sm text-gray-800">Platform (shared with Resolver)</td>
              <td class="py-3 px-4 text-sm text-gray-800">After resolution of dispute</td>
              <td class="py-3 px-4 text-sm text-gray-800">~1–2% (from pool)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Inactivity Penalty</td>
              <td class="py-3 px-4 text-sm text-gray-800">Creator/Resolver</td>
              <td class="py-3 px-4 text-sm text-gray-800">If dispute is abandoned without resolution</td>
              <td class="py-3 px-4 text-sm text-gray-800">Up to 10% held</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Withdrawal Fee</td>
              <td class="py-3 px-4 text-sm text-gray-800">User</td>
              <td class="py-3 px-4 text-sm text-gray-800">On token withdrawal to external wallet (optional)</td>
              <td class="py-3 px-4 text-sm text-gray-800">Network Gas Only</td>
            </tr>
          </tbody>
        </table>
        <p>All rates are transparent and shown before confirmation. No hidden costs.</p>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Fee Breakdown: Example</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Let’s walk through a practical example:
      </p>
      <p class="text-base flex font-semibold flex-row justify-start items-center leading-relaxed text-gray-800">
        <UIcon name="ci:line-l" class="text-6xl text-blue-600" />
        A user wins 100 USDT in a prediction market. The platform fee is 2%.<br>
        Payout received: 100 - (2%) = 98 USDT
      </p>
      <p class="text-base leading-relaxed text-gray-800">
        If a creator sets a dispute with a 1% creation fee and 10,000 USDT enters the pool:
      </p>
      <p class="text-base flex font-semibold flex-row justify-start items-center leading-relaxed text-gray-800">
        <UIcon name="ci:line-l" class="text-3xl text-blue-600" />
        Fee paid at creation: 10,000 × 1% = 100 USDT (deducted from total market)
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Custom Fee Settings by Creators</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Creators can customize some fees when launching disputes:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Creator Fee: Optional reward from the pool (e.g., 1–2%)</li>
        <li>Resolver Fee: Incentivizes fair resolution (1–3% typically)</li>
        <li>Participation Fee: Optional extra charged on each bet (for private markets or fundraising)</li>
      </ul>
      <p class="text-base leading-relaxed text-gray-800">
        All fees are clearly displayed before confirmation and cannot be changed after publishing.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Who Gets the Fees?</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Here’s where fees go:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Platform Treasury: Covers development, infrastructure, and support</li>
        <li>Resolver Rewards: For accurate, fair outcome determination</li>
        <li>Creator Rewards: If optional creator fee is set</li>
        <li>Governance Vault (future): DAO-controlled funding for community purposes</li>
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">How to Avoid or Reduce Fees</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Strategy</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Effect</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Use verified wallet</td>
              <td class="py-3 px-4 text-sm text-gray-800">Get discounts or cashback</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Hold platform token (if any)</td>
              <td class="py-3 px-4 text-sm text-gray-800">Fee reduction or rebates</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Participate in promotions</td>
              <td class="py-3 px-4 text-sm text-gray-800">Free dispute creation vouchers</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Resolve disputes accurately</td>
              <td class="py-3 px-4 text-sm text-gray-800">Earn fees instead of paying</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Avoid inactivity penalties</td>
              <td class="py-3 px-4 text-sm text-gray-800">Prevent fee losses</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Transparency & Auditability</h1>
      <p class="text-base leading-relaxed text-gray-800">
        All fee transactions are:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>On-chain (where applicable) — for public audit</li>
        <li>Logged in the Telegram bot interface — for clear history</li>
        <li>Summarized in payout receipts — per user per market</li>
      </ul>
      <p class="text-base leading-relaxed text-gray-800">
        This ensures trust, clarity, and no surprises.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Future Fee Governance</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Betify is evolving into a decentralized system. Soon, fee models may be:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>Voted by token holders or governance members</li>
        <li>Adjusted based on platform usage</li>
        <li>Shared back with the community via staking or participation rewards</li>
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Refunds & Dispute Failures</h1>
      <p class="text-base leading-relaxed text-gray-800">
        If a dispute is canceled or invalidated:
      </p>
      <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
        <li>All participation fees are refunded</li>
        <li>Platform fees are waived</li>
        <li>Creation/resolution rewards are forfeited</li>
        <li>Dispute is marked as "invalid/canceled" for transparency</li>
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Summary</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Fee Type</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Fixed?</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Adjustable?</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Who Benefits?</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Platform Fee</td>
              <td class="py-3 px-4 text-sm text-gray-800">Yes</td>
              <td class="py-3 px-4 text-sm text-gray-800">No</td>
              <td class="py-3 px-4 text-sm text-gray-800">Platform treasury</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Creator Fee</td>
              <td class="py-3 px-4 text-sm text-gray-800">No</td>
              <td class="py-3 px-4 text-sm text-gray-800">Yes</td>
              <td class="py-3 px-4 text-sm text-gray-800">Dispute creator (optional)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Resolver Fee</td>
              <td class="py-3 px-4 text-sm text-gray-800">No</td>
              <td class="py-3 px-4 text-sm text-gray-800">Yes</td>
              <td class="py-3 px-4 text-sm text-gray-800">Resolver</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Withdrawal Gas</td>
              <td class="py-3 px-4 text-sm text-gray-800">Yes</td>
              <td class="py-3 px-4 text-sm text-gray-800">No</td>
              <td class="py-3 px-4 text-sm text-gray-800">Blockchain miners</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Penalty (Inactive)</td>
              <td class="py-3 px-4 text-sm text-gray-800">Yes</td>
              <td class="py-3 px-4 text-sm text-gray-800">No</td>
              <td class="py-3 px-4 text-sm text-gray-800">Treasury or redistributed</td>
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
