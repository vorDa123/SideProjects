<script setup lang="ts">
import axios from 'axios'
import { motion } from 'motion-v'
import { ref, computed, onMounted, onUnmounted, watch, toRaw } from 'vue'

let favoriteConcerts = ref<any[]>([])

let interval: ReturnType<typeof setInterval> | undefined = undefined

const fetchFavourites = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-favourites')
    favoriteConcerts.value = res.data || []
  } catch (error) {
    console.error('Server down ili error')
    favoriteConcerts.value = []
  }
}

let numberOfConcerts = computed(() => favoriteConcerts.value.length)

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
