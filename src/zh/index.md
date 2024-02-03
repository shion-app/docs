---
# https://vitepress.dev/reference/default-theme-home-page
layout: page
---


<script setup>
import Home from '../../.vitepress/components/Home.vue'

const options = {
   name: 'shion',
   text: '时间追踪软件',
   tagline: '直观、细致、多样。定格生活中的瞬间🍂',
   actions: [
      {
         theme: "brand",
         text: "下载",
         link: "/zh/download",
      },
      {
         theme: "alt",
         text: "快速开始",
         link: "/zh/guide/what-is-shion",
      },
   ]
}
</script>

<Home v-bind="options" />