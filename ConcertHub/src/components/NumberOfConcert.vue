<script setup lang="ts">
import { motion } from 'motion-v'
import { computed, onMounted, onUnmounted } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

const handleFavoriteStore = useHandleConcertStore()

let interval: ReturnType<typeof setInterval> | undefined = undefined

const fetchFavourites = async () => {
  await handleFavoriteStore.getFavorites()
}

let numberOfConcerts = computed(() => handleFavoriteStore.favorites.length)

onMounted(() => {
  fetchFavourites()

  interval = setInterval(() => {
    fetchFavourites()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval ?? undefined)
})
</script>
<template>
  <div
    class="p-3 d-flex flex-column align-items-center justify-content-center containerHeight containerBorder"
  >
    <span class="bold concertNumber">{{ numberOfConcerts }}</span>
    <span>Concerts</span>
  </div>
</template>
