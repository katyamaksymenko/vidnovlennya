<template>
  <div
    class="">

    <div class="page-container  ">
      <header >
        <header-component />
      </header>
      <main>
        <goal-component class="" />
        <folder-component class="container mx-auto"/>
        <progress-bar class="container mx-auto"/>
        <map-component class="container mx-auto"/>
      </main>
      <footer-component class=" mx-auto"/>
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