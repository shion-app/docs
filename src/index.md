---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: shion
  text: 计时软件⏳️🚧
  tagline: 记录一片落叶🍂
  image:
    src: /logo.png
    alt: shion
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 快速开始
      link: /guide/introduction

features:
  - icon: 🏷️
    title: 标签分类
    details: 打包整理，井然有序
  - icon: 📊
    title: 数据展示
    details: 图表日历，一目了然
  - icon: 🖥️
    title: 后台监听
    details: 监听操作，实时记录
---


<script setup>
import { onMounted } from 'vue'
import { fetchVersion } from '../.vitepress/fetchVersion'

onMounted(() => {
  fetchVersion()
})
</script>