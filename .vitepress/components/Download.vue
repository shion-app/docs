<script setup lang="ts">
interface Model {
    level: string
    desc: string
    features: string[]
    url: string
    logo: string
    action: string
    tip?: string
}

const props = defineProps<{
    list: Model[]
}>()

</script>

<template>
    <div class="mt-6 flex flex-col items-center sm:flex-row sm:justify-evenly sm:items-stretch">
        <div class="w-[350px] sm:w-[400px] mb-8" v-for="{ level, url, action, features, desc, logo, tip } in props.list"
            :key="level">
            <div class="bg-white text-black rounded-lg  shadow-xl overflow-hidden min-h-[400px] h-full flex flex-col ">
                <div class="text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 class="text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                        {{ level }}
                    </h1>
                    <div class="mt-2 text-gray-400 text-center">
                        {{ desc }}
                    </div>
                </div>
                <div class="flex flex-wrap mt-3 px-6 flex-1">
                    <ul>
                        <li class="flex items-center" v-for="content in features" :key="content">
                            <div class=" rounded-full p-2 fill-current text-green-700">
                                <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <span class="text-gray-700 text-lg ml-3">{{ content }}</span>
                        </li>
                    </ul>
                </div>

                <div class=" flex justify-center items-center p-6  uppercase">
                    <a :href="url">
                        <button class="mt-3 text-lg font-semibold 
	bg-[var(--vp-c-brand-1)] w-full text-white rounded-lg 
	px-6 py-3 shadow-xl flex items-center">
                            <img class="w-6 h-6 mr-4" :src="logo">
                            {{ action }}
                        </button>
                    </a>
                </div>
            </div>
            <div v-if="tip" class="mt-4 text-gray-400 text-sm text-right">{{ tip }}</div>
        </div>
    </div>

</template>
