<script setup lang="ts">
import ProjectCards from './ProjectCards.vue';
</script>
<template>
    <div id="projects" class="mt-20 md:mt-28 lg:px-16 2xl:px-96">
        <div class="grid-layout">
            <h1 data-aos="fade-up" data-aos-duration="1000" class="text-4xl dark:text-white md:text-5xl">My <span
                    class="bg-gradient-to-r bg-clip-text from-purple-500 via-sky-400 to-purple-800 dark:from-purple-400 dark:via-sky-300 dark:to-purple-600 text-transparent background-animate">projects</span>
            </h1>
        </div>

        <div class="mt-6">
            <ProjectCards/>
        </div>
    </div>
</template>