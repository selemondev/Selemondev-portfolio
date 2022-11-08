<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from '@vueuse/core'
import { Icon } from "@iconify/vue";
const mobileNav = ref(false);
const handleRotate = () => {
    return mobileNav.value = !mobileNav.value
};
const isDark = useDark()
const toggleDark = useToggle(isDark)
const navLinks = [
    {
        id: 1,
        link: "Home",
        to: "#home"
    },
    {
        id: 2,
        link: "About",
        to: "#about"
    },
    {
        id: 3,
        link: "Projects",
        to: "#projects"
    },
    {
        id: 4,
        link: "Services",
        to: "#services"
    },
    {
        id: 5,
        link: "Contact",
        to: "#contact"
    }
];

const socialLinks = [
    {
        id: 1,
        name: "Twitter",
        icon: "mdi:twitter",
        link: "https://twitter.com/selemondev"
    },

    {
        id: 2,
        name: "Github",
        icon: "mdi:github",
        link: "https://github.com/selemondev"
    },

    {
        id: 3,
        name: "Codesandbox",
        icon: "cib:codesandbox",
        link: "https://codesandbox.io/u/selemondev"
    },

    {
        id: 4,
        name: "Gmail",
        icon: "bxl:gmail",
        link: "mailto:selemondev19@gmail.com"
    }
];
</script>
<template>
    <div>
        <header>
            <nav
                class="w-full h-14 px-4 flex-between bg-white/80 border-b border-gray-100 dark:border-b dark:border-[#1C1E20] dark:bg-[#0E1012]/80 2xl:px-48">
                <div class="flex-center space-x-1">
                    <Icon icon="mdi:fire" class="text-purple-500 text-2xl lg:text-3xl" />
                    <h1 data-aos="fade-left" class="text-base font-bold dark:font-normal dark:text-white lg:text-xl">
                        Selemondev</h1>
                </div>

                <div class="hidden lg:flex-center lg:space-x-1">
                    <div>
                        <ul class="inline-flex p-3" v-for="link in navLinks" :key="link.id">
                            <a :href="link.to" v-smooth-scroll="{ duration: 1500 }">
                                <li data-aos="fade-left" data-aos-duration="1300"
                                    class="transition-delay-timer text-sm cursor-pointer font-semibold text-[#33373D] hover:text-purple-600 dark:font-normal dark:text-gray-400 dark:hover:text-gray-100">
                                    {{ link.link }}</li>
                            </a>
                        </ul>
                    </div>

                    <div class="flex-center space-x-2">
                        <div>
                            <ul class="inline-flex p-1" v-for="social in socialLinks" :key="social.id">
                                <li class="py-1 px-2 hover:bg-gray-100 hover:rounded-md dark:hover:bg-gray-100/10"><a
                                        :href="social.link" :alt="social.name">
                                        <Icon :icon="social.icon" class="w-4 h-4 dark:text-gray-100" />
                                    </a></li>
                            </ul>
                        </div>

                        <div>
                            <button data-aos="fade-down" data-aos-duration="1500" @click="toggleDark()"
                                class="py-2 px-2 bg-gray-200 rounded-md dark:bg-gray-200/10 dark:hover:bg-gray-200/20 transition-delay-timer">
                                <Icon v-if="isDark" icon="ph:sun" class="w-4 h-4 dark:text-white" />
                                <Icon v-else icon="ph:moon" class="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>


                <div class="flex-center space-x-2 lg:hidden">
                    <div :class="{ 'rotate': mobileNav }" @click="handleRotate">
                        <div class="box1 bg-black dark:bg-white"></div>
                        <div class="box2 bg-black dark:bg-white"></div>
                        <div class="box3 bg-black dark:bg-white"></div>
                    </div>
                </div>


                <transition name="mobileNav" class="animation">
                    <div v-show="mobileNav"
                        class="sidebar bg-white shadow-md dark:bg-[#0E1012] space-y-5 px-4 py-1 lg:hidden">

                        <div class="flex-between pt-4">
                            <div class="flex-center space-x-1">
                                <Icon icon="mdi:fire" class="text-purple-500 text-2xl lg:text-3xl" />
                                <h1 class="text-base dark:text-white lg:text-xl">
                                    Selemondev</h1>
                            </div>

                            <div>
                                <Icon @click="handleRotate" icon="fa6-solid:xmark" class="w-6 h-6 dark:text-white" />
                            </div>
                        </div>

                        <div>
                            <ul class="block p-2" v-for="link in navLinks" :key="link.id">
                                <a :href="link.to" v-smooth-scroll="{ duration: 1500 }">
                                    <li data-aos="fade-left" data-aos-duration="1300"
                                        class="transition-delay-timer text-sm cursor-pointer font-semibold text-[#33373D] hover:text-purple-600 dark:font-normal dark:text-gray-400 dark:hover:text-gray-100">
                                        {{ link.link }}</li>
                                </a>
                            </ul>
                        </div>

                        <div class="p-3">
                            <div class="flex-between w-52 h-12 bg-gray-100 dark:bg-[#16191b] rounded-md px-2">
                                <div>
                                    <h4 class="dark:text-gray-400 text-base">Appearance</h4>
                                </div>

                                <div>
                                    <button @click="toggleDark()"
                                        class="py-2 px-2 bg-gray-200 rounded-md dark:bg-gray-200/10 dark:hover:bg-gray-200/20 transition-delay-timer">
                                        <Icon v-if="isDark" icon="ph:sun" class="w-4 h-4 dark:text-white" />
                                        <Icon v-else icon="ph:moon" class="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </transition>
            </nav>
        </header>
    </div>
</template>

<style scoped>
.mobileNav-enter-active,
.mobileNav-leave-active {
    transition: all 0.5s ease-in;
}

.mobileNav-enter-from,
.mobileNav-leave-to {
    transform: translateX(-250px)
}

.mobileNav-enter-to {
    transform: translateX(0);
}
</style>