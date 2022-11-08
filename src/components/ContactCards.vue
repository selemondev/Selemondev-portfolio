<script setup lang="ts">
import { Icon } from "@iconify/vue";
const contacts = [
    {
        id: 1,
        name: "Gmail",
        socialIcon: "logos:google-gmail",
        description: "You can connect with me by sending me an email at selemondev19@gmail.com. Don't be shy, come say hi.",
        link: "mailto:selemondev19@gmail.com"
    },

    {
        id: 2,
        name: "Twitter",
        socialIcon: "logos:twitter",
        description: "You can write to me and follow me on Twitter to read my latest educative threads.",
        link: "https://twitter.com/selemondev"
    },

    {
        id: 3,
        name: "Github",
        socialIcon: "logos:github-octocat",
        description: "You can check out and test my latest amazing open source projects on Github.",
        link: "https://github.com/selemondev"
    },

    {
        id: 4,
        name: "Hashnode",
        socialIcon: "logos:hashnode-icon",
        description: "You can follow me on hashnode to read my most recent articles and blogs on JavaScript and Vue.",
        link: "https://selemondev.hashnode.dev/"
    },

    {
        id: 5,
        name: "CodeSandbox",
        socialIcon: "lucide:codesandbox",
        description: "You can view my latest creative project collections on CodeSandbox and don't forget to leave a like ❤️.",
        link: "https://codesandbox.io/u/selemondev"
    }
]
</script>
<template>
    <div class="flex justify-center items-center flex-wrap md:flex-center">
        <div v-for="contact in contacts" :key="contact.id"
            class="w-72 h-52 bg-[#F9F9F9] dark:bg-[#242424] m-2 md:w-80 md:h-52">
            <a :href="contact.link" target="_blank">
                <div class="p-3 space-y-2 md:space-y-4 md:p-4">
                    <div data-aos="fade-up" data-aos-duration="1500" class="h-12 w-12 rounded-md grid-layout bg-[#E5E5E5] dark:bg-[#313131]">
                        <Icon :icon="contact.socialIcon" class="text-4xl hover:animate-pulse" />
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1800">
                        <h1 class="dark:text-white font-semibold">{{ contact.name }}</h1>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <p class="dark:text-white">{{ contact.description }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>