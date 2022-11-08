<script lang="ts" setup>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import TechStack from '../components/TechStack.vue';
import Projects from '../components/Projects.vue';
import Services from '../components/Services.vue';
import Procedures from '../components/Procedures.vue';
import Contact from '../components/Contact.vue';
</script>
<template>
    <div>
        <Hero />
        <About />
        <div class="components-container">
            <TechStack />
            <Projects />
            <Services />
            <Procedures />
            <Contact />
        </div>
    </div>
</template>