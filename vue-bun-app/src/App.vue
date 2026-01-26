<template>
  <h1>Counter: {{ count }}</h1>
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
  <h1>{{ user.name }} {{ user.age }}</h1>
  <h1>{{ myuser.name }} {{ myuser.age }}</h1>

  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>

  <h1>Double: {{ double }}</h1>
</template>

<script setup lang="ts">
  import { reactive, ref, computed, watch, watchEffect, onMounted, onUpdated } from 'vue'


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

  // ตัวอย่างการใช้ computed
  const double = computed(() => count.value * 2)

  // ตัวอย่างการใช้ watch
  watch(() => count.value, (newVal, oldVal) => {
    console.log(`Count changed from ${oldVal} to ${newVal}`)
  })

  //ตัวอย่าง watchEffect
  watchEffect(() => {
    console.log(`The current count is: ${count.value}`)
  })

  // ตัวอย่างการใช้ onMounted
  onMounted(() => {
    console.log('Component has been mounted.')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  })

  //ตัวอย่างการใช้ onUpdate
  onUpdated(() => {
    console.log('Component has been updated.')
  })

</script>

<style scoped>

</style>