---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
   name: shion
   text: Timing software⏳️🚧
   tagline: Recording a fallen leaf🍂
   image:
     src: /logo.png
     alt: shion
   actions:
     - theme: brand
       text: Download
       link: /download
     - theme: alt
       text: Quick start
       link: /guide/introduction

features:
   - icon: 🏷️
     title: Label classification
     details: Packing and organizing, orderly
   - icon: 📊
     title: Data display
     details: Chart calendar, clear at a glance
   - icon: 🖥️
     title: Background monitoring
     details: Monitoring operation, real-time recording
---


<script setup>
import { onMounted } from 'vue'
import { fetchVersion } from '../.vitepress/fetchVersion'

onMounted(() => {
   fetchVersion()
})
</script>