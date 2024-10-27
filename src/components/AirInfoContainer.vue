<script setup lang="ts">
import { useWeatherStore } from '@/stores/air-data'
import { onMounted } from 'vue'
import AirInfoComponent from './AirInfoComponent.vue'
const weatherStore = useWeatherStore()

// lifecycle hooks
onMounted(() => {})
</script>

<template>
  <AirInfoComponent
    v-for="(item, key) in weatherStore.data"
    v-bind:key="key"
    v-bind:town="key"
    v-bind:air="item"
  />
</template>
