<script setup lang="ts">
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'

const { theme, site } = useData()

const url = ref('')
const tagName = ref('')

fetch('https://api.github.com/repos/shion-app/shion/releases/latest')
    .then((res) => res.json())
    .then(({ tag_name, assets }) => {
        tagName.value = tag_name
        const asset = assets.find(({ browser_download_url }) => browser_download_url.includes('setup.exe'))
        if (!asset) return
        const { browser_download_url } = asset
        url.value = browser_download_url
    })
</script>

<template>
    <div class="center">
        <div class="image-bg"></div>
        <img class="logo" :src="withBase(theme.logo)"/>
        <div class="title">
            <div class="name">{{ site.title }}</div>
            <samp class="release-tag">{{ tagName }}</samp>
        </div>
        <a :href="url">
            <button class="download" >
                <img class="icon" src="../assets/windows.svg">
                <div>Windows</div>
            </button>
        </a>
    </div>
</template>


<style scoped>
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
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
.download {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 20px 0 5px;
    padding: 10px 0;
    width: 150px;
    background-color: var(--vp-c-brand);
    border-radius: 6px;
}
.download:hover {
    background-color: var(--vp-button-brand-hover-bg);
}
.icon {
    margin-right: 10px;
    width: 18px;    
    height: 18px;    
}
</style>