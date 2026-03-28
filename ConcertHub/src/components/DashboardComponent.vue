<script setup lang="ts">
import Countdown from './Countdown.vue'
import FavoriteGenre from './FavoriteGenre.vue'
import LocalSuggestions from './LocalSuggestions.vue'
import NumberOfConcert from './NumberOfConcert.vue'
import UpcomingConcert from './UpcomingConcert.vue'
</script>
<template>
  <section class="col-md-9 col-xxl-10 pt-4 dashboard">
    <div>
      <p class="title">Dashboard</p>
      <div class="row gx-3 gy-2 mb-2 mb-md-0">
        <div class="col-md-4">
          <NumberOfConcert />
        </div>
        <div class="col-md-4">
          <FavoriteGenre />
        </div>
        <div class="col-md-4">
          <Countdown />
        </div>
      </div>
      <div class="row gx-3 gy-2 gy-md-2 mt-md-2">
        <div class="col-md-8">
          <UpcomingConcert />
        </div>
        <div class="col-md-4">
          <LocalSuggestions />
        </div>
      </div>
    </div>
  </section>
</template>
