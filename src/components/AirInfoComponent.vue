<script setup lang="ts">
import { onMounted } from 'vue'

// const token = '8a73d1ffc2f24cf3919202701242610 '
const request =
  '/v1/current.json?q=tambov&key=8a73d1ffc2f24cf3919202701242610&aqi=yes'
let data = null

// lifecycle hooks
onMounted(() => {
  fetch(request)
    .then(resp => resp.json)
    .then(json => (data = json))
})
</script>

<template>air-info her {{ data }}e</template>
