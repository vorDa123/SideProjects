<script setup lang="ts">
import { ref } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

const props = defineProps({
  data: Object,
})

const handleFavoriteStore = useHandleConcertStore()

const addedToAttended = ref<boolean>(false)

const emit = defineEmits(['get-addedToAttended'])

const handleAttendedConcerts = async () => {
  const concertDataPayload = {
    id: props.data?.id,
    name: props.data?.name,
    image: props.data?.image,
    date: props.data?.date,
    time: props.data?.time,
    dateTime: props.data?.dateTime,
    genre: props.data?.genre,
    venue: props.data?.venue,
    city: props.data?.city,
    country: props.data?.country,
    countryCode: props.data?.countryCode,
    description: props.data?.description,
  }

  if (concertDataPayload) {
    await handleFavoriteStore.addToAttended(concertDataPayload)
    await handleFavoriteStore.getAttended()
    await handleRemoveFromFavoriteConcerts()
    addedToAttended.value = true
    emit('get-addedToAttended', addedToAttended.value)
  }
}

const handleRemoveFromFavoriteConcerts = async () => {
  const id = props.data?.id
  if (id) {
    await handleFavoriteStore.removeFavorite(id)
  }
}
</script>
<template>
  <div class="concertCard containerBorder my-3">
    <div class="d-flex align-items-center justify-content-between gap-4">
      <p class="concertSubtitle">{{ props.data?.name }}</p>
      <span @click="handleAttendedConcerts" class="pointerElement">
        <i class="bi bi-plus-square" style="font-size: 1rem"></i>
        Attended
      </span>
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
