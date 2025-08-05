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

        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Deposits and Withdrawals</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">What is Betify?</UButton>
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">How to Deposit</UButton>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Deposits and Withdrawals</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">What is Betify?</UButton>
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">How to Deposit</UButton>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Deposits and Withdrawals</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">What is Betify?</UButton>
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">How to Deposit</UButton>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Deposits and Withdrawals</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">What is Betify?</UButton>
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">How to Deposit</UButton>
        </div>
      </div>

            <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Deposits and Withdrawals</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">What is Betify?</UButton>
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">How to Deposit</UButton>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start space-y-4">
        <h1 class="font-semibold text-blue-400 text-base px-4">Deposits and Withdrawals</h1>
          <div class="flex flex-col items-start justify-start space-y-1 w-full pr-8">
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">What is Betify?</UButton>
          <UButton class="text-gray-400 text-sm cursor-pointer bg-color-none w-full px-4 py-[0.5rem] rounded-[0.5rem] hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">How to Deposit</UButton>
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