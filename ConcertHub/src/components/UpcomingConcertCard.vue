<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'
import { gsap } from 'gsap'

const props = defineProps({
  data: Object,
})

const addedToFavorite = ref<boolean>(false)

const heartIconAnimation = ref<any>(null)

const handleFavoriteStore = useHandleConcertStore()

let heartIconClass = computed(() => {
  return addedToFavorite.value ? 'bi bi-heart-fill' : 'bi bi-heart'
})

const handleFavoriteConcerts = async () => {
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
    await handleFavoriteStore.addToFavorite(concertDataPayload)
    addedToFavorite.value = true
    if (heartIconAnimation.value) {
      gsap.to(heartIconAnimation.value, {
        scale: 1.2,
        duration: 0.2,
        repeat: 1,
        yoyo: true,
      })
    }
  }
}

const handleRemoveFromFavoriteConcerts = async () => {
  const id = props.data?.id
  if (id) {
    await handleFavoriteStore.removeFavorite(id)
    addedToFavorite.value = false
    if (heartIconAnimation.value) {
      gsap.to(heartIconAnimation.value, {
        scale: 1.2,
        duration: 0.2,
        repeat: 1,
        yoyo: true,
      })
    }
  }
}

const handleToggleFavorite = () => {
  if (!addedToFavorite.value) {
    handleFavoriteConcerts()
  } else {
    handleRemoveFromFavoriteConcerts()
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
  <div class="concertCard containerBorder my-3">
    <div class="d-flex align-items-start justify-content-between gap-2">
      <p class="concertSubtitle">{{ props.data?.name }}</p>
      <i
        :class="heartIconClass"
        class="pointerElement"
        ref="heartIconAnimation"
        style="font-size: 1.47rem; color: #f72f4d"
        @click="handleToggleFavorite"
      ></i>
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
