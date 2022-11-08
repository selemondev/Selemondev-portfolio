<script setup lang="ts">
import SelemonDevResume from "../pdf/selemon-brahanu-resume.pdf";
</script>
<template>
    <div class="grid-layout">
        <div class="flex flex-col flex-center space-y-4 md:space-y-0 md:flex-row md:flex-center md:space-x-6">
            <a href="#about" v-smooth-scroll="{ duration: 1500 }"><button data-aos="fade-up" data-aos-duration="1000"
                    class="py-1.5 px-4 w-48 text-white bg-purple-600 hover:bg-purple-700 rounded-md md:py-2 md:px-6 md:w-40">Get
                    Started</button></a>
            <a download :href="SelemonDevResume">
                <button data-aos="fade-up" data-aos-duration="1800"
                    class="py-1 px-4 w-52 rounded-md border border-purple-500 hover:border-purple-700 hover:bg-purple-700 hover:text-white dark:text-white md:py-2 md:px-6 md:w-40">Resume</button>
            </a>
        </div>
    </div>
</template>