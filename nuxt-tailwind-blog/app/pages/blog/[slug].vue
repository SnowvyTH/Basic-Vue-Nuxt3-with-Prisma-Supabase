<template>
    <section class="container py-10 mx-auto sm:py-16">
        <div v-if="post" class="sm:px-20">
            <h1 class="mb-5 text-3xl font-bold leading-snug text-center" v-html="post.title.rendered"></h1>
            <div class="flex justify-center gap-5 mb-10">
                <span>Written by: <span class="text-gray-500">{{ post._embedded["author"][0]?.name }}</span></span>
                <span>Published on: {{ post.date }}</span>
            </div>
            <div class="blog__image h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12">
                <img :src="post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0]?.source_url : ''"
                    :alt="post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0]?.alt_text : ''"
                    class="w-full h-full object-cover object-center absolute top-0 left-0">
            </div>
            <div class="blog__content" v-html="post.content.rendered"></div>
        </div>
    </section>
</template>

<script setup lang="ts">

const params = useRoute().params;
const { data: posts, error } = await useWPAPI().getPost(params.slug as string);
const post = posts.value?.[0]

</script>

<style>
.blog__content {
    @apply sm:px-10;
}

.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6,
.blog__content p {
    @apply mb-5;
}

.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6,
.blog__content p {
    @apply font-bold;
}

.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6,
.blog__content p {
    @apply text-2xl sm:text-4xl;
}

.blog__content h1 {
    @apply text-2xl sm:text-3xl;
}

.blog__content h2 {
    @apply text-xl sm:text-2xl;
}

.blog__content h3 {
    @apply text-lg sm:text-xl;
}

.blog__content h4 {
    @apply text-base sm:text-lg;
}

.blog__content h5 {
    @apply text-sm sm:text-base;
}

.blog__content h6 {
    @apply text-xs sm:text-sm;
}
</style>