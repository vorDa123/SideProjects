<script setup lang="ts">
import ConcertListCard from './ConcertListCard.vue'
import { motion } from 'motion-v'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useFetchConcertsStore } from '../stores/ConcertsStore.ts'

const emit = defineEmits(['get-concert-id'])

let concerts = ref<any[]>([])
const selectedConcertId = ref<string>('')
let isConcertsFetched = ref<boolean>(false)
let model = defineModel<string>({ default: '' })
const fetchConcertsStore = useFetchConcertsStore()
const concertCardSearch = computed(() => {
  const search = model.value?.toLowerCase() || ''

  if (!search) return concerts.value

  return concerts.value.filter((el: any) => el.name.toLowerCase().includes(search))
})

let interval: ReturnType<typeof setInterval> | undefined = undefined

const handleGetConcertID = (concertId: string) => {
  selectedConcertId.value = concertId
  console.log('Selected Concert ID:', concertId)

  emit('get-concert-id', concertId)
}

const fetchConcerts = async () => {
  try {
    const res = await fetchConcertsStore.getConcerts
    concerts.value = res.data || []
    isConcertsFetched.value = true
  } catch (error) {
    console.error('Server down ili error')
    concerts.value = []
    isConcertsFetched.value = false
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
  isConcertsFetched.value = false
})
</script>
<template>
  <section class="col-md-9 col-xxl-10 pt-4 dashboard overflowScroll">
    <div v-if="isConcertsFetched">
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
    <div v-else class="d-flex justify-content-center align-items-center" style="height: inherit">
      <motion.i
        class="bi bi-arrow-clockwise loadingIcon"
        :animate="{ rotate: 360 }"
        :transition="{ repeat: Infinity, duration: 2 }"
      />
    </div>
  </section>
</template>
