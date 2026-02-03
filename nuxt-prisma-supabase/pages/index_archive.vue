<script setup lang="ts">
    const { data } = useFetch('/api/sample')

    async function submit() {
        const response = await $fetch('/api/submit', {
            method: 'POST',
            body: { test: 1234}
        })

        console.log(response)
    }

    const cookieValue = ref('')
    function getCookies() {
        const cookies = document.cookie
        console.log('Client-side Cookies:', cookies)

        cookieValue.value = cookies.includes('myCookie') ? 'myCookie Found' : 'myCookie Not Found'
    }


</script>
<template>
    <pre>{{ data }}</pre>
    <button @click="submit">Submit</button>

    <p><button @click="getCookies">Get Cookies</button></p>
    <p>{{ cookieValue }}</p>
</template>

<style scoped>

</style>