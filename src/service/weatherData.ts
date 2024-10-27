import { useTownsStore } from '@/stores/towns'
import { useWeatherStore, type WeatherStore } from '@/stores/air-data'

class WeatherDataService {
  townStore = useTownsStore()
  weatherStore = useWeatherStore()

  // lets imagine that this token is stored secretly
  request = '/v1/current.json?key=8a73d1ffc2f24cf3919202701242610&aqi=yes&q='

  loadData(): Promise<void> {
    const fetches = [] as Promise<AirInfo>[]
    for (const town of this.townStore.towns) {
      fetches.push(
        fetch(this.request + town).then(
          resp => resp.json as unknown as AirInfo,
        ),
      )
    }
    return Promise.all(fetches).then(dataArr => {
      const res = {} as WeatherStore
      for (const [index, data] of dataArr.entries()) {
        res[this.townStore.towns[index]] = {
          pm2_5: data.current.air_quality.pm2_5,
          index: data.current.air_quality['us-epa-index'],
        }
      }
      this.weatherStore.set(res)
    })
  }
}

let service = null as WeatherDataService | null
export const weatherDataServiceLocator = () => {
  if (!service) {
    service = new WeatherDataService()
  }
  return service
}

// interface object from weatherApi current
interface AirInfo {
  location: {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  current: {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
      text: string
      icon: string
      code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
    air_quality: {
      co: number
      no2: number
      o3: number
      so2: number
      pm2_5: number
      pm10: number
      'us-epa-index': number
      'gb-defra-index': number
    }
  }
}
