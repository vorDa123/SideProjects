<script setup lang="ts">
import ConcertCard from './UpcomingConcertCard.vue'
import axios from 'axios'
import { motion } from 'motion-v'
import { ref, onMounted, onUnmounted } from 'vue'
import { p, P } from 'vue-router/dist/index-BzEKChPW.js'

let concerts = ref<any[]>([])
let isConcertsFetched = ref<boolean>(false)

let interval: ReturnType<typeof setInterval> | undefined = undefined

const fetchConcerts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-concert-list')
    concerts.value = res.data || []
    isConcertsFetched.value = true
  } catch (error) {
    console.error('Server down ili error')
    concerts.value = []
    isConcertsFetched.value = false
  }
}

onMounted(() => {
  fetchConcerts()

  interval = setInterval(() => {
    fetchConcerts()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval ?? undefined)
  isConcertsFetched.value = false
})
</script>
<template>
  <div class="p-3 upcomingContainer containerBorder">
    <div v-if="isConcertsFetched" class="d-flex flex-column">
      <p class="subtitle">Upcoming concerts</p>
      <ConcertCard v-for="concert in concerts.splice(0, 5)" :key="concert.id" :data="concert" />
      <div class="py-3 align-self-end">
        <RouterLink to="/concerts" class="showMoreConcertsButton"
          >Show more upcoming concerts <i class="bi bi-arrow-right"></i
        ></RouterLink>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center" style="height: inherit">
      <motion.i
        class="bi bi-arrow-clockwise loadingIcon"
        :animate="{ rotate: 360 }"
        :transition="{ repeat: Infinity, duration: 2 }"
      />
    </div>
  </div>
</template>
