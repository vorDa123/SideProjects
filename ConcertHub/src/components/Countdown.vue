<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

let favoriteConcerts = ref<any[]>([])
let interval: ReturnType<typeof setInterval> | undefined = undefined
let todayDate = ref(new Date())
const fetchFavourites = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-favourites')
    favoriteConcerts.value = res.data || []
  } catch (error) {
    console.error('Server down ili error')
    favoriteConcerts.value = []
  }
}

const timeLeft = computed(() => {
  if (!favoriteConcerts.value.length) return null

  const concertDate = new Date(favoriteConcerts.value[0].dateTime)
  const diff = Number(concertDate) - Number(todayDate.value)

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  }
})

onMounted(async () => {
  try {
    await fetchFavourites()

    interval = setInterval(() => {
      fetchFavourites()
      todayDate.value = new Date()
    }, 1000)
  } catch (error) {
    console.log('Dogodio se error')
  }
})

onUnmounted(() => {
  clearInterval(interval ?? undefined)
})
</script>
<template>
  <div class="p-3 containerHeight containerBorder">
    <p class="subtitle">Countdown</p>
    <div class="d-flex gapContent align-items-center justify-content-center">
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span class="countdownNumberFontSize">{{ timeLeft?.days || 0 }}</span>
          <span class="bold">D</span>
        </div>
      </div>
      <span class="countdownNumberDelimiter">:</span>
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span class="countdownNumberFontSize">{{ timeLeft?.hours || 0 }}</span>
          <span class="bold">H</span>
        </div>
      </div>
      <span class="countdownNumberDelimiter">:</span>
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span class="countdownNumberFontSize">{{ timeLeft?.minutes || 0 }}</span>
          <span class="bold">M</span>
        </div>
      </div>
    </div>
  </div>
</template>
