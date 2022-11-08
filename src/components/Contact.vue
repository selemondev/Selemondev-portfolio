<script setup lang="ts">
import ContactCards from "./ContactCards.vue"
</script>
<template>
    <div id="contact" class="mt-20 md:mt-28 lg:px-16 2xl:px-80">
        <div data-aos="fade-up" data-aos-duration="1000" class="grid-layout">
            <h1 class="text-4xl dark:text-white md:text-5xl">Let's get <span
                    class="bg-gradient-to-r bg-clip-text from-purple-500 via-sky-400 to-purple-800 dark:from-purple-400 dark:via-sky-300 dark:to-purple-600 text-transparent background-animate">intouch</span>
            </h1>
        </div>

        <div class="mt-6">
            <ContactCards />
        </div>
    </div>
</template>