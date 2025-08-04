<template>
  <div class="h-full flex flex-col items-center justify-center bg-transparent px-4 py-10">
    <!-- Hero Section -->
    <div class="flex flex-col xl:flex-row w-full items-center justify-center text-center xl:text-left space-y-8 xl:space-y-0 xl:space-x-12 max-w-8xl">
      
    <div class="flex flex-col items-center xl:items-start space-y-6 w-full xl:w-auto text-center xl:text-left">
      <div class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-none tracking-tight">
        <h1 class="leading-tight">Built</h1>
        <h1 class="leading-tight">for</h1>
        <h1 class="leading-tight text-blue-700">winners<span class="text-blue-700">.</span></h1>
      </div>
      <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed font-medium">
        <span class="font-semibold">Betify</span> — power, precision, and <span class="text-blue-700 font-semibold">victory</span> in every bet.
      </p>
    </div>

      <img src="/assets/phones.png" alt="Phones Image" class="w-full sm:w-4/5 md:w-3/5 xl:w-1/2 h-auto max-w-md xl:max-w-none" />
    </div>

    <!-- Content Section -->
    <div class="flex flex-col xl:flex-row items-start justify-between w-full mt-10 xl:mt-30 xl:space-y-0">
      <div class="flex flex-col items-start px-4 sm:px-8 lg:px-16 xl:px-32 max-w-9xl space-y-10 w-full xl:w-auto">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          <span class="text-blue-700">Betify</span> — It's Not Just a Bet.
          <p class="text-xl sm:text-2xl text-gray-500 mt-2">Challenge. Identity. Accountability.</p>
        </h2>

        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed">
          <strong>Betify</strong> is a Telegram-based challenge platform that transforms everyday challenges into epic showdowns. With <strong>Betify</strong>, you set the terms, challenge anyone, and prove yourself — <em>no luck involved.</em> <strong>Betify</strong> helps you commit, <strong>compete</strong>, and conquer.
        </p>
        
        <div class="space-y-6 sm:space-y-8 text-left text-gray-900 text-base sm:text-lg">
          <p>
            <span class="font-semibold flex items-center gap-3 text-lg sm:text-xl mb-2">
              <UIcon name="fluent-emoji-high-contrast:brain" class="text-xl sm:text-2xl text-blue-600 flex-shrink-0" />
              Psychology-Powered. Precision-Driven.
            </span>
            Betify fires up your competitive edge. It's not gambling — it's a blend of <strong>strategy, psychology</strong>, and <strong>personal growth</strong> packed into one smart interface.
          </p>

          <p>
            <span class="font-semibold flex items-center gap-3 text-lg sm:text-xl mb-2">
              <UIcon name="solar:settings-outline" class="text-xl sm:text-2xl text-blue-600 flex-shrink-0" />
              Set the Rules. Raise the Stakes.
            </span>
            Want to bet on who wakes up earlier? Who wins the game? Who commits longer? <strong>Betify lets you craft the contest</strong>, down to the final second.
          </p>

          <p>
            <span class="font-semibold flex items-center gap-3 text-lg sm:text-xl mb-2">
              <UIcon name="line-md:telegram" class="text-xl sm:text-2xl text-blue-600 flex-shrink-0" />
              No App. No Clutter. No Excuses.
            </span>
            Forget installs. No friction. Betify lives right where you chat, transforming casual convos into <em>clash-of-the-titans</em> moments.
          </p>

          <p>
            <span class="font-semibold flex items-center gap-3 text-lg sm:text-xl mb-2">
              <UIcon name="mingcute:fire-line" class="text-xl sm:text-2xl text-blue-600 flex-shrink-0" />
              High Stakes. Real Results.
            </span>
            Betify is where <strong>performance meets proof</strong>. It's not about chance — it's about character. <em>Step up. Put it on the line. Own the outcome.</em>
          </p>
        </div>

        <!-- CTA Button -->
        <UButton
          to="https://t.me/parse_exchanges_bot"
          target="_blank"
          icon="mingcute:telegram-fill"
          class="mt-6 flex justify-center items-center bg-blue-500 rounded-full text-white font-semibold text-lg px-10 py-4 hover:bg-blue-600 transition"
        >
          Let's win!
        </UButton>    
      </div>
      
      <!-- 3D Section -->
      <div class="flex-shrink-0 flex items-center justify-center w-full max-w-4xl h-auto max-h-[600px]">
        <ThreeDModel />
      </div>
    </div>
    <div class="w-full bg-gray-200 text-center">
      <h1 class="text-4xl font-bold text-gray-900">People are betting right now!</h1>
      <div class="text-gray-600 text-lg mt-2">Join the action and prove yourself!</div>
      <div class="bg-white w-[60%] h-[7rem] my-5 flex self-center justify-self-center rounded-2xl">
        <div class="flex items-start justify-center w-full px-4 py-2">
        <PersonGenerator />
      </div>
      </div>
    </div>  
  </div>
</template>

<script setup lang="ts">
import ThreeDModel from '@/components/ThreeDModel.vue'
import PersonGenerator from '@/components/PersonGenerator.vue'
</script>
