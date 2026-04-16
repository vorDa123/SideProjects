<script setup lang="ts">
import { ref, watch } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

const props = defineProps({
  data: Object,
})

const addedToFavorite = ref<boolean>(false)

const handleFavoriteStore = useHandleConcertStore()

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

const handleFavoriteConcerts = async () => {
  if (concertDataPayload) {
    await handleFavoriteStore.addToFavorite(concertDataPayload)
    addedToFavorite.value = true
  }
}

const handleRemoveFromFavoriteConcerts = async () => {
  const id = props.data?.id
  if (id) {
    await handleFavoriteStore.removeFavorite(id)
    addedToFavorite.value = false
  }
}

watch(
  addedToFavorite,
  async () => {
    try {
      await handleFavoriteStore.getFavorites()
    } catch (error) {
      console.error('Server down ili error')
    } finally {
      const isConcertFavorite = handleFavoriteStore.favorites.some(
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
