<script setup lang="ts">
import ConcertListCard from './ConcertListCard.vue'
import axios from 'axios'
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const emit = defineEmits(['get-concert-id'])

let concerts = ref<any[]>([])
const selectedConcertId = ref<string>('')
const isLoading = ref<boolean>(false)
let model = defineModel<string>({ default: '' })
const concertCardSearch = computed(() => {
  const search = model.value?.toLowerCase() || ''

  if (!search) return concerts.value

  return concerts.value.filter((el: any) =>
    el.name.toLowerCase().includes(search)
  )
})

let interval: ReturnType<typeof setInterval> | undefined = undefined

const handleGetConcertID = (concertId: string) => {
  selectedConcertId.value = concertId
  console.log('Selected Concert ID:', concertId)

  emit('get-concert-id', concertId)
}

const fetchConcerts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/get-concert-list')
    concerts.value = res.data || []
  } catch (error) {
    console.error('Server down ili error')
    concerts.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchConcerts()

  interval = setInterval(() => {
    fetchConcerts()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval ?? undefined)
  isLoading.value = true
})
</script>
<template>
  <section class="col-md-9 col-xxl-10 pt-4 dashboard overflowScroll">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <p class="title">Concerts</p>
      <div class="row gx-3 gy-2 mb-2 mb-md-0">
        <div class="d-flex gap-2 justify-content-start align-items-center">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search" v-model="model" class="searchInput" />
        </div>
        <div class="d-flex flex-wrap gap-4 justify-content-evenly">
          <ConcertListCard
            v-for="concert in concertCardSearch"
            :key="concert.id"
            :data="concert"
            @get-concert-id="handleGetConcertID"
          />
        </div>
      </div>
    </div>
  </section>
</template>
