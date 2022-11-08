<script setup lang="ts">
import { Icon } from "@iconify/vue";
const tools = [
    {
        id: 1,
        name: "HTML",
        icon: "vscode-icons:file-type-html"
    },

    {
        id: 2,
        name: "CSS",
        icon: "vscode-icons:file-type-css"
    },

    {
        id: 3,
        name: "TailwindCss",
        icon: "logos:tailwindcss-icon"
    },

    {
        id: 4,
        name: "JavaScript",
        icon: "logos:javascript"
    },

    {
        id: 5,
        name: "Vue",
        icon: "logos:vue"
    },

    {
        id: 6,
        name: "Vueuse",
        icon: "logos:vueuse"
    },

    {
        id: 7,
        name: "Nuxt",
        icon: "logos:nuxt-icon"
    },

    {
        id: 8,
        name: "React",
        icon: "vscode-icons:file-type-reactjs"
    },

    {
        id: 9,
        name: "Firebase",
        icon: "logos:firebase"
    },

    {
        id: 10,
        name: "Supabase",
        icon: "logos:supabase-icon"
    },

    {
        id: 11,
        name: "Figma",
        icon: "logos:figma"
    },

    {
        id: 12,
        name: "Vitest",
        icon: "logos:vitest"
    },

    {
        id: 13,
        name: "TypeScript",
        icon: "vscode-icons:file-type-typescript-official"
    }
]
</script>
<template>
    <div class="grid-layout w-full max-h-48 space-y-4 py-4 mt-20 md:py-6 md:max-h-64 md:mt-28 md:space-y-6 2xl:px-80">
        <div class="md:mb-6">
            <h1 data-aos="fade-up" data-aos-duration="1000" class="text-4xl dark:text-white md:text-5xl">My <span
                    class="bg-gradient-to-r bg-clip-text from-purple-500 via-sky-400 to-purple-800 text-transparent background-animate">techStack</span>
            </h1>
        </div>
        <div class="content w-72 pt-6 overflow-hidden relative md:pt-2 md:w-[800px]">
            <ul class="animated-content h-full flex" ref="mq">
                <li v-for="tool in tools" :key="tool.id"
                    class="flex justify-center items-center flex-shrink-0 text-white transform lg:scale-100">
                    <div class="flex justify-between w-3/4">
                        <div class="flex-center space-x-2">
                            <Icon :icon="tool.icon" class="text-2xl md:text-4xl" />
                            <span class="hidden text-black dark:text-white md:block">{{ tool.name }}</span>
                        </div>
                    </div>
                </li>
                <li v-for="tool in tools" :key="tool.id"
                    class="flex justify-center items-center flex-shrink-0 text-white transform scale-75 lg:scale-100">
                    <div class="flex justify-between w-3/4">
                        <div class="flex-center space-x-2">
                            <Icon :icon="tool.icon" class="text-2xl md:text-4xl" />
                            <span class="hidden text-black dark:text-white md:block">{{ tool.name }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>