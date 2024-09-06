<template>
  <div class="flex justify-between py-10">
    <div class="logo flex px-5 py-4">
      <img src="/src/assets/img/logo.svg"  alt="logo" class="w-9 h-9">
      <span class="text-sm pl-4">
        Міністерство <br> Відновлення
      </span>
    </div>
    <nav class="flex text-sm px-2 py-3">
      <div v-for="item in navItems" :key="item.id">
        <ul>
          <li class="px-4 py-4 ">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <span class="burger mt-1" >
        <img src="/src/assets/img/burger.svg" alt="">
      </span>
    </nav>
    <div class="nav-action flex px-2 py-4">
      <span class="px-4">
        <img src="/src/assets/img/search.svg" alt="search">
      </span>
      <span class="pr-2">
        <img src="/src/assets/img/eye.svg" alt="eye">
      </span>
      <span>
        <img src="/src/assets/img/ua.svg" alt="ua" class="h-11 px-4">
      </span>
      <button class="w-24 h-11 bg-white text-black px-6 py-2 rounded-full shadow-lg mx-2">
        Увійти
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ref(
  [
    { id: 1, name: 'Реєстри' },
    { id: 2, name: 'Сервіси' },
    { id: 3, name: 'Стратегії' },
    { id: 4, name: 'Програми та проєкти' },
    { id: 5, name: 'Документація' }
  ]
)

</script>

<style scoped lang="scss">

</style>