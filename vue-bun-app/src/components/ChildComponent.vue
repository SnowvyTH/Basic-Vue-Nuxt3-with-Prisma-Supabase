<template>
    <h2>Child Component</h2>
</template>

<script setup lang="ts">
    import { onUnmounted } from 'vue';
    let timer = setInterval(() => {
        console.log('Interval Running');
    }, 1000);

    onUnmounted(() => {
        clearInterval(timer);
        console.log('Interval cleared on component unmount');
    });
</script>

<style scoped>

</style>