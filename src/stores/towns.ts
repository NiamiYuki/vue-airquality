import { defineStore } from 'pinia'

export const useTownsStore = defineStore('towns', {
  state: () => {
    return {
      towns: [] as string[],
    }
  },
  actions: {
    add(aTown: string) {
      this.towns = [...this.towns, aTown]
    },
    set(towns: string[]) {
      this.towns = [...towns]
    },
    delete(town: string) {
      this.towns = [...this.towns.filter(aTown => aTown !== town)]
    },
  },
})
