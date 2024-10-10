<template>
  <div class="">
    <h1 class="text-[44px] w-3/4 pt-20 leading-tight">
      Cтан затвердження статегічних документів у розрізі громад
    </h1>
    <div class="pb-40 flex justify-between flex-wrap">
      <div class="w-[278px] text-center rounded-full mt-12"
           v-for="item in percentageItems"
           :key="item">
        <div class="w-[178px] h-[208px] ml-[18%]">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path
              class="circle-bg"
              d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              :stroke-dasharray="getDashArray(item.number)"
              d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage ">{{ item.number }}%</text>
          </svg>
        </div>
        <p class="text-[18px] pt-2  ">
          {{ item.text }}
        </p>
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';

const percentageItems = ref([
  {number: 91, text: 'ТГ, які охоплені процесом стратегічного планування'},
  {number: 56, text: 'ТГ, які мають затверджені стратегії'},
  {number: 35, text: 'ТГ, які розробляють стратегії'},
  {number: 9, text: 'ТГ, які не починали роботу над стратегіями'},
])

const getDashArray = (percentage) => {
  return `${(percentage / 100) * 100} 100`;
};
</script>


<style scoped>


.circular-chart {

}

.circle-bg {
  fill: none;
  stroke: #1D1D1D;
  stroke-width: 4.5;
}

.circle {
  fill: none;
  stroke-width: 3.8;
  stroke: #E0FC52;
  stroke-linecap: round;
  transition: stroke-dasharray 0.6s ease 0s;
}

.percentage {
  fill: #ffffff;
  font-size: 10px;
  text-anchor: middle;
}
</style>