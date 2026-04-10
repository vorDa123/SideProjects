<script setup lang="ts">
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  data: Object,
})

const addedToAttended = ref<boolean>(false)

const handleAttendedConcerts = () => {
  axios
    .post('http://localhost:3000/api/add-to-attended', {
      id: props.data?.id,
      name: props.data?.name,
      image: props.data?.image,
      date: props.data?.date,
      time: props.data?.time,
      genre: props.data?.genre,
      venue: props.data?.venue,
      city: props.data?.city,
      country: props.data?.country,
      countryCode: props.data?.countryCode,
    })
    .then((response) => {
      console.log('Poslani podaci: ', response.data)
      addedToAttended.value = true
      return response.data
    })
    .then(() => {
      handleRemoveFromFavoriteConcerts()
    })
    .catch((error) => console.log(error.message))
}

const handleRemoveFromFavoriteConcerts = async () => {
  try {
    const res = await axios.delete('http://localhost:3000/api/remove-from-favourite', {
      data: {
        id: props.data?.id,
      },
    })
    console.log('Poslani podaci: ', res.data)
    addedToAttended.value = false
    return res.data
  } catch (error) {
    console.error('Dogodila se greška prilikom brisanja')
  }
  addedToAttended.value = false
}
</script>
<template>
  <div class="concertCard my-3 pointerElement">
    <div class="d-flex align-items-center justify-content-between">
      <p class="concertSubtitle">{{ props.data?.name }}</p>
      <span @click="handleAttendedConcerts">
        <i class="bi bi-plus-square" style="font-size: 1rem"></i>
        Attended
      </span>
    </div>
    <p class="concertDescription">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor arcu at urna
      accumsan, a faucibus massa lobortis. Curabitur quis maximus nulla. Pellentesque mauris lorem,
      tincidunt at purus et, imperdiet scelerisque est. Aliquam erat volutpat. Fusce aliquam sem ut
      semper faucibus.
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
