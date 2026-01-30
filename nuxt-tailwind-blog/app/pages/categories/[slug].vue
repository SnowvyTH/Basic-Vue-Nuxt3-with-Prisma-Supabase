<template>
    <section class="py-10">
        <div class="container mx-auto">
            <div class="grid gap-10 sm:grid-cols-3">
                <BlogGrid v-for="post in posts" :key="post.id" :title="post.title.rendered" :image="post._embedded" :excerpt="post.excerpt.rendered" :slug="post.slug"></BlogGrid>
            </div>
            <div v-if="posts?.length === 0" class="text-center col-span-3">
                <p class="text-xl">No posts found in this category.</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const params = useRoute().params;
    const { data: categories } = await useWPAPI().getCategory(params.slug as string);

    const category = categories.value?.[0]

    const { data: posts, error: postError } = await useWPAPI().getPosts(category?.id)
    useHead({
        title: `Archive: ${category?.name}`,
        meta: [
            {
                name: 'description',
                content: 'A simple blog built with Nuxt 3, Tailwind CSS, and WordPress REST API.'
            }
        ]
    })
</script>

<style scoped>

</style>