<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'
import { gsap } from 'gsap'

const handleFavoriteStore = useHandleConcertStore()

let interval: ReturnType<typeof setInterval> | undefined = undefined
let todayDate = ref(new Date())
const fetchFavourites = async () => {
  await handleFavoriteStore.getFavorites()
}

const timeLeft = computed(() => {
  if (!handleFavoriteStore.favorites.length) return null

  const concertDate = new Date(handleFavoriteStore.favorites[0].dateTime)
  const diff = Number(concertDate) - Number(todayDate.value)

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  }
})

const onEnter = (el: Element, done: () => void) => {
  gsap.fromTo(
    el,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'elastic.out(1.75, 0.5)', onComplete: done },
  )
}

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    y: -20,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: done,
  })
}

onMounted(async () => {
  try {
    await fetchFavourites()

    interval = setInterval(() => {
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
          <Transition @enter="onEnter" @leave="onLeave" :css="false" mode="out-in">
            <span :key="timeLeft?.days" class="countdownNumberFontSize">{{
              timeLeft?.days || 0
            }}</span>
          </Transition>
          <span class="bold">D</span>
        </div>
      </div>
      <span class="countdownNumberDelimiter">:</span>
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <Transition @enter="onEnter" @leave="onLeave" :css="false" mode="out-in">
            <span :key="timeLeft?.hours" class="countdownNumberFontSize">{{
              timeLeft?.hours || 0
            }}</span>
          </Transition>
          <span class="bold">H</span>
        </div>
      </div>
      <span class="countdownNumberDelimiter">:</span>
      <div class="countdownNumber">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <Transition @enter="onEnter" @leave="onLeave" :css="false" mode="out-in">
            <span :key="timeLeft?.minutes" class="countdownNumberFontSize">{{
              timeLeft?.minutes || 0
            }}</span>
          </Transition>
          <span class="bold">M</span>
        </div>
      </div>
    </div>
  </div>
</template>
