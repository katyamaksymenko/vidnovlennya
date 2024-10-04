<template>
  <div class="flex justify-between py-16 px-6 sm:pl-6 md:pl-12 lg:pl-12 xl-custom:px-[5%] 2xl:mx-auto ">
    <div class="flex">
      <img src="/src/assets/img/logo.svg"  alt="logo" class="w-9 h-9">
      <span class="text-sm pl-4 mr-10">
        Міністерство <br> Міністерство
      </span>
    </div>
    <nav class="flex text-sm px-2 mt-1 ">
      <div v-for="item in navItems" :key="item.id" class="lg-custom:block hidden ">
        <ul>
          <li class="px-4 hover:bg-neutral-700 py-2 rounded-full">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </nav>
    <button class="burger -mt-1 relative" @click="burger =! burger">
      <svg class="whiteSvg"  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="18" height="2" rx="1" fill="white"/>
        <rect x="4" y="11" width="18" height="2" rx="1" fill="white"/>
        <rect x="4" y="17" width="18" height="2" rx="1" fill="white"/>
      </svg>
    </button>
<!--    <div v-if="burger" class="absolute z-50 right-96 top-32 flex">-->
<!--      <ul  v-for="item in navItems" :key="item.id" class="block lg-custom::hidden ">-->
<!--        <li class="px-4 hover:bg-neutral-700 py-2 rounded-full">-->
<!--          {{ item.name }}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->


    <div class="nav-action flex px-2  ">
      <button>
        <svg class="whiteSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.80558 15.1944 2 10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22L17 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button
        class="mx-8 -mt-1"
        @click="dark=!dark">
        <svg class="whiteSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6138 11.2393C21.8803 11.7174 21.8803 12.2826 21.6138 12.7607C20.6032 14.5739 17.5662 19 12 19C6.43378 19 3.39677 14.5739 2.38617 12.7607C2.1197 12.2826 2.11969 11.7174 2.38617 11.2393C3.39677 9.42612 6.43378 5 12 5C17.5662 5 20.6032 9.42612 21.6138 11.2393Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="3" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="pr-4 ">
        <svg class="whiteSvg" width="97" height="44" viewBox="0 0 97 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="95" height="42" rx="21" stroke="white" stroke-width="2"/>
          <path d="M30.32 28.128C28.848 28.128 27.6907 27.7067 26.848 26.864C26.0053 26.0213 25.584 24.7893 25.584 23.168V16.8H27.184V23.104C27.184 24.352 27.456 25.264 28 25.84C28.5547 26.416 29.3333 26.704 30.336 26.704C31.3493 26.704 32.128 26.416 32.672 25.84C33.2267 25.264 33.504 24.352 33.504 23.104V16.8H35.056V23.168C35.056 24.7893 34.6347 26.0213 33.792 26.864C32.96 27.7067 31.8027 28.128 30.32 28.128ZM36.4059 28L41.4779 16.8H43.0619L48.1499 28H46.4699L41.9419 17.696H42.5819L38.0539 28H36.4059ZM38.5659 25.2L38.9979 23.92H45.3019L45.7659 25.2H38.5659Z" fill="white"/>
          <path d="M57 19L64.3161 25.8588C64.7007 26.2194 65.2993 26.2194 65.6839 25.8588L73 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="">
        <svg   width="99" height="44" viewBox="0 0 99 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="99" height="44" rx="22" fill="white"/>
          <path d="M23.712 26.592C24.2667 26.7947 24.7787 26.848 25.248 26.752C25.7173 26.6453 26.1387 26.288 26.512 25.68L27.056 24.816L27.216 24.64L31.328 16.8H32.912L27.936 26.016C27.5627 26.72 27.1253 27.2533 26.624 27.616C26.1333 27.968 25.6 28.16 25.024 28.192C24.4587 28.2347 23.8827 28.128 23.296 27.872L23.712 26.592ZM27.168 26.064L22.256 16.8H23.968L28.048 24.784L27.168 26.064ZM33.988 28V19.52H37.924C38.916 19.52 39.6947 19.712 40.26 20.096C40.836 20.4693 41.124 21.0027 41.124 21.696C41.124 22.3893 40.852 22.928 40.308 23.312C39.7747 23.6853 39.0653 23.872 38.18 23.872L38.42 23.456C39.4333 23.456 40.1853 23.6427 40.676 24.016C41.1667 24.3893 41.412 24.9387 41.412 25.664C41.412 26.4 41.1347 26.976 40.58 27.392C40.036 27.7973 39.1987 28 38.068 28H33.988ZM35.492 26.816H37.956C38.596 26.816 39.076 26.72 39.396 26.528C39.716 26.3253 39.876 26.0053 39.876 25.568C39.876 25.12 39.7267 24.7947 39.428 24.592C39.14 24.3787 38.6813 24.272 38.052 24.272H35.492V26.816ZM35.492 23.168H37.796C38.3827 23.168 38.8253 23.0613 39.124 22.848C39.4333 22.624 39.588 22.3147 39.588 21.92C39.588 21.5147 39.4333 21.2107 39.124 21.008C38.8253 20.8053 38.3827 20.704 37.796 20.704H35.492V23.168ZM43.8161 28V19.52H45.3521V28H43.8161ZM44.5841 17.888C44.2855 17.888 44.0348 17.792 43.8321 17.6C43.6401 17.408 43.5441 17.1733 43.5441 16.896C43.5441 16.608 43.6401 16.368 43.8321 16.176C44.0348 15.984 44.2855 15.888 44.5841 15.888C44.8828 15.888 45.1281 15.984 45.3201 16.176C45.5228 16.3573 45.6241 16.5867 45.6241 16.864C45.6241 17.152 45.5281 17.3973 45.3361 17.6C45.1441 17.792 44.8935 17.888 44.5841 17.888ZM48.3474 28V19.52H49.8834V25.696L55.0834 19.52H56.4754V28H54.9394V21.824L49.7554 28H48.3474ZM52.3154 18.416C51.5367 18.416 50.9234 18.2293 50.4754 17.856C50.038 17.472 49.814 16.9227 49.8034 16.208H50.8434C50.854 16.6133 50.9874 16.9333 51.2434 17.168C51.51 17.4027 51.862 17.52 52.2994 17.52C52.7367 17.52 53.0887 17.4027 53.3554 17.168C53.622 16.9333 53.7607 16.6133 53.7714 16.208H54.8434C54.8327 16.9227 54.6034 17.472 54.1554 17.856C53.7074 18.2293 53.094 18.416 52.3154 18.416ZM61.1368 28V20.464L61.5208 20.864H58.0328V19.52H65.7768V20.864H62.3048L62.6727 20.464V28H61.1368ZM67.3474 28V19.52H68.8834V25.696L74.0834 19.52H75.4754V28H73.9394V21.824L68.7554 28H67.3474Z" fill="#101010"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted, nextTick } from 'vue';

const dark = ref (false);
const root = ref(null);

onMounted(() => {
  root.value = document.documentElement;

  const svgElements = document.querySelectorAll('.whiteSvg'); // Select all elements with the class 'whiteSvg'



  watch(dark, async (newValue) => {
    await nextTick();

    if (newValue) {
      root.value?.style.setProperty("--bg", "#E3EDF6");
      root.value?.style.setProperty("--bg-text", "#101010");
      root.value?.style.setProperty("--bg-text-secondary", "#666666");

      svgElements.forEach(svg => {
        svg.querySelectorAll('path, circle, rect').forEach(element => {
          element.setAttribute('stroke', 'black');
          element.setAttribute('fill', '#FFA800');
        });
      });
    } else {
      root.value?.style.setProperty("--bg", "#101010");
      root.value?.style.setProperty("--bg-text", "#ffffff");
      root.value?.style.setProperty("--bg-text-secondary", "#D3D3D3");

      svgElements.forEach(svg => {
        svg.querySelectorAll('path, circle, rect').forEach(element => {
          element.setAttribute('stroke', 'white');
          element.setAttribute('fill', '#E0FC52');
        });
      });
    }
  }, { immediate: true });
});


const burger = ref(false);
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

<style scoped  >


</style>