<script setup lang="ts">

import {PAGE_NAME} from "../../routes";

const liens = [
  {display:"accueil", link: {name: PAGE_NAME.HOME}},
  {display:"À propos", link: {name: PAGE_NAME.ABOUT}},
  {display:"Affichage de l'humeur", link: {name: PAGE_NAME.MOOD}},
]
</script>

<template>
  <h1>Moody app</h1>

  <ul>
    <li v-for="lien in liens">
      <router-link :to="lien.link">{{lien.display}}</router-link>
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
