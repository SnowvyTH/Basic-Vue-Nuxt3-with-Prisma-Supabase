<template>
    <pre>{{ data }}</pre>
    <button @click="submit">Submit</button>

    <p><button @click="getCookies">Get Cookies</button></p>
    <p>{{ cookieValue }}</p>
</template>

<script setup lang="ts">
    const { data } = useFetch('/api/sample')

    async function submit() {
        const response = await $fetch('/api/submit', {
            method: 'POST',
            body: {
                method: 'POST',
                body: {
                    test: 1234
                }
            }
        })
        console.log(response)
    }

    const cookieValue = ref('')
    function getCookies() {
        const cookies = document.cookie
        console.log('Client-side cookies: ', cookies)

        cookieValue.value = cookies.includes('myCookie') ? 'myCookie exists' : 'myCookie does not exist'
    }

</script>

<style scoped>

</style>