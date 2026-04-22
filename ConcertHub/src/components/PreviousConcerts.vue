<script setup lang="ts">
import EditConcerts from './EditConcertDataModal.vue'
import { ref } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

const handleFavoriteStore = useHandleConcertStore()

const props = defineProps({
  data: Object,
})

const showModal = ref<boolean>(false)
const attendedRemoved = ref<boolean>(false)
const emit = defineEmits(['get-showModal', 'close', 'get-attendedRemoved'])

const handleRemoveFromAttendedConcerts = async () => {
  const id = props.data?.id
  if (id) {
    await handleFavoriteStore.removeAttended(id)
    handleAttendedRemoved()
  }
}

const handleShowModal = () => {
  showModal.value = !showModal.value
  emit('get-showModal', showModal.value)
}

const handleAttendedRemoved = () => {
  attendedRemoved.value = !attendedRemoved.value
  emit('get-attendedRemoved', attendedRemoved.value)
}
</script>
<template>
  <div class="concertCard containerBorder my-3 pointerElement">
    <Teleport to="body">
      <Transition name="modalAnimation" mode="in-out">
        <EditConcerts v-if="showModal" :data="props.data" @close="showModal = false" />
      </Transition>
    </Teleport>
    <div class="d-flex align-items-center justify-content-between">
      <p class="concertSubtitle">{{ props.data?.name }}</p>
      <div>
        <i
          class="bi bi-pencil-square"
          style="font-size: 1.4rem; padding-right: 1rem"
          @click="handleShowModal"
        ></i>
        <i
          class="bi bi-trash"
          style="font-size: 1.4rem"
          @click="handleRemoveFromAttendedConcerts"
        ></i>
      </div>
    </div>
    <p class="concertDescription">
      {{ props.data?.description }}
    </p>
    <div class="d-flex align-items-center justify-content-start gap-4 gap-md-12">
      <div class="d-flex gap-2">
        <i class="bi bi-calendar"></i>
        <span>{{ props.data?.date }}</span>
      </div>
      <div class="d-flex gap-2">
        <i class="bi bi-clock"></i>
        <span>{{ props.data?.time }}</span>
      </div>
      <div class="d-flex gap-2">
        <i class="bi bi-geo-alt"></i>
        <span>{{ props.data?.city }}</span>
      </div>
    </div>
  </div>
</template>
