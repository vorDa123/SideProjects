<script setup lang="ts">
import PreviousConcerts from './PreviousConcerts.vue'
import SavedConcerts from './SavedConcerts.vue'
import { gsap } from 'gsap'
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useHandleConcertStore } from '../stores/ConcertsStore.ts'

let favoriteModel = defineModel<string>('favorite', { default: '' })
let attendedModel = defineModel<string>('attended', { default: '' })
let isFavoritesFetched = ref<boolean>(false)
let isAttendedFetched = ref<boolean>(false)
let attendedRemoved = ref<boolean>(false)

const fetchConcertsStore = useHandleConcertStore()

const showModal = ref<boolean>(false)

const addedToAttended = ref<boolean>(false)

const emit = defineEmits(['get-showModal', 'get-addedToAttended', 'get-attendedRemoved'])

const handleShowModal = (shownModal: boolean) => {
  showModal.value = shownModal

  emit('get-showModal', shownModal)
}

const handleAttendedRemoved = (removed: boolean) => {
  attendedRemoved.value = removed

  emit('get-attendedRemoved', removed)
}

const handleAddedToAttended = (addedAttended: boolean) => {
  addedToAttended.value = addedAttended

  emit('get-addedToAttended', addedAttended)
}

const favoriteConcertSearch = computed(() => {
  const search = favoriteModel.value?.toLowerCase() || ''

  if (!search) return fetchConcertsStore.favorites

  return fetchConcertsStore.favorites.filter((el: any) => el.name.toLowerCase().includes(search))
})

const attendedConcertSearch = computed(() => {
  const search = attendedModel.value?.toLowerCase() || ''

  if (!search) return fetchConcertsStore.attended

  return fetchConcertsStore.attended.filter((el: any) => el.name.toLowerCase().includes(search))
})

const fetchFavourites = async () => {
  try {
    await fetchConcertsStore.getFavorites()
    isFavoritesFetched.value = true
  } catch (error) {
    console.error('Server down ili error')
    isFavoritesFetched.value = false
  }
}

const fetchAttended = async () => {
  try {
    await fetchConcertsStore.getAttended()
    isAttendedFetched.value = true
  } catch (error) {
    console.error('Server down ili error')
    isAttendedFetched.value = false
  }
}

const onEnter = (el: any, done: () => void) => {
  gsap.from(el, {
    y: 100,
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

onMounted(() => {
  fetchFavourites()
  fetchAttended()
})

onUnmounted(() => {
  isFavoritesFetched.value = false
  isAttendedFetched.value = false
})
</script>
<template>
  <section class="col-md-9 col-xxl-10 pt-4 dashboard">
    <div>
      <div class="row gx-3 gy-2 mb-2 mb-md-0">
        <div class="col-md-6">
          <div class="p-2 myListContainers">
            <p class="title">My concerts</p>
            <div class="d-flex gap-2 justify-content-start align-items-center">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="Search" v-model="favoriteModel" class="searchInput" />
            </div>
            <div v-if="isFavoritesFetched && favoriteConcertSearch.length > 0">
              <TransitionGroup tag="div" :css="false" @enter="onEnter" @leave="onLeave" name="favoriteList" appear>
                <SavedConcerts
                  v-for="(concert, index) in favoriteConcertSearch"
                  :key="concert.id"
                  :data="concert"
                  :data-index="index"
                  @get-addedToAttended="handleAddedToAttended"
                />
              </TransitionGroup>
            </div>
            <div v-else>There are no favorite concerts.</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-2 myListContainers">
            <p class="title">Attended concerts</p>
            <div class="d-flex gap-2 justify-content-start align-items-center">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="Search" v-model="attendedModel" class="searchInput" />
            </div>
            <div v-if="isAttendedFetched && attendedConcertSearch.length > 0">
              <TransitionGroup tag="div" :css="false" @enter="onEnter" @leave="onLeave" name="attendedList" appear>
                <PreviousConcerts
                  v-for="(concert, index) in attendedConcertSearch"
                  :key="concert.id"
                  :data="concert"
                  :data-index="index"
                  @get-attendedRemoved="handleAttendedRemoved"
                  @get-showModal="handleShowModal"
                />
              </TransitionGroup>
            </div>
            <div v-else>There are no attended concerts.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
