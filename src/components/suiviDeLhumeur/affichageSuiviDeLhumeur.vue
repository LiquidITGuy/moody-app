<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import services from "../../service";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

 const mood = services.mood.getMood()

const chartData = {
  labels: mood.map(mood => mood.date.toLocaleDateString("fr")),
  datasets: [
    {
      label: "humeur",
      data: mood.map(mood => mood.mood),
      backgroundColor: '#ff7979',
      borderColor: '#aa7979',
    },
  ]
}
const options = {
  responsive: true,
  scales: {
    y: {
      min: -5.1,
      max: 5.1,
    }
  },
  tension: 0.5
}
</script>

<template>
  <div>Moody app</div>
  <Line
  :options="options"
  :data="chartData"/>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
