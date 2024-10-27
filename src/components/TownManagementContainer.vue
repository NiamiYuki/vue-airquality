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
  <form class="">
    <div
      v-for="town in townsStore.towns"
      v-bind:key="town"
      class="field has-addons"
    >
      <button
        class="button is-danger is-rounded is-small"
        @click="remove(town)"
      >
        X
      </button>
      <div class="control">
        {{ town }}
      </div>
    </div>
    <div v-if="isEdiiting" class="field has-addons">
      <div class="control">
        <input
          class="input"
          v-model="editingValue"
          placeholder="Введите название города"
        />
      </div>
      <div class="control">
        <button @click="saveEditing" class="button">Save</button>
      </div>
    </div>
    <div v-else>
      <button class="button" @click="editState(true)">Add</button>
    </div>
  </form>
</template>

<style scoped>
.towns-form {
  display: flex;
  flex-direction: column;
}
.added-town-name {
}
</style>
