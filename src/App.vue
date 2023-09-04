<script setup lang="ts">
</script>

<template>
  <main>
    <header>
      <router-view name="header" />
    </header>
    <router-view name="left" />
    <router-view name="main" />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
