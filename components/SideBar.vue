<template>
    <div class="bg-dark h-full w-1/5 flex flex-col overflow-auto">
      <div class="flex flex-col justify-center space-y-6 py-4 px-4 mt-6">

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Get Started</h1>
        <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton
            :to="'/guide/get-started/what-is-betify'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/get-started/what-is-betify')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          What is Betify?
          </UButton>

          <UButton
            :to="'/guide/get-started/how-to-start'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/get-started/how-to-start')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          How to Start
          </UButton>

          <UButton
            :to="'/guide/get-started/how-to-deposit'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/get-started/how-to-deposit')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          How to Deposit
          </UButton>

          <UButton
            :to="'/guide/get-started/create-your-first-dispute'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/get-started/create-your-first-dispute')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Create Your First Dispute
          </UButton>
          <UButton
            :to="'/guide/get-started/create-your-first-dispute'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/get-started/create-your-first-dispute')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          How to Place a Bet
          </UButton>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Disputes</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton
            :to="'/guide/disputes/how-disputes-work'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/disputes/how-disputes-work')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          How Disputes Work
          </UButton>
          <UButton
            :to="'/guide/disputes/betting-rules-prices'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/disputes/betting-rules-prices')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Betting Rules & Prices
          </UButton>
          <UButton
            :to="'/guide/disputes/betting-rules-prices'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/disputes/betting-rules-prices')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Understanding Odds & Payouts
          </UButton>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Wallet</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
            <UButton
            :to="'/guide/wallet/internal-wallet-system'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/wallet/internal-wallet-system')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Internal Wallet System
          </UButton>
          <UButton
            :to="'/guide/wallet/internal-wallet-system'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/wallet/internal-wallet-system')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Supported Tokens & Wallets
          </UButton>
          <UButton
            :to="'/guide/wallet/internal-wallet-system'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/wallet/internal-wallet-system')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Withdraw
          </UButton>
        </div>
      </div>

        <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Platform</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton
            :to="'/guide/platform/platform-fees'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/platform/platform-fees')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Platform Fees
          </UButton>

          <UButton
            :to="'/guide/platform/referral-system'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/platform/referral-system')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Referral System
          </UButton>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Security</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
            <UButton
            :to="'/guide/security/role-permissions'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/get-started/role-&-permissions')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Role & Permissions
          </UButton>
          <UButton
            :to="'/guide/security/verification'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/get-started/verification')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Verification
          </UButton>
        </div>
      </div>

        <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Bot</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
            <UButton
            :to="'/guide/bot/cheat-sheet'"
            :class="[
              'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
              isActive('/guide/bot/cheat-sheet')
                ? 'bg-blue-500 hover:bg-blue-500 text-white'
                : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
            ]"
          >
          Bot Commands
          </UButton>
        </div>
      </div>
      
    </div>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const isActive = (path: string) => {
    return route.path.startsWith(path)
}
</script>

<style>

</style>