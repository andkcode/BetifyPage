<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Disputes</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Betting Rules & Prices</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">Learn about Betify disputes rules & prices</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p class="text-base leading-relaxed text-gray-800">
        This section explains the rules all Betify users must follow when placing bets, how pricing and odds work, and the limits that apply to ensure fair play. Whether you are new or experienced, understanding these rules will help you place informed bets and avoid mistakes.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Betting Basics</h1>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>Eligible Users – Only registered Betify users with a funded internal wallet can place bets.</li>
          <li>Where to Bet – Bets are placed inside disputes (markets) that are already created by other users.</li>
          <li>Betting Window – You can only bet before the dispute’s deadline. After that, betting is locked.</li>
          <li>Multiple Bets – You may place multiple bets on the same dispute, even on different outcomes.</li>
          <li>Immutable Bets – Once a bet is placed, it cannot be edited or withdrawn unless the dispute is canceled.</li>
        </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Minimum & Maximum Bets</h1>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>Minimum Stake – Each market has a minimum bet amount set by the system or creator (e.g., 1 USDT).</li>
          <li>Maximum Stake – To prevent manipulation, a cap may be placed on maximum bets per outcome or per user.</li>
          <li>Private Dispute Limits – In private disputes, the creator may set custom min/max limits.</li>
        </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Odds & Payouts</h1>
      <p>Betify uses a dynamic pool-based odds system:</p>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>All bets on the losing outcomes go into a shared prize pool for the winners.</li>
          <li>Your winnings are proportional to the amount you staked compared to the total on your winning side.</li>
          <li>Example:
            <ul class="space-y-2 text-base text-gray-700 list-disc pl-8">
              <li>Total on “Yes” = 100 USDT</li>
              <li>Total on “No” = 50 USDT</li>
              <li>If you bet 10 USDT on “No” and “No” wins, your share is:<br>
              10/50 × (Total losing pool) = 0.2 × 100 = 20 USDT profit (plus your original stake).</li>
            </ul>
          </li>
        </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Fees</h1>
      <p class="text-base leading-relaxed flex flex-row justify-start items-center text-gray-800">
        Resolvers can cancel a dispute <strong class="px-1">after</strong> the deadline if:
      </p>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Betify charges a platform fee on winnings, taken before payouts.</li>
        <li>Fee rates are transparent and displayed before you confirm your bet.</li>       
        <li>A portion of fees may go to the dispute creator or referrers.</li>    
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Currency & Tokens</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Bets are made using supported crypto tokens (e.g., USDT, USDC, DAI).</li>
        <li>Conversion between tokens must be done before placing a bet — Betify does not swap tokens automatically.</li>       
        <li>All winnings are credited to your Betify internal wallet in the same token you used for betting.</li>    
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Fair Play & Restrictions</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>No Insider Betting – Dispute creators cannot bet on their own markets.</li>
        <li>No Collusion – Coordinating bets to manipulate odds is prohibited.</li>       
        <li>No Duplicate Accounts – Users found operating multiple accounts for unfair advantage may be banned.</li>    
        <li>Suspicious Activity – Betify reserves the right to freeze bets if market manipulation is detected.</li> 
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Bet Settlement</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Bets are settled only after the dispute resolver selects a winning outcome.</li>
        <li>If the dispute is canceled, all bets are refunded in full.</li>       
        <li>In case of unclear resolution or fraud, Betify may step in and enforce a cancellation.</li>    
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Special Betting Types</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Multi-Outcome Betting – Bet on more than two possible results (e.g., “Winner A / Winner B / Draw”).</li>
        <li>Hedging Bets – Bet on multiple outcomes to reduce risk.</li>       
        <li>High-Risk Markets – Certain disputes may have higher volatility due to lower liquidity — odds can shift drastically before the deadline.</li>    
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Key Takeaways</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Always double-check odds and fees before placing a bet.</li>
        <li>Understand that all crypto bets carry risk, and odds may change rapidly.</li>       
        <li>Your stake is locked until the dispute is resolved or canceled.</li>    
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
