<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  data: Object,
})

let favoriteConcerts = ref<any[]>([])

const addedToFavorite = ref<boolean>(false)

const handleFavoriteConcerts = async () => {
  try {
    const res = await axios.post('http://localhost:3000/api/add-to-favourite', {
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
    console.log('Poslani podaci: ', res.data)
    addedToFavorite.value = true
    return res.data
  } catch (error) {
    console.error('ID se nije poslao')
  }
}

const handleRemoveFromFavoriteConcerts = async () => {
  try {
    const res = await axios.delete('http://localhost:3000/api/remove-from-favourite', {
      data: {
        id: props.data?.id,
      },
    })
    console.log('Poslani podaci: ', res.data)
    addedToFavorite.value = false
    return res.data
  } catch (error) {
    console.error('Dogodila se greška prilikom brisanja')
  }
}

watch(
  addedToFavorite,
  async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/get-favourites')
      favoriteConcerts.value = res.data || []
      // console.log('Fetched data:', res.data)
    } catch (error) {
      console.error('Server down ili error')
      favoriteConcerts.value = []
    } finally {
      const isConcertFavorite = favoriteConcerts.value.some(
        (concert: any) => concert.id === props.data?.id,
      )

      if (isConcertFavorite) {
        addedToFavorite.value = true
      } else {
        addedToFavorite.value = false
      }
    }
  },
  { immediate: true },
)
</script>
<template>
  <div class="concertCard my-3 pointerElement">
    <div class="d-flex align-items-start justify-content-between gap-2">
      <p class="concertSubtitle">{{ props.data?.name }}</p>
      <i
        v-if="!addedToFavorite"
        class="bi bi-heart"
        style="font-size: 1.47rem"
        @click="handleFavoriteConcerts"
      ></i>
      <i
        v-else
        class="bi bi-heart-fill"
        style="font-size: 1.47rem"
        @click="handleRemoveFromFavoriteConcerts"
      ></i>
    </div>
    <p class="concertDescription">
      {{ props.data?.description }}
    </p>
    <div class="d-flex flex-wrap align-items-center justify-content-start gap-4 gap-md-12">
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
      <div class="d-flex gap-2">
        <i class="bi bi-cash"></i>
        <span>150 EUR</span>
      </div>
    </div>
  </div>
</template>
