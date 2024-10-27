<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray-800">
    <nav class="navbar">
      <RouterLink to="/manage" class="navbar-item">Manage towns</RouterLink>
      <RouterLink to="/data" class="navbar-item">View info</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.router-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
