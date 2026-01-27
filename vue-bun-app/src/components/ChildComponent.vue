<template>
    <h2>Child Component</h2>
    <h1>{{ message }}</h1>
    <p>Name : {{ userInfo.name }}</p>
    <p>Age : {{ userInfo.age }}</p>
    <p>Email : {{ userInfo.email }}</p>
    <button @click="sendDataToParent">Send Data to Parent</button>
</template>

<script setup lang="ts">
    import { onUnmounted, inject, defineEmits } from 'vue';
    let timer = setInterval(() => {
        console.log('Interval Running');
    }, 1000);

    onUnmounted(() => {
        clearInterval(timer);
        console.log('Interval cleared on component unmount');
    });

    const message = inject('message');

    const userInfo = inject('userData');

    const emits = defineEmits(['sendData']);
    
    function sendDataToParent() {
        emits('sendData', { info: 'Data from Child Component' });
    }

</script>

<style scoped>

</style>