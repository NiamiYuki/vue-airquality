<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTownsStore } from '@/stores/towns'
const townsStore = useTownsStore()

// lifecycle hooks
onMounted(() => {})

const isEdiiting = ref(false)
const editingValue = ref('')

function editState(value: boolean) {
  isEdiiting.value = value
}
function saveEditing() {
  townsStore.add(editingValue.value)
  editingValue.value = ''
  isEdiiting.value = false
}
function remove(town: string) {
  townsStore.delete(town)
}
</script>

<template>
  <form>
    <div v-for="town in townsStore.towns" v-bind:key="town">
      {{ town }}
      <button @click="remove(town)">delete</button>
    </div>
    <div v-if="isEdiiting">
      <input v-model="editingValue" />
      <button @click="saveEditing">Save</button>
    </div>
    <div v-else><button @click="editState(true)">Add</button></div>
  </form>
</template>
