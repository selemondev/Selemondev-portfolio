<script setup lang="ts">
const Procedures = [
    {
        id: 1,
        num: "01",
        text: "Project Request",
        description: "At the beginning of our collaboration that's when the project request takes place. Your information about the project will help me understand if I am the right person for your project. If I am the right person for your project then we will arrange a video call as we talk about your next big project so that I can learn more about it."
    },
    {
        id: 2,
        num: "02",
        text: "First Meeting",
        description: "On our first meeting we get to know each other more and check if we are compatible and a perfect fit. Trust is extremely important to me when I am working with my clients. We also talk about the goals, process and requirements that need to be fulfilled for the project to become a huge success."
    },
    {
        id: 3,
        num: "03",
        text: "UI Design Phase",
        description: "  With my in-depth knowledge of design concepts I take the information that I have learnt from you and design an exquisite website that is tailored to meet your required needs and standards, all while accurately representing your company and brand and keeping things aesthetically pleasing and useable for your clients."
    },
    {
        id: 4,
        num: "04",
        text: "Development Phase",
        description: "Once you are convinced and satisfied with the design I create, I then proceed to build your website making sure everything is optimised to meet the the modern day web practices such as speed, responsive design, security, reliability, user experience and reachability."
    },
    {
        id: 5,
        num: "05",
        text: "Testing Phase",
        description: "After creating your website, I ensure that your website is of excellent quality by thoroughly going through multiple checklists and testing it with multiple tools so that it works as expected and is consistent across multiple browsers and devices."
    },
    {
        id: 6,
        num: "06",
        text: "Deployment Phase",
        description: "Before launching your website, I make sure to add SEO to your website so that your website becomes more visible, searchable and reachable thus making your website gain more traffic, retention and more opportunities to convert prospects into clients."
    }
]
</script>
<template>
    <div id="procedures" class="mt-20 md:mt-28 lg:px-16 2xl:px-80">
        <div data-aos="fade-up" data-aos-duration="500" class="grid-layout">
            <h1 class="text-4xl dark:text-white md:text-5xl">My <span
                    class="bg-gradient-to-r bg-clip-text from-purple-500 via-sky-400 to-purple-800 dark:from-purple-400 dark:via-sky-300 dark:to-purple-600 text-transparent background-animate">Procedures</span>
            </h1>
        </div>

        <div
            class="flex-around flex-col flex-wrap mt-4 md:mt-4 md:flex-row 2xl:flex 2xl:justify-center 2xl:items-center">
            <div data-aos="fade-right" data-aos-duration="1000" v-for="procedure in Procedures" :key="procedure.id">
                <div
                    class="max-h-80 w-72 rounded-md my-10 space-y-4 md:mx-4 md:space-y-3 md:px-2 md:h-96 md:w-80">
                    <div>
                        <h2 class="procedure-num">{{ procedure.num }}</h2>
                    </div>

                    <div>
                        <h1 class="procedure-text">{{ procedure.text }}</h1>
                    </div>

                    <div>
                        <p class="dark:text-gray-400 text-gray-600">{{ procedure.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>