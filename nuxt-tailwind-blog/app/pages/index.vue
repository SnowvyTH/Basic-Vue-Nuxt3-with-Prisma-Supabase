<template>
    <main>
        <section class="container mx-auto">
            <div class="container py-10">
                <div class="grid gap-10 sm:grid-cols-3">
                    <BlogGrid v-for="post in posts" :key="post.id" :title="post.title.rendered" :image="post._embedded" :excerpt="post.excerpt.rendered" :slug="post.slug"></BlogGrid>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    const { data: posts, error } = await useWPAPI().getPosts()
</script>

<style scoped>

</style>