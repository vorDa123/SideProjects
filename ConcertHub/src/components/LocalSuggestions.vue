<script setup lang="ts">
import LocalSuggestionCard from './LocalSuggestionCard.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { motion, AnimatePresence } from 'motion-v'

const MotionLocalSuggestionCard = motion.create(LocalSuggestionCard)

let longitude = ref<number>(0)
let latitude = ref<number>(0)
let concertsByLocation = ref<any[]>([])

const getGeolocationData = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Ne postoji geolocation')
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude.value = position.coords.latitude
        longitude.value = position.coords.longitude
        console.log(`Longitude: ${longitude.value}, Latitude: ${latitude.value}`)
        resolve(position.coords)
      },
      (error) => reject(error),
    )
  })
}

const sendGeolocationData = async () => {
  if (longitude.value === 0 && latitude.value === 0) return console.log('Koordinate su 0')
  try {
    const res = await axios.post('http://localhost:3000/api/send-geolocation-data', {
      lat: latitude.value,
      long: longitude.value,
    })
    console.log('Poslane koordinate: ', res.data)
    return res.data
  } catch (error) {
    console.error('ID se nije poslao')
  }
}

const handleGetConcertsByLocation = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-concert-by-location')
    concertsByLocation.value = res.data || []
  } catch (error) {
    console.error('Server down ili error')
    concertsByLocation.value = []
  }
}

onMounted(async () => {
  try {
    await getGeolocationData()
    await sendGeolocationData()
    await handleGetConcertsByLocation()
  } catch (error) {
    console.log('Dogodio se error')
  }
})
</script>
<template>
  <div class="p-3 upcomingContainer containerBorder">
    <p class="subtitle">Local suggestions</p>
    <div v-if="concertsByLocation.length > 0">
      <AnimatePresence>
        <MotionLocalSuggestionCard
          v-for="concert in concertsByLocation"
          :key="concert.id"
          :data="concert"
          :initial="{ y: 300, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :exit="{ y: -300, opacity: 0 }"
        />
      </AnimatePresence>
    </div>
    <div v-else>
      <p>There are no concerts near your location.</p>
    </div>
  </div>
</template>
