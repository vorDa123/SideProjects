<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'
import { gsap } from 'gsap'

const handleFavoriteStore = useHandleConcertStore()

let favoriteGenres = ref<any[]>([])
let sortedGenres = ref<Object>({})
let listOfGenresWithNumber = <any[]>[]
let interval: ReturnType<typeof setInterval> | undefined = undefined

const listOfGenreSave = () => {
  let listOfGenres = <any[]>[]

  if (handleFavoriteStore.favorites.length === 0) return

  //This will save only genres of each concert in an array
  handleFavoriteStore.favorites.forEach((element) => listOfGenres.push(element.genre))

  if (listOfGenres.length === 0) return

  //This will return an object with the number of occurence of each array element
  listOfGenresWithNumber = listOfGenres.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})

  if (listOfGenresWithNumber.length === 0) return

  //This will sort elements ascending and cut first 3 of them, result is an object
  sortedGenres.value = Object.fromEntries(
    Object.entries(listOfGenresWithNumber)
      .sort(([, a], [, b]) => b - a)
      .splice(0, 3),
  )

  //This will create an array of the sorted elements
  favoriteGenres.value = Object.keys(sortedGenres.value)
}

const onEnter = (el: any, done: () => void) => {
  gsap.from(el, {
    x: 100,
    duration: 0.7,
    autoAlpha: 0,
    ease: 'back.out(1)',
    delay: el.dataset.index * 0.15,
    onComplete: done,
  })
}

const onLeave = (el: any, done: () => void) => {
  gsap.to(el, {
    x: 100,
    duration: 0.7,
    autoAlpha: 1,
    ease: 'back.out(1)',
    delay: el.dataset.index * 0.15,
    onComplete: done,
  })
}

onMounted(async () => {
  await handleFavoriteStore.getFavorites()
  listOfGenreSave()

  interval = setInterval(() => {
    handleFavoriteStore.getFavorites()
    listOfGenreSave()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval ?? undefined)
})
</script>
<template>
  <div class="p-3 containerHeight containerBorder">
    <p class="subtitle">Favorite genre</p>
    <ol v-if="favoriteGenres.length != 0" class="favoriteGenreList">
      <TransitionGroup name="favList" :css="false" @enter="onEnter" @leave="onLeave" appear>
        <li v-for="(genre, index) in favoriteGenres" :key="genre" :data-index="index">{{ genre }}</li>
      </TransitionGroup>
    </ol>
  </div>
</template>
