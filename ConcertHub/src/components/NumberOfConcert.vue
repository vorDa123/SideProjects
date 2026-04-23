<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'
import { gsap } from 'gsap'

const handleFavoriteStore = useHandleConcertStore()

let numberOfConcerts = computed(() => handleFavoriteStore.favorites.length)

const fetchFavourites = async () => {
  await handleFavoriteStore.getFavorites()
}

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

onMounted(() => {
  fetchFavourites()
})
</script>
<template>
  <div
    class="p-3 d-flex flex-column align-items-center justify-content-center containerHeight containerBorder"
  >
    <div class="numberDisplayWrapper concertNumber bold">
      <Transition @enter="onEnter" @leave="onLeave" :css="false" mode="out-in">
        <span :key="numberOfConcerts" class="number">{{ numberOfConcerts }}</span>
      </Transition>
    </div>
    <span>Concerts</span>
  </div>
</template>
