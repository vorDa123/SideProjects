<script setup lang="ts">
import ConcertListCard from './ConcertListCard.vue'
import { gsap } from 'gsap'
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

const emit = defineEmits(['get-concert-id'])

const selectedConcertId = ref<string>('')

const cardAnimation = ref<any>(null)

let isConcertsFetched = ref<boolean>(false)

let model = defineModel<string>({ default: '' })

const fetchConcertsStore = useHandleConcertStore()

const concertCardSearch = computed(() => {
  const search = model.value?.toLowerCase() || ''

  if (!search) return fetchConcertsStore.concerts

  return fetchConcertsStore.concerts.filter((el: any) => el.name.toLowerCase().includes(search))
})

const handleGetConcertID = (concertId: string) => {
  selectedConcertId.value = concertId
  console.log('Selected Concert ID:', concertId)

  emit('get-concert-id', concertId)
}

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
        x: 100,
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

watch(concertCardSearch, () => {
  playAnimation()
})

onMounted(() => {
  fetchConcerts()
})

onUnmounted(() => {
  isConcertsFetched.value = false
})
</script>
<template>
  <section class="col-md-9 col-xxl-10 pt-4 dashboard overflowScroll">
    <div v-if="isConcertsFetched && concertCardSearch.length > 0">
      <p class="title">Concerts</p>
      <div class="row gx-3 gy-2 mb-2 mb-md-0">
        <div class="d-flex gap-2 justify-content-start align-items-center">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search" v-model="model" class="searchInput" />
        </div>
        <div class="d-flex flex-wrap gap-4 justify-content-evenly" ref="cardAnimation">
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
      <i class="bi bi-arrow-clockwise loadingIcon rotate-animation"></i>
    </div>
  </section>
</template>
