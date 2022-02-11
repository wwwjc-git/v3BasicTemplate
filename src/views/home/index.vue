<script setup lang="ts">
import { ref, inject, onMounted, nextTick, computed } from 'vue'
const echarts:any = inject('$echarts')
const testt:any = inject('$message')
const alert = () => {
  console.log(testt);
  
  testt.success('inject')
}
onMounted(() => {
  nextTick(() => {
    const charts = echarts.init(document.querySelector('#echarts-container') as HTMLDivElement)
      charts.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      })
  })
})
</script>


<template>
  <div class="home-container-wrap">
    <div class="svg-wrap" @click="alert">
      打开
    </div>
    <div id="echarts-container" />
  </div>
</template>


