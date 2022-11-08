<script setup lang="ts">
import { Icon } from '@iconify/vue';
const projects = [
    {
        id: 1,
        icon: "logos:javascript",
        name: "JavaScript Projects",
        description: "A collection of 30 Awesome JavaScript projects to help beginners understand JavaScript by building projects",
        tools: ["vscode-icons:file-type-html", "vscode-icons:file-type-css", "logos:javascript"],
        link: "https://github.com/selemondev/30-Javascript-Projects-For-Beginners"
    },

    {
        id: 2,
        icon: "logos:vue",
        name: "Vue Projects",
        description: "A collection of 8 Awesome Vue projects to help beginners understand Vue by building projects",
        tools: ["logos:vue", "logos:firebase", "logos:supabase-icon", "logos:nuxt-icon", "vscode-icons:file-type-typescript-official", "logos:mongodb-icon"],
        link: "https://github.com/selemondev/8-Awesome-Vue-Projects"
    },

    {
        id: 3,
        icon: "mdi:instagram",
        name: "Instagram Clone",
        description: "An Instagram clone with all the functionalities and the best UI you could imagine.",
        tools: ["logos:vue", "logos:firebase", "logos:tailwindcss-icon", "logos:vueuse"],
        link: "https://vue-firebase-project-instagram.vercel.app"
    },

    {
        id: 4,
        icon: "logos:netflix-icon",
        name: "Netflix Clone",
        description: "Netflix re-imagined with a great number of functionalities, new UI design and a great UX.",
        tools: ["logos:vue", "logos:tailwindcss-icon", "logos:supabase-icon", "logos:vitest"],
        link: "https://vue3-supabase-netflix-clone.netlify.app/"
    },

    {
        id: 5,
        icon: "logos:whatsapp-icon",
        name: "Whatsapp Clone",
        description: "Whatsapp re-imagined with a great number of functionalities, new UI design and a great UX.",
        tools: ["logos:vue", "logos:firebase", "logos:tailwindcss-icon"],
        link: "https://vue-firebase-project-whatsapp-clone.vercel.app"
    },

    {
        id: 6,
        icon: "fxemoji:bolt",
        name: "Selemon Portfolio",
        description: "My awesome portfolio site created with Vue 3, Animate On Scroll and Vue3-Smooth-Scroll.",
        tools: ["logos:vue", "logos:vueuse"],
        link: "https://selemon-dev-portfolio.vercel.app"
    }
];
</script>
<template>
    <div id="projectCards" class="flex justify-center items-center flex-wrap md:flex-center">
        <div v-for="project in projects" :key="project.id" class="dark:bg-[#242424] bg-[#F9F9F9] rounded-md m-2 w-72 h-[340px] md:h-[335px] md:w-80">
            <div class="grid-layout mt-6">
                <Icon :icon="project.icon" class="text-6xl" />
            </div>

            <div class="px-4 pt-2 space-y-4">
                <div data-aos="fade-right" data-aos-duration="1000" class="text-center">
                    <h2 class="text-black dark:text-white font-bold">{{ project.name }}</h2>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500">
                    <p class="text-black dark:text-white">{{ project.description }}</p>
                </div>

                <div>
                    <h4 data-aos="fade-up" data-aos-duration="1800" class="text-black flex flex-row dark:text-white">Stack: <span v-for="tool in project.tools" class="px-1">
                            <Icon data-aos="fade-left" data-aos-duration="1800" :icon="tool" class="text-xl md:text-2xl" />
                        </span></h4>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000" class="pt-2">
                    <a :href="project.link" target="_blank" class="text-purple-500 hover:text-purple-700">
                        <button class="py-2 px-4 flex-center space-x-2 bg-gray-200 dark:bg-[#313131] dark:hover:bg-[#262626] transition-delay-timer rounded-md">
                            <span>Preview</span>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-base md:text-2xl" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>