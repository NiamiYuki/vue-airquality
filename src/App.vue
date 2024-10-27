<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/manage">Manage towns</RouterLink>
      <RouterLink to="/data">View info</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
