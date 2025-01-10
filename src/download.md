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
            '📅Timeline, 📅Timeblock',
            '🏷️Manual recording',
            '👀Automatic monitoring',
            '🌐Synchronize browser history',
            '🖥️Third-party application integration',
            '🧰Extension（dandanplay, obsidian）',
            '🖨️Export summary report'
        ],
        url: `https://github.com/shion-app/shion/releases/download/v${latest.version}/shion_${latest.version}_x64-setup.exe`,
        action: 'Windows 10/11 Download',
        logo: windows
    },
    {
        level: 'Fee required',
        desc: 'If you would like to support the author',
        features: [
            'All features of the free version',
            '🛒Review mode',
            '🧰Extension（apple calendar🍎）'
        ],
        url: 'https://store.steampowered.com/app/3026040/shion/',
        action: 'Jump to the store',
        logo: steam,
        tip: 'Not supporting multi device synchronization, only for offline use'
    }
]
</script>

<Download :list="list" />
