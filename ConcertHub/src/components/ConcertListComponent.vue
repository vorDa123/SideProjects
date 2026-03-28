<script setup lang="ts">
import ConcertListCard from './ConcertListCard.vue'
</script>
<template>
  <section class="col-md-10 pt-4 dashboard overflowScroll">
    <div>
      <p class="title">Concerts</p>
      <div class="row gx-3 gy-2 mb-2 mb-md-0">
        <div class="d-flex gap-2 justify-content-start align-items-center">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search" class="searchInput" />
        </div>
        <div class="d-flex flex-wrap gap-4 justify-content-evenly">
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
          <ConcertListCard />
        </div>
      </div>
    </div>
  </section>
</template>
