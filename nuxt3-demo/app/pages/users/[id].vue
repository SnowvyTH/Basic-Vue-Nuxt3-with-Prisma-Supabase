<template>
    <div>
        <h1>User Page</h1>
        <h1>User ID: {{ $route.params.id }}</h1>
        <p>User Type: {{ $route.query.type }}</p>
        <p>Page: {{ $route.query.page }}</p>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute();
    console.log('User ID:', route.params.id);
    console.log('User Type:', route.query.type);
    console.log('Page:', route.query.page);
</script>

<style scoped>

</style>