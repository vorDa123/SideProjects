<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

const props = defineProps({
  data: Object,
})

const handleFavoriteStore = useHandleConcertStore()

const addedToAttended = ref<boolean>(false)

const handleAttendedConcerts = () => {
  axios
    .post('http://localhost:3000/api/add-to-attended', {
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
    })
    .then((response) => {
      console.log('Poslani podaci: ', response.data)
      addedToAttended.value = true
      return response.data
    })
    .then(() => {
      handleRemoveFromFavoriteConcerts()
    })
    .catch((error) => console.log(error.message))
}

const handleRemoveFromFavoriteConcerts = async () => {
  const id = props.data?.id
  if (id) {
    await handleFavoriteStore.removeFavorite(id)
    addedToAttended.value = false
  }
}
</script>
<template>
  <div class="concertCard my-3 pointerElement">
    <div class="d-flex align-items-center justify-content-between gap-4">
      <p class="concertSubtitle">{{ props.data?.name }}</p>
      <span @click="handleAttendedConcerts">
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
