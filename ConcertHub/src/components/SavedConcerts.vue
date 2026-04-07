<script setup lang="ts">
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  data: Object,
})
</script>
<template>
  <div class="concertCard my-3 pointerElement">
    <p class="concertSubtitle">{{ props.data?.name }}</p>
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
