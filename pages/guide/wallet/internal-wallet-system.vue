<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Wallet</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Internal Wallet System</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">Understanding & Managing Your Betify Balance</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <p class="text-base leading-relaxed text-gray-800">
        The Internal Wallet System in Betify is your central balance hub, where all your betting funds, winnings, and refunds are stored. Unlike external wallets, this is an in-platform account that automatically tracks every transaction related to your disputes, bets, and resolver activity.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Why Betify Uses an Internal Wallet</h1>
      <p>Betify uses an internal wallet to make the prediction market experience faster, cheaper, and safer:</p>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>Instant Transfers – winnings and refunds are credited instantly without blockchain delays.</li>
          <li>No Gas Fees – transfers between users or disputes inside Betify cost nothing.</li>
          <li>Simplified Tracking – all transactions are recorded in one place.</li>
          <li>One Balance for Everything – use the same wallet for betting, dispute creation, and resolver rewards.</li>
        </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">How the Internal Wallet Works</h1>
      <p>Your internal wallet operates like an account ledger within Betify:</p>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>When you deposit via supported methods (e.g., @send), funds are credited here.</li>
          <li>When you place a bet, the amount is locked until the dispute is resolved.</li>
          <li>Winnings are added directly to your wallet balance.</li>
          <li>If a dispute is cancelled, your stake is refunded instantly.</li>
        </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Key Features</h1>
        <ul class="space-y-4 text-base text-gray-700 list-disc pl-6">
          <li>Unified Balance – All your crypto inside Betify, no matter the source, is shown as one balance per token type.</li>
          <li>Multi-Currency Support – You can hold multiple tokens (e.g., TON, USDT) in parallel.</li>
          <li>Transaction History – View deposits, bets, winnings, refunds, and withdrawals in one list.</li>
          <li>Locked vs. Available Funds – Clearly see what’s free to use vs. tied up in active bets.</li>
          <li>Instant Settlement – No waiting for blockchain confirmations when disputes end.</li>
        </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Where to Find It</h1>
      <p class="text-base leading-relaxed flex flex-row justify-start items-center text-gray-800">
        Inside the Betify Telegram bot:
      </p>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Type /wallet at any time.</li>
        <li>You’ll see:
          <ul>
            <li>Available Balance – funds you can use right now.</li>
            <li>Locked Balance – funds currently in active disputes.</li>
            <li>Deposit / Withdraw buttons – for moving funds in and out.</li>
            <li>Transaction History – a full list of actions.</li>
          </ul>
        </li>       
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Example Wallet Flow</h1>
      <p>Let’s say you deposit 10 TON:</p>
      <ul class="space-y-2 text-base text-gray-700 list-decimal pl-6">
        <li>Wallet Balance: 10 TON (all available)</li>
        <li>You bet 3 TON on “Will BTC hit $70k in 2025?” → Balance shows 7 TON available / 3 TON locked.</li>       
        <li>If you win, your 3 TON stake plus winnings are credited instantly to your available balance.</li>    
        <li>If you lose, only your locked balance decreases, available funds stay untouched.</li> 
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Security & Ownership</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Your Funds Stay Yours – Betify doesn’t control your private keys for external wallets, but your internal wallet balance is tracked on our secure servers.</li>
        <li>Verified Transactions Only – Every balance change is tied to a blockchain deposit, bet action, or dispute result.</li>       
        <li>Withdrawal Anytime – You can send your internal balance back to your external wallet whenever you want.</li>    
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Withdrawal Process</h1>
      <ul class="space-y-2 text-base text-gray-700 list-decimal pl-6">
        <li>Go to /wallet in the Betify bot.</li>
        <li>Tap Withdraw.</li>       
        <li>Select your currency and enter the external wallet address.</li>    
        <li>Confirm — withdrawals are processed via blockchain and may require a network fee.</li> 
      </ul>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Best Practices</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Keep enough balance in your wallet to avoid missing last-minute betting opportunities.</li>
        <li>Withdraw only to verified wallet addresses you own.</li>       
        <li>Regularly check your transaction history to stay on top of your funds.</li>   
        <li>Avoid keeping large amounts in your internal wallet unless actively betting.</li>     
      </ul>
    </section>

    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Common Wallet Questions</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Question</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Answer</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Can I hold multiple tokens?</td>
              <td class="py-3 px-4 text-sm text-gray-800">Yes, balances are tracked separately for each supported token.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Is there a minimum balance?</td>
              <td class="py-3 px-4 text-sm text-gray-800">No, but some bets or withdrawals may have minimum amounts.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">What happens if Betify goes offline?</td>
              <td class="py-3 px-4 text-sm text-gray-800">Internal balances are backed by actual on-chain reserves.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Can I transfer to another user?</td>
              <td class="py-3 px-4 text-sm text-gray-800">Yes, via the Send function inside Betify without blockchain fees.</td>
            </tr>
          </tbody>
        </table>
      </div>
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
