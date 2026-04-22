<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

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
      <li v-for="genre in favoriteGenres" :key="genre">{{ genre }}</li>
    </ol>
  </div>
</template>
