<script setup lang="ts">
import PreviousConcerts from './PreviousConcerts.vue'
import SavedConcerts from './SavedConcerts.vue'
import axios from 'axios'
import { motion } from 'motion-v'
import { ref, computed, onMounted, onUnmounted, watch, toRaw } from 'vue'

let favoriteConcerts = ref<any[]>([])
let favoriteModel = defineModel<string>('favorite', { default: '' })
let attendedModel = defineModel<string>('attended', { default: '' })
let isFavoritesFetched = ref<boolean>(false)
let attendedConcerts = ref<any[]>([])
let isAttendedFetched = ref<boolean>(false)
let interval: ReturnType<typeof setInterval> | undefined = undefined

const favoriteConcertSearch = computed(() => {
  const search = favoriteModel.value?.toLowerCase() || ''

  if (!search) return favoriteConcerts.value

  return favoriteConcerts.value.filter((el: any) => el.name.toLowerCase().includes(search))
})

const attendedConcertSearch = computed(() => {
  const search = attendedModel.value?.toLowerCase() || ''

  if (!search) return attendedConcerts.value

  return attendedConcerts.value.filter((el: any) => el.name.toLowerCase().includes(search))
})

const fetchFavourites = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-favourites')
    favoriteConcerts.value = res.data || []
    // console.log('Fetched data:', res.data)
    isFavoritesFetched.value = true
  } catch (error) {
    console.error('Server down ili error')
    favoriteConcerts.value = []
    isFavoritesFetched.value = false
  }
}

const fetchAttended = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-attended')
    attendedConcerts.value = res.data || []
    // console.log('Fetched data:', res.data)
    isAttendedFetched.value = true
  } catch (error) {
    console.error('Server down ili error')
    attendedConcerts.value = []
    isAttendedFetched.value = false
  }
}

onMounted(() => {
  fetchFavourites()
  fetchAttended()

  interval = setInterval(() => {
    fetchFavourites()
    fetchAttended()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval ?? undefined)
  isFavoritesFetched.value = false
  isAttendedFetched.value = false
})
</script>
<template>
  <section class="col-md-9 col-xxl-10 pt-4 dashboard">
    <div>
      <div class="row gx-3 gy-2 mb-2 mb-md-0">
        <div class="col-md-6">
          <div class="containerBorder p-2 myListContainers">
            <p class="title">My concerts</p>
            <div class="d-flex gap-2 justify-content-start align-items-center">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="Search" v-model="favoriteModel" class="searchInput" />
            </div>
            <div v-if="isFavoritesFetched && favoriteConcertSearch.length > 0">
              <SavedConcerts
                v-for="concert in favoriteConcertSearch"
                :key="concert.id"
                :data="concert"
              />
            </div>
            <div v-else>There are no favorite concerts.</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="containerBorder p-2 myListContainers">
            <p class="title">Attended concerts</p>
            <div class="d-flex gap-2 justify-content-start align-items-center">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="Search" v-model="attendedModel" class="searchInput" />
            </div>
            <div v-if="isAttendedFetched && attendedConcertSearch.length > 0">
              <PreviousConcerts
                v-for="concert in attendedConcertSearch"
                :key="concert.id"
                :data="concert"
              />
            </div>
            <div v-else>There are no attended concerts.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
