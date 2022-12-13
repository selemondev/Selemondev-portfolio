<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { onMounted } from 'vue';
import AOS from "aos";
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>