<script setup lang="ts">
import services from '../../service'

const saisie = (formulaire: Event) => {
	// @ts-ignore
	services.mood.ajouteMood(formulaire.target[0].value)
}
</script>

<template>
  <div>Moody app</div>
  <form @submit="saisie">
    <input
      type="number"
      min="-5"
      max="5"
      required
    >
    <input
      type="submit"
      value="Valider"
    >
  </form>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
