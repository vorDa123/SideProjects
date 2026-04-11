<script setup lang="ts">
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  data: Object,
})

let descriptionModel = defineModel<string>('description', { default: '' })
let nameModel = defineModel<string>('name', { default: '' })

const emit = defineEmits(['close'])

const handleCloseModal = () => {
  emit('close')
}

const handleUpdateData = async () => {
  try {
    const res = await axios.patch('http://localhost:3000/api/update-attended-concert-data', {
      id: props.data?.id,
      name: nameModel.value || props.data?.name,
      description: descriptionModel.value || props.data?.description,
    })
    console.log('Primljeni podaci nakon updatea: ', res.data)
    return res.data
  } catch (error) {
    console.error('Dogodila se greška prilikom updatea')
    const axiosError = error as any
    console.log('Podaci sa servera:', axiosError.response?.data)
  } finally {
    handleCloseModal()
  }
}
</script>
<template>
  <div
    class="modalOverlay"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    @click="handleCloseModal"
  ></div>
  <div class="modalContainer" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <div class="d-flex align-items-center justify-content-between">
      <p class="subtitle">Update concert data</p>
      <i
        class="bi bi-x-circle"
        style="font-size: 1.4rem; padding-right: 1rem"
        @click="handleCloseModal"
      ></i>
    </div>
    <form>
      <div>
        <label for="concertName" class="mt-3">Name: </label>
        <br />
        <input type="text" name="concertName" v-model="nameModel" :placeholder="props.data?.name" />
      </div>
      <div>
        <label for="concertDescription" class="mt-3">Description: </label>
        <br />
        <textarea
          name="concertDescription"
          rows="8"
          cols="41"
          v-model="descriptionModel"
          :placeholder="props.data?.description"
        ></textarea>
      </div>
    </form>
    <div>
      <button type="button" class="btn btn-primary mt-3" @click="handleUpdateData">
        Save changes
      </button>
    </div>
  </div>
</template>
