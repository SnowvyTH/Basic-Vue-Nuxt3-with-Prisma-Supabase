<script setup lang="ts">
    import '@/assets/css/app.css'
</script>

<template>
    <main>
        <div class="menu">
            <ul>
                <li>
                    <NuxtLink to="/">/</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">/about</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">/contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/users/1">/users/1</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/users/snowvy?type=admin&page=1">/users/snowvy?type=admin</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/members/admin/snowvy">/members/admin/snowvy</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/category/technology">/category/technology</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/parent/child">/parent/child</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/parent/sister">/parent/sister</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="content">
           <NuxtPage />
        </div>
    </main>
</template>
