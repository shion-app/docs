---
layout: page
---

<script setup>
import Download from '../.vitepress/components/Download.vue'
import latest from '../.vitepress/latest.json'
import windows from '../.vitepress/assets/windows.svg'
import steam from '../.vitepress/assets/steam.svg'

const list = [
    {
        level: 'Free',
        desc: 'Open source community, for new users',
        features: [
            '📊Custom data card',
            '📅Timeline + Calendar',
            '🏷️Manual recording',
            '👀Automatic monitoring',
            '🌐Synchronize browser history',
            '📖Diary',
        ],
        url: `https://github.com/shion-app/shion/releases/download/v${latest.version}/shion_${latest.version}_x64-setup.exe`,
        action: 'Windows 10/11 Download',
        logo: windows
    },
    {
        level: 'Advanced',
        desc: 'For advanced users',
        features: [
            'All features of the free version',
            'Early Access',
        ],
        url: 'https://store.steampowered.com/app/3026040/shion/',
        action: 'Jump to the store',
        logo: steam,
        tip: `*Because I haven't started yet, there are no new features in the early access`
    }
]
</script>

<Download :list="list" />
