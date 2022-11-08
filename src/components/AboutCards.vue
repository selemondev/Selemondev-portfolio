<script setup lang="ts">
import { Icon } from "@iconify/vue";
const stories = [
    {
        id: 1,
        title: "About me",
        icon: "twemoji:light-bulb",
        story: "My name is Selemon Brahanu, a Front-End Developer born in the great land of Ethiopia and raised in the great land of Kenya. My interest in Technology started back in 2009 when I was a young boy trying to comprehend how the internet works. Ever since then I have admired the complexity of the Internet."
    },

    {
        id: 2,
        title: "How can I help",
        icon: "icon-park:trend",
        story: "I help to modernize and innovate businesses by tackling complex technological challenges. I have the technical know-how and knowledge to provide your business with the full spectrum of web services such as Hosting, SEO, Web Development, Testing, Technical Writing and UI / UX design."
    },

    {
        id: 3,
        title: "My mission",
        icon: "twemoji:bullseye",
        story: "My mission is to translate user-focused designs into pixel-perfect websites and applications that run blazingly fast and to help your business and company thrive by helping you build the best products in the market that will generate more revenue, income, and turn your ideas into real life products."
    }
];

</script>

<template>
    <div class="flex justify-center items-center flex-wrap md:flex-center md:flex-nowrap">
        <div v-for="story in stories" :key="story.id" class="w-72 h-80 bg-[#F9F9F9] dark:bg-[#242424] m-2 md:h-[430px] lg:h-96">
            <div class="p-3 space-y-2 md:space-y-4 md:p-4">
                <div class="h-12 w-12 rounded-md grid-layout bg-[#E5E5E5] dark:bg-[#313131]">
                    <Icon :icon="story.icon" class="text-4xl" />
                </div>

                <div>
                    <h1 data-aos="fade-right" data-aos-duration="1000" class="dark:text-white font-semibold">{{ story.title }}</h1>
                </div>

                <div>
                    <p data-aos="fade-up" data-aos-duration="1500" class="dark:text-white">{{ story.story }}</p>
                </div>
            </div>
        </div>
    </div>
</template>