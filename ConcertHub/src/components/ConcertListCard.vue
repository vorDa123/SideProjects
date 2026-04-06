<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  data: Object,
})

const emit = defineEmits(['get-concert-id'])

const handleGetPlaylistID = () => {
  if (!props.data) return
  emit('get-concert-id', props.data.id)
}

let imageStyle = computed(() => {
  const imageURL = props.data?.image || ''

  return {
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
})
</script>
<template>
  <div class="col-lg-2 col-md-4">
    <div class="concertCard my-3 pointerElement" @click="handleGetPlaylistID">
      <div class="imageContainer" :style="{ ...imageStyle }"></div>
      <div class="d-flex align-items-start justify-content-between gap-2">
        <p class="concertSubtitle">{{ props.data?.name }}</p>
        <i class="bi bi-heart" style="font-size: 1.47rem;"></i>
      </div>
      <p class="concertDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor arcu at urna
        accumsan, a faucibus massa lobortis.
      </p>
      <div class="d-flex flex-wrap align-items-center justify-content-start gap-4 gap-md-12">
        <div class="d-flex gap-2">
          <i class="bi bi-calendar"></i>
          <span>{{ props.data?.date }}</span>
        </div>
        <div class="d-flex gap-2">
          <i class="bi bi-clock"></i>
          <span>{{ props.data?.time }}</span>
        </div>
        <div class="d-flex gap-2">
          <i class="bi bi-geo-alt"></i>
          <span>{{ props.data?.city }}</span>
        </div>
        <div class="d-flex gap-2">
          <i class="bi bi-cash"></i>
          <span>150 EUR</span>
        </div>
      </div>
    </div>
  </div>
</template>
