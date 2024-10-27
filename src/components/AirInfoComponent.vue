<script setup lang="ts">
import type { AirQuality } from '@/stores/air-data'

const props = defineProps(['town', 'air']) as {
  town: string
  air: AirQuality
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">{{ props.town }}</div>
    </div>
    <div class="card-content">pm2.5: {{ props.air.pm2_5 }}</div>
  </div>
</template>
