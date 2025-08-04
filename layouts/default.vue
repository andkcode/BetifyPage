<template>
    <UApp>  
        <Header />
        <main class="flex-1">
            <UButton 
                icon="pepicons-print:line-x" 
                class="fixed lg:hidden bg-blue-500 top-0 rounded-none w-full h-[0.5rem] text-[2rem] text-white items-center justify-center z-50" 
                @click="toggleMobileMenu" 
            />
            
            <!-- Mobile Menu with slide down animation -->
            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="transform -translate-y-full opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-full opacity-0"
            >
                <div v-if="showMobileMenu" class="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-40 border-b">
                    <!-- Spacer for the button -->
                    <div class="h-[0.1rem] bg-transparent"></div>
                    
                    <nav class="flex flex-col py-4">
                        <NuxtLink 
                            to="/" 
                            class="px-6 py-3 hover:bg-gray-50 hover:text-blue-600 transition-colors font-semibold" 
                            @click="closeMobileMenu"
                        >
                            Home
                        </NuxtLink>
                        <NuxtLink 
                            to="/guide" 
                            class="px-6 py-3 hover:bg-gray-50 hover:text-blue-600 transition-colors font-semibold" 
                            @click="closeMobileMenu"
                        >
                            Guide
                        </NuxtLink>
                        <!-- <NuxtLink to="/results" class="px-6 py-3 hover:bg-gray-50 hover:text-blue-600 transition-colors font-semibold" @click="closeMobileMenu">Results</NuxtLink>
                        <NuxtLink to="/pricing" class="px-6 py-3 hover:bg-gray-50 hover:text-blue-600 transition-colors font-semibold" @click="closeMobileMenu">Pricing</NuxtLink>
                        <NuxtLink to="/blog" class="px-6 py-3 hover:bg-gray-50 hover:text-blue-600 transition-colors font-semibold" @click="closeMobileMenu">Blog</NuxtLink> -->
                    </nav>
                </div>
            </Transition>
            
            <!-- Overlay to close menu when clicking outside -->
            <div 
                v-if="showMobileMenu" 
                class="lg:hidden fixed inset-0 z-30 bg-[rgba(255,255,255,0.5)] backdrop-blur-sm transition duration-600 ease-in-out" 
                @click="closeMobileMenu"
            ></div>
            
            <slot/>
        </main>
        <Footer />
    </UApp>
</template>
<script lang="ts" setup>
import Header from '~/components/Header.vue'    
import Footer from '~/components/Footer.vue'
</script>