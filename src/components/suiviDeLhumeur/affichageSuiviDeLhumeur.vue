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
import services from '../../service'
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
	labels: mood.map(mood => mood.date.toLocaleDateString('fr')),
	datasets: [
		{
			label: 'humeur',
			data: mood.map(mood => mood.mood),
			backgroundColor: '#ff7979',
			borderColor: '#aa7979',
			pointStyle: 'circle',
			pointRadius: 10,
			pointHoverRadius: 15
		},
		{
			label: 'neutre',
			data: mood.map(() => 0),
			borderColor: '#777',
			pointStyle: false,
		},

	]
}
const options = {
	responsive: true,
	scales: {
		y: {
			min: -5,
			max: 5,
		}
	},
	tension: 0.5,
}
</script>

<template>
  <div v-if="services.mood.isByDefault">
    Données d'exemple
  </div>
  <Line
    :options="options"
    :data="chartData"
  />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
