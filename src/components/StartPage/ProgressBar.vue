<template>
  <div>
    <h1 class="text-[44px] w-3/4 py-12 leading-tight">
      Cтан затвердження статегічних документів у розрізі громад
    </h1>
    <div class="pb-40 flex justify-between flex-wrap">
      <div class=" w-[20%] h-[208px] text-center rounded-full"
           v-for="item in percentageItems"
           :key="item">
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
        <p class="text-[18px] pt-2">
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
  width: 100%;
  height: 100%;
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