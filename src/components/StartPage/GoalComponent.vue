<template>
  <div class="mb-32  h-[680px]  md:h-[700px] lg:h-[830px] xl:h-[1000px] 2xl:h-[1200px]  w-full flex flex-col justify-between relative">

    <div class="absolute z-10 backdrop-blur-lg w-full pt-14 pb-8 rounded-bl-[28px] rounded-br-[28px]">
      <div class="2xl:pl-32 xl-custom:pl-24 xl:pl-20 lg:pl-16 md:pl-16 sm:pl-8 sm-custom:pl-4  ">
        <h1 class="sm-custom:text-3xl  sm:text-4xl  md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[3.55rem] 2xl:leading-[1.1]">
          Геопортал розвитку стратегічних напрямків
        </h1>
        <div class="w-2/3 lg:w-1/2 mt-8 px-2 py-1 border-greyText-50 border-l-4 goal-subhead text-[14px] sm:text-[16px]  ">
          Єдина інформаційна система здійснення моніторингу та оцінювання розвитку стратегічних напрямків
        </div>
      </div>
    </div>

    <div class="relative mt-24">
      <img src="@/assets/img/animation_bg.png" alt="" id="filter"
           class="z-0  absolute top-28 w-[100%] h-[550px] sm:h-[450px] md:h-[450px] 2xl:h-[700px]"
      >
      <img
        class="absolute left-0 -top-20 sm:left-10 md:left-4 xl:left-8 2xl:left-[5%] h-[550px] sm:h-[450px] md:h-[700px] xl:h-[900px] 2xl:h-[1100px]"
        src="@/assets/img/animation.svg" alt=""
      >
    </div>

    <div class="absolute bottom-20 w-full text-center mx-auto flex justify-center backdrop-blur-lg py-16  rounded-tl-[28px] rounded-tr-[28px]">
      <div class="w-9/12 ">
        <h2 class="goal-name pb-4 sm-custom:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-4xl">
          Наша мета
        </h2>
        <p class="text-greyText-50 text-center goal-subhead">
          Забезпечити повний цикл формування, реалізації та моніторингу регіональної політики:
          від рішень на основі даних та стратегічного планування до роботи зі стейкголдерами та
          моніторингу стратегічних напрямків
        </p>
      </div>

      <!--      flowers-->
      <div class="flex justify-between ">
        <div class="flex w-1/2 absolute -bottom-3 left-24">
          <img src="/src/assets/img/flower1.svg" class="w-[82px]" alt="flower">
          <img src="/src/assets/img/flower2.svg" class="w-[82px]" alt="flower">
          <img src="/src/assets/img/flower3.svg" class="w-11" alt="flower">
        </div>
        <div class="flex absolute -bottom-6 right-24">
          <img src="/src/assets/img/flower4.svg" alt="flower">
          <img src="/src/assets/img/flower5.svg" alt="flower">
        </div>
      </div>
    </div>


  </div>

</template>

<script setup>

</script>

<style scoped >


</style>