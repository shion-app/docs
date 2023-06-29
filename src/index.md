---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: shion
  text: 计时软件⏳️🚧
  tagline: 记录生活的每一个瞬间
  image:
    src: /logo.png
    alt: shion
  actions:
    - theme: brand
      text: 下载
    - theme: alt
      text: 快速开始
      link: /guide/introduction

features:
  - icon: 🏷️
    title: 标签分类
    details: 将记录打包整理，井然有序
  - icon: 📊
    title: 图表展示
    details: 可视化展示活动记录，配合日历显示度过的每一天
  - icon: 🖥️
    title: 后台监听
    details: 监听操作，实时记录使用的状态
---


<script setup>
import { onMounted } from 'vue'
import { fetchRelease } from '../.vitepress/fetchRelease'

onMounted(() => {
  fetchRelease()
})
</script>