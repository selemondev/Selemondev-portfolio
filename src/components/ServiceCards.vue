<script setup lang="ts">
import { Icon } from "@iconify/vue";
const services = [
    {
        id: 1,
        service: "Website Review",
        icon: "ion:ios-search",
        description: "I ensure that your website is at its best performance by thoroughly inspecting it before releasing it to the World. I look for potential issues a client might face and make suggestions on how to improve the UI and UX of the website."
    },

    {
        id: 2,
        service: "UI/UX Design",
        icon: "carbon:tools-alt",
        description: "I design your website in such a way that your clients will be able to enjoy navigating around your website without any hussle while directing them towards the end goal which is to get them to buy your products or contact you."
    },

    {
        id: 3,
        service: "SEO",
        icon: "material-symbols:location-searching-rounded",
        description: "For your business to expand and get more sales, I ensure that your SEO metrics and keywords of your website are well defined and up-to-date which enables you to rank at the top of a Google search for any product you sell."
    },

    {
        id: 4,
        service: "Objective Development",
        icon: "fluent-mdl2:bullseye",
        description: "I build your website with your specifications and goals in mind, whether you want a simple flexible website, a multi-page website, an E-commerce website or a custom storefront. I got you covered."
    },

    {
        id: 5,
        service: "Testing",
        icon: "bx:test-tube",
        description: "I ensure that your website is of excellent quality by thoroughly testing it with multiple tools so that it works as expected and is consistent across multiple browsers and responsive to every screen size."
    },

    {
        id: 6,
        service: "Technical Writing",
        icon: "mdi:fountain-pen",
        description: "Apart from being a great developer, I also have a burning passion and innate desire for technical writing. Through technical writing I am able to use my knowledge and technical know-how to benefit people and organisations."
    }
]
</script>

<template>
    <div class="flex justify-center items-center flex-wrap md:flex-center">
        <div v-for="service in services" :key="service.id" class="w-72 h-72 bg-[#F9F9F9] dark:bg-[#242424] rounded-md m-2 md:w-80 md:h-72">
            <div class="p-4 space-y-2 md:space-y-4">
                <div data-aos="fade-up" data-aos-duration="1000" class="h-12 w-12 rounded-md grid-layout bg-[#E5E5E5] dark:bg-[#313131]">
                    <Icon :icon="service.icon" class="text-4xl text-purple-500" />
                </div>

                <div>
                    <h1 data-aos="fade-right" data-aos-duration="1500" class="dark:text-white font-semibold">{{ service.service }}</h1>
                </div>

                <div>
                    <p class="dark:text-white">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>