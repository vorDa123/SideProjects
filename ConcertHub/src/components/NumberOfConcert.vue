<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'
import { gsap } from 'gsap'

const numberAnimation = ref<HTMLElement | null>(null)

const handleFavoriteStore = useHandleConcertStore()

let numberOfConcerts = computed(() => handleFavoriteStore.favorites.length)

const fetchFavourites = async () => {
  await handleFavoriteStore.getFavorites()
}

watch(
  numberOfConcerts,
  async (newVal: number) => {
    await nextTick(() => {
      if (!numberAnimation.value) return
      const oldElement = numberAnimation.value.querySelector('.number')
      if (!oldElement) return

      gsap.set(oldElement, { position: 'absolute', top: 0 })

      const newElement = document.createElement('span')
      newElement.className = 'number'
      newElement.innerText = newVal.toString()

      gsap.set(newElement, {
        position: 'absolute',
        top: 0,
        opacity: 0,
      })

      numberAnimation.value.appendChild(newElement)

      const tl = gsap.timeline()

      tl.to(oldElement, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      }).to(
        newElement,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'elastic.out(1.1, 0.4)',
          onComplete: () => {
            oldElement.remove()
          },
        },
        '-=0.2',
      )
    })
  },
  { immediate: true },
)

onMounted(() => {
  fetchFavourites()
})
</script>
<template>
  <div
    class="p-3 d-flex flex-column align-items-center justify-content-center containerHeight containerBorder"
  >
    <div ref="numberAnimation" class="numberDisplayWrapper concertNumber bold">
      <span class="number">0</span>
    </div>
    <span>Concerts</span>
  </div>
</template>
