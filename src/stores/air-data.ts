import { defineStore } from 'pinia'
interface AirQuality {
  pm2_5: number
  index: number
}

export type WeatherStore = Record<string, AirQuality>

export const useWeatherStore = defineStore('towns', {
  state: () => {
    return {
      data: {} as WeatherStore,
    }
  },
  actions: {
    set(data: WeatherStore) {
      this.data = { ...data }
    },
  },
})
