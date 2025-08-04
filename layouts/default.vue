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
            
            <UButton 
                icon="mingcute:right-fill" 
                :class="isActive('/guide') ? 'lg:hidden bg-blue-600 text-white fixed bottom-0 my-4 z-50 mx-1' : 'hidden'"
                v-if="!showSideBarMenu" 
                @click="toggleSideBarMenu" 
            />

            <UButton 
                icon="material-symbols:close-rounded" 
                :class="isActive('/guide') ? 'bg-color-none text-black fixed my-4 top-0 right-0 z-50 mx-1' : 'hidden'"
                v-if="showSideBarMenu" 
                @click="closeSideBarMenu" 
            />

            <!-- Sidebar Menu with slide animation -->
            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="transform -translate-x-full opacity-0"
                enter-to-class="transform translate-x-0 opacity-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="transform translate-x-0 opacity-100"
                leave-to-class="transform -translate-x-full opacity-0"
            >
                <div 
                    v-if="showSideBarMenu" 
                    class="lg:hidden fixed w-full h-full top-0 left-0 right-0 bg-white shadow-lg z-40 border-b"
                >
                    <!-- Scrollable content container -->
                    <div class="h-full overflow-y-auto overflow-x-hidden">
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
                                @click="closeSideBarMenu"
                            >
                            What is Betify?
                            </UButton>
                            <UButton
                                :to="'/guide/get-started/how-to-deposite'"
                                :class="[
                                'text-sm cursor-pointer w-full px-4 py-2 rounded-md transition-colors',
                                isActive('/guide/get-started/how-to-deposite')
                                    ? 'bg-blue-500 hover:bg-blue-500 text-white'
                                    : 'text-gray-400 bg-color-none hover:bg-blue-500 hover:text-white'
                                ]"
                                @click="closeSideBarMenu"
                            >
                            How to Deposit
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
                </div>
            </Transition>
            
            
            <UButton 
                icon="mingcute:left-fill" 
                :class="isActive('/guide') ? 'lg:hidden bg-blue-600 text-white fixed bottom-0 right-0 my-4 z-50 mx-1' : 'hidden'"
                v-if="!showRightBarMenu"
                @click="toggleRightBarMenu" 
            />

            <UButton 
                icon="material-symbols:close-rounded" 
                :class="isActive('/guide') ? 'bg-color-none text-black fixed my-4 top-0 left-0 z-50 mx-1' : 'hidden'"
                v-if="showRightBarMenu" 
                @click="closeRightBarMenu" 
            />

            <!-- Sidebar Menu with slide animation -->
                <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="transform translate-x-full opacity-0"
                enter-to-class="transform translate-x-0 opacity-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="transform translate-x-0 opacity-100"
                leave-to-class="transform translate-x-full opacity-0"
                >
                <div 
                    v-if="showRightBarMenu" 
                    class="lg:hidden fixed w-full h-full top-0 left-0 right-0 bg-white shadow-lg z-40 border-b"
                >
                    <!-- Scrollable content container -->
                    <div class="h-full overflow-y-auto overflow-x-hidden">
                    <div class="flex flex-col items-start justify-start h-full w-full pl-10 pt-10">
                        <div class="space-y-3">
                        <div class="flex items-center space-x-2">
                            <UIcon name="iconoir:page-flip" class="text-black text-lg" />
                            <h1 class="text-base font-semibold text-black">On this page</h1>
                        </div>
                        <h2 class="text-base font-semibold text-blue-800">Quick Overview</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </Transition>
            
            <slot/>
        </main>
        <Footer />
    </UApp>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'    
import Footer from '~/components/Footer.vue'
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const isActive = (path: string) => {
    return route.path.startsWith(path)
}

const showMobileMenu = ref(false)
const showSideBarMenu = ref(false)
const showRightBarMenu = ref(false)

// Function to lock/unlock body scroll
const lockBodyScroll = () => {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.overflow = ''
    // Restore scroll position
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
}


watch(showSideBarMenu, (newValue) => {
    nextTick(() => {
        if (newValue) {
            lockBodyScroll()
        } else {
            unlockBodyScroll()
        }
    })
})

watch(showMobileMenu, (newValue) => {
    nextTick(() => {
        if (newValue) {
            lockBodyScroll()
        } else {
            unlockBodyScroll()
        }
    })
})

watch(showRightBarMenu, (newValue) => {
    nextTick(() => {
        if (newValue) {
            lockBodyScroll()
        } else {
            unlockBodyScroll()
        }
    })
})

</script>