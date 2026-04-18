<script setup lang="ts">
import ConcertCard from './UpcomingConcertCard.vue'
import { gsap } from 'gsap'
import { ref, onMounted, onUnmounted } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

let isConcertsFetched = ref<boolean>(false)

let interval: ReturnType<typeof setInterval> | undefined = undefined

const fetchConcertsStore = useHandleConcertStore()

const fetchConcerts = async () => {
  try {
    await fetchConcertsStore.getConcerts()
    isConcertsFetched.value = true
  } catch (error) {
    console.error('Server down ili error')
    isConcertsFetched.value = false
  }
}

onMounted(() => {
  fetchConcerts()

  interval = setInterval(() => {
    fetchConcerts()
  }, 60000)
})

onUnmounted(() => {
  clearInterval(interval ?? undefined)
  isConcertsFetched.value = false
})
</script>
<template>
  <div class="p-3 upcomingContainer containerBorder">
    <div
      v-if="isConcertsFetched && fetchConcertsStore.concerts.length > 0"
      class="d-flex flex-column"
    >
      <p class="subtitle">Upcoming concerts</p>
      <ConcertCard
        v-for="concert in fetchConcertsStore.concerts.slice(0, 5)"
        :key="concert.id"
        :data="concert"
      />
      <div class="py-3 align-self-end">
        <RouterLink to="/concerts" class="showMoreConcertsButton"
          >Show more upcoming concerts <i class="bi bi-arrow-right"></i
        ></RouterLink>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center" style="height: inherit">
      <i class="bi bi-arrow-clockwise loadingIcon rotate-animation"></i>
    </div>
  </div>
</template>
