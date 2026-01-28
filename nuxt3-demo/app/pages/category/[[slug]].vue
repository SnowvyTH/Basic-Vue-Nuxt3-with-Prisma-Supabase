<template>
    <div>
        <h1>Category Slug Page</h1>
        <p v-if="$route.params.slug">Category: {{ $route.params.slug }}</p>
        <p v-else>No category selected</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>