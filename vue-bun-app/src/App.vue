<template>
  <h1>Counter: {{ count }}</h1>
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
  <h1>{{ user.name }} {{ user.age }}</h1>
  <h1>{{ myuser.name }} {{ myuser.age }}</h1>

  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  const count = ref(0)
  const myuser = ref({
    name: 'Jane Doe',
    age: 33
  })

  // สร้าง reactive สำหรับเก็บข้อมูล user
  const user = reactive({
    name: 'John Doe',
    age: 30
  })

  // เก็บ array
  const items = ref([1, 2, 3, 4, 5])

</script>

<style scoped>

</style>