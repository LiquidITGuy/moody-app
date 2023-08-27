<script setup lang="ts">

import {PAGE_NAME} from "../../routes.ts";

const liens = [
  {display:"accueil", link: {name: PAGE_NAME.HOME}},
  {display:"À propos", link: {name: PAGE_NAME.ABOUT}},
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
