<template>
  <div
    class="full-container">

    <div class="page-container w-full ">
      <header >
        <header-component />
      </header>
      <main>
        <goal-component class="" />
        <folder-component class="max-w-[1440px] mx-auto"/>
        <progress-bar class="container mx-auto"/>
        <map-component class="max-w-[1440px] mx-auto"/>
      </main>
      <footer-component class="max-w-[1440px] mx-auto"/>
    </div>

  </div>




</template>

<script setup>
import HeaderComponent from '@/components/StartPage/HeaderComponent.vue'
import GoalComponent from '@/components/StartPage/GoalComponent.vue'
import FolderComponent from '@/components/StartPage/FolderComponent.vue'
import ProgressBar from '@/components/StartPage/ProgressBar.vue'
import MapComponent from '@/components/StartPage/MapComponent.vue'
import FooterComponent from '@/components/StartPage/FooterComponent.vue'


</script>

<style scoped >

</style>