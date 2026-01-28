<template>
    <div>
        <h1>Member Page</h1>
        <p>Group: {{ $route.params.group }}</p>
        <p>Member: {{ $route.params.id }}</p>
    </div>
</template>
<!-- http://localhost:3000/members/admin/samit -->
<script setup lang="ts">

</script>

<style scoped>

</style>