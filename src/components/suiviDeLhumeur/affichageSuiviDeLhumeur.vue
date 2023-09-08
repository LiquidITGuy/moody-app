<script setup lang="ts">
import { ref } from 'vue'

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
import service from "../../service";
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
			pointStyle: 'cross',
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

const uploadedFile = ref<HTMLInputElement>()
const importValue = async () => {
	if (uploadedFile && uploadedFile.value && uploadedFile.value.files) {
		const resultat = await services.writer.read(uploadedFile.value.files[0])
		services.mood.fusionneMood(resultat)
	}
}
const exportValue = () => {
	services.writer.save(mood, "mood.json")
}
</script>

<template>
  <div v-if="services.mood.isByDefault">
    Données d'exemple
	  <form  @submit="importValue">
	    <input type="file" ref="uploadedFile" accept="application/json" required/>
	    <button>importer les données d'un autre appareil</button>
	  </form>
  </div>
  <Line
    :options="options"
    :data="chartData"
  />
	<button @click="exportValue" v-if="!services.mood.isByDefault">Exporter les données</button> <br>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
