<template>
  <div class="hidden lg:flex w-4/5 h-screen bg-[rgba(255,255,255,0.5)] justify-self-center self-center flex-row rounded-[1rem]">
    <SideBar class=""/>

  <div class="w-3/5 h-full overflow-y-auto no-scrollbar">
    <NuxtPage />  
  </div>

  <RightSideBar />

  </div>

  <div class="lg:hidden md:flex w-5/6 h-screen justify-self-center self-center flex-col">
    <!-- <div class="w-full flex flex-row h-1/5"> 
      <SideBar class="bg-[rgba(255,255,255,0.5)] rounded-[1rem] w-full"/>   
      <RightSideBar class="bg-[rgba(255,255,255,0.5)] rounded-[1rem] w-full" />
    </div> -->

  <div class="bg-[rgba(255,255,255,0.5)] rounded-[1rem] h-full overflow-y-auto no-scrollbar">
    <NuxtPage />  
  </div>

  </div>
</template>
<script setup lang="ts">
definePageMeta({
  redirect: '/guide/get-started/what-is-betify'
})
</script>