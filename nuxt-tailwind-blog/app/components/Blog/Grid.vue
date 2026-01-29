<template>
    <div class="grid overflow-hidden rounded shadow-xl group">
        <div v-if="image" class="grid__image h-[180px] w-full relative overflow-hidden">
            <img :src="image" :alt="title" class="absolute object-cover w-full h-full duration-300 group-hover:scale-110">
        </div>
        <div class="p-5 grid__content">
            <h3 class="mb-2 text-xl font-semibold grid__content-title">
                {{ title }}
            </h3>
            <p v-if="excerpt" class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden">
                {{ excerpt }}
            </p>
            <NuxtLink :to="`/blog/${slug}`" class="text-sm font-medium text-blue-600 hover:underline">
                Read More
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: string,
        excerpt?: string,
        image?: string,
        slug: string
    }>();
</script>

<style scoped>

</style>