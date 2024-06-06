<script setup lang="ts">
import { withBase, useData } from 'vitepress'

import latest from '../latest.json'

const { theme, site } = useData()

const url = `https://github.com/shion-app/shion/releases/download/v${latest.version}/shion_${latest.version}_x64-setup.exe`

const tagName = `v${latest.version}`

</script>

<template>
    <div class="center">
        <div class="image-bg"></div>
        <img class="logo" :src="withBase(theme.logo)" />
        <div class="title">
            <div class="name">{{ site.title }}</div>
            <samp class="release-tag">{{ tagName }}</samp>
        </div>
        <a :href="url" class="download-wrapper">
            <button class="download" :disabled="!url">
                <img class="icon" src="../assets/windows.svg">
                <div>Windows 10/11</div>
            </button>
        </a>
    </div>
</template>


<style scoped>
.release-tag {
    font-size: 14px;
    font-weight: 700;
    padding: 2px 8px;
    margin-left: 10px;
    background: var(--vp-c-brand);
    color: #fff;
    border-radius: 10px;
    vertical-align: bottom;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}
.image-bg {
    background-image: var(--vp-home-hero-image-background-image);
    filter: var(--vp-home-hero-image-filter);
    width: 192px;
    height: 192px;
    position: absolute;
}
.logo {
    max-width: 192px;
    max-height: 192px;
    z-index: 1;
}
@media (min-width: 640px) {
    .logo {
        max-width: 256px;
        max-height: 256px;
    }
    .image-bg {
        width: 256px;
        height: 256px;
    }
}
.title {
    display: flex;
    align-items: center;
    margin: 40px 0;
}
.name {
    color: var(--vp-c-brand);
    margin-right: 4px;
    font-size: 32px;
    font-weight: bold;
}
.download-wrapper {
    margin: 20px 0 5px;
}
.download {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 10px 0;
    width: 150px;
    background-color: var(--vp-c-brand);
    border-radius: 6px;
}
.download:hover {
    background-color: var(--vp-button-brand-hover-bg);
}
.download[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
}

.icon {
    margin-right: 10px;
    width: 18px;    
    height: 18px;    
}
</style>