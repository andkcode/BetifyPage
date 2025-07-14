<template>
    <UApp>
        <Header />
        <main class="flex-1">
            <slot/>
        </main>
        <Footer />
    </UApp>
</template>
<script lang="ts" setup>
import Header from '~/components/Header.vue'    
import Footer from '~/components/Footer.vue'
</script>