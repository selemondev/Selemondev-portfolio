<script setup lang="ts">
import ServiceCards from "./ServiceCards.vue";
</script>
<template>
    <div id="services" class="mt-20 md:mt-28 lg:px-16 2xl:px-80">
        <div data-aos="fade-up" data-aos-duration="1000" class="grid-layout">
            <h1 class="text-4xl dark:text-white md:text-5xl">Services I <span
                    class="bg-gradient-to-r bg-clip-text from-purple-500 via-sky-400 to-purple-800 text-transparent background-animate">offer</span>
            </h1>
        </div>

        <div class="mt-6">
            <ServiceCards />
        </div>
    </div>
</template>