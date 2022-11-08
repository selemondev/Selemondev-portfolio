<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "About",
    data() {
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
            }, 100);
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }
})
</script>
<script setup lang="ts">
import AboutCards from './AboutCards.vue';
import { Icon } from '@iconify/vue';
</script>
<template>
    <div id="about" class="w-full mt-20 md:mt-28 xl:px-48 2xl:px-80">
        <div data-aos="fade-up" data-aos-duration="fade-up" class="grid-layout">
            <h1 class="text-4xl dark:text-white md:text-5xl">My <span
                class="bg-gradient-to-r bg-clip-text from-purple-500 via-sky-400 to-purple-800 dark:from-purple-400 dark:via-sky-300 dark:to-purple-600 text-transparent background-animate">story</span></h1>
        </div>

        <div class="mt-6">
            <AboutCards/>
        </div>

        <div>
            <div @click="scrollToTop()" v-show="scY > 560"
                class="bg-purple-700 hover:bg-purple-800 cursor-pointer fixed flex-center right-8 bottom-8 p-2 mt-72 rounded-md z-10 transition duration-200 ease-in">
                <Icon icon="oi:bolt" class="text-purple-400 w-8 h-8" />
            </div>
        </div>
    </div>
</template>