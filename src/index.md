---
# https://vitepress.dev/reference/default-theme-home-page
layout: page
---


<script setup>
import Home from '../.vitepress/components/Home.vue'

const options = {
   name: 'shion',
   text: 'Time tracker',
   tagline: 'Intuitive, meticulous, and diverse. Capturing moments in life🍂',
   actions: [
      {
         theme: "brand",
         text: "Download",
         link: "/download",
      },
      {
         theme: "alt",
         text: "Quick start",
         link: "/guide/what-is-shion",
      },
   ]
}
</script>

<Home v-bind="options" />