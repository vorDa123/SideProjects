<script setup lang="ts">
import axios from 'axios'
import { motion } from 'motion-v'
import { ref, onMounted, onUnmounted } from 'vue'

let favoriteConcerts = ref<any[]>([])
let favoriteGenres = ref<any[]>([])
let sortedGenres = ref<Object>({})
let listOfGenresWithNumber = <any[]>[]
let interval: ReturnType<typeof setInterval> | undefined = undefined

const fetchFavourites = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-favourites')
    favoriteConcerts.value = res.data || []
    // console.log('Favorite genre data:', res.data)
  } catch (error) {
    console.error('Server down ili error')
    favoriteConcerts.value = []
  }
}

const listOfGenreSave = () => {
  let listOfGenres = <any[]>[]

  if (favoriteConcerts.value.length === 0) return

  //This will save only genres of each concert in an array
  favoriteConcerts.value.forEach((element) => listOfGenres.push(element.genre))

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

onMounted(() => {
  fetchFavourites()
  listOfGenreSave()

  interval = setInterval(() => {
    fetchFavourites()
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
