<script setup lang="ts">
import type { AirQuality } from '@/stores/air-data'

const props = defineProps(['town', 'air']) as {
  town: string
  air: AirQuality
}
</script>

<template>{{ props.town }}: {{ props.air.pm2_5 }}</template>
