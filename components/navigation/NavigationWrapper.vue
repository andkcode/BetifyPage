<template>
    <section class="w-full space-y-2 flex flex-col mx-auto pb-2"> 
      <span class="w-full h-[2px] bg-blue-200"></span>
      <div class="flex flex-row items-center justify-between text-[0.9rem] my-2 mx-2">
        <LeftNavigation :path="leftPath" :text="leftText" />
        <RightNavigation :path="rightPath" :text="rightText" />
      </div>
    </section>
</template>

<script lang="ts" setup>
import LeftNavigation from '~/components/navigation/LeftNavigation.vue';
import RightNavigation from '~/components/navigation/RightNavigation.vue';
defineProps({
  leftText: String,
  rightText: String,
  leftPath: String,
  rightPath: String
})
</script>

<style>

</style>