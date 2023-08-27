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
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

 const mood = [
     {date: new Date("01/01/2023"), mood: 3},
     {date: new Date("01/02/2023"), mood: 2},
     {date: new Date("01/03/2023"), mood: 4},
     {date: new Date("01/04/2023"), mood: 5},
     {date: new Date("01/05/2023"), mood: -1},
     {date: new Date("01/06/2023"), mood: 2},
     {date: new Date("01/07/2023"), mood: 0},
     {date: new Date("01/08/2023"), mood: 3},
     {date: new Date("01/09/2023"), mood: 3},
     {date: new Date("01/10/2023"), mood: 3},
     {date: new Date("01/11/2023"), mood: 3},
     {date: new Date("01/12/2023"), mood: 2},
     {date: new Date("01/13/2023"), mood: 3},
     {date: new Date("01/14/2023"), mood: 3},
 ]

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
