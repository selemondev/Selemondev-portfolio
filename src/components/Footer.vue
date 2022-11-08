<script setup lang="ts">
const date = new Date().getFullYear();
</script>
<template>
    <div class="mt-20 md:mt-28 lg:px-16 2xl:px-80">
        <div class="grid-layout py-2 text-center">
            <h1 class="dark:text-white text-sm md:text-lg">Created by <span class="bg-gradient-to-r bg-clip-text from-purple-500 via-sky-400 to-purple-800 text-transparent background-animate">Selemon Brahanu</span> ✨. All rights reserved @ {{ date }}</h1>
        </div>

        <div>
            <span class="w-full flex h-0.5  bg-gradient-to-r from-purple-500 via-sky-500 to-purple-800 background-animate"></span>
        </div>
    </div>
</template>