import { defineStore } from 'pinia'
export interface AirQuality {
  pm2_5: number
  index: number
}

export type WeatherStore = Record<string, AirQuality>

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return {
      data: {} as WeatherStore,
    }
  },
  actions: {
    setWeather(data: WeatherStore) {
      this.data = { ...data }
    },
  },
})
