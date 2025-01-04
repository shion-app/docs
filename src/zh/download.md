---
layout: page
---

<script setup>
import Download from '../../.vitepress/components/Download.vue'
import latest from '../../.vitepress/latest.json'
import windows from '../../.vitepress/assets/windows.svg'
import steam from '../../.vitepress/assets/steam.svg'


const list = [
    {
        level: '免费',
        desc: '开源社区，面向新用户',
        features: [
            '📊自定义数据卡片',
            '📅时间线',
            '🏷️手动记录',
            '👀自动监听',
            '🌐同步浏览器历史',
            '🖥️第三方应用接入',
            '🧰扩展（弹弹play、obsidian）',
            '🖨️导出总结报表'
        ],
        url: `https://github.com/shion-app/shion/releases/download/v${latest.version}/shion_${latest.version}_x64-setup.exe`,
        action: 'Windows 10/11 下载',
        logo: windows
    },
    {
        level: '进阶',
        desc: '面向深度使用用户',
        features: [
            '免费版所有功能',
            '📅时间块',
            '🛒回顾模式',
            '🧰扩展（苹果日历🍎）'
        ],
        url: 'https://store.steampowered.com/app/3026040/shion/',
        action: '跳转至商店',
        logo: steam,
        tip: '不支持多设备同步，仅离线使用'
    }
]
</script>

<Download :list="list" />
