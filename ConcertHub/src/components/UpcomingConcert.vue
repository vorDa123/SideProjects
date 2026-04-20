<script setup lang="ts">
import ConcertCard from './UpcomingConcertCard.vue'
import { gsap } from 'gsap'
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

let isConcertsFetched = ref<boolean>(false)

let interval: ReturnType<typeof setInterval> | undefined = undefined

const cardAnimation = ref<any>(null)

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

const playAnimation = () => {
  nextTick(() => {
    if (cardAnimation.value) {
      gsap.from(cardAnimation.value.children, {
        y: 100,
        delay: 0.2,
        duration: 1,
        autoAlpha: 0,
        stagger: 0.3,
        ease: 'back.out(1)',
      })
    }
  })
}

watch(isConcertsFetched, (val) => {
  if (val) {
    playAnimation()
  }
})

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
      <div ref="cardAnimation">
        <ConcertCard
          v-for="concert in fetchConcertsStore.concerts.slice(0, 5)"
          :key="concert.id"
          :data="concert"
        />
      </div>
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
