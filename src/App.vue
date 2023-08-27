<script setup lang="ts">
</script>

<template>
  <main>
  <header>
    <router-view name="header"></router-view>
  </header>
  <router-view name="left"></router-view>
  <router-view name="main"></router-view>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
