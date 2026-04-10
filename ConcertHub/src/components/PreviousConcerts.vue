<script setup lang="ts">
import axios from 'axios'

const props = defineProps({
  data: Object,
})

const handleRemoveFromFavoriteConcerts = async () => {
  try {
    const res = await axios.delete('http://localhost:3000/api/remove-from-attended', {
      data: {
        id: props.data?.id,
      },
    })
    console.log('Poslani podaci: ', res.data)
    return res.data
  } catch (error) {
    console.error('Dogodila se greška prilikom brisanja')
  }
}
</script>
<template>
  <div class="concertCard my-3 pointerElement">
    <div class="d-flex align-items-center justify-content-between">
      <p class="concertSubtitle">{{ props.data?.name }}</p>
      <i class="bi bi-trash" style="font-size: 1.4rem" @click="handleRemoveFromFavoriteConcerts"></i>
    </div>
    <p class="concertDescription">
      {{ props.data?.description }}
    </p>
    <div class="d-flex align-items-center justify-content-start gap-4 gap-md-12">
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
    </div>
  </div>
</template>
