<script setup lang="ts">
const props = defineProps({
  data: Object,
})
</script>
<template>
  <div class="concertCard my-3 pointerElement">
    <p class="concertSubtitle">{{ props.data?.name }}</p>
    <p class="concertDescription">
      {{ props.data?.description }}
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
</template>
