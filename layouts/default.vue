<template>
    <UApp>
        <Header />
            <slot />
        <Footer />
    </UApp>
</template>
<script lang="ts" setup>
import Header from '~/components/Header.vue'    
import Footer from '~/components/Footer.vue'
</script>