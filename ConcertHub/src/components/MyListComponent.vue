<script setup lang="ts">
import PreviousConcerts from './PreviousConcerts.vue'
import SavedConcerts from './SavedConcerts.vue'
</script>
<template>
  <section class="col-md-9 col-xxl-10 pt-4 dashboard">
    <div>
      <div class="row gx-3 gy-2 mb-2 mb-md-0">
        <div class="col-md-6">
          <div class="containerBorder p-2 myListContainers">
            <p class="title">My concerts</p>
            <div class="d-flex gap-2 justify-content-start align-items-center">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="Search" class="searchInput" />
            </div>
            <SavedConcerts />
            <SavedConcerts />
            <SavedConcerts />
            <SavedConcerts />
            <SavedConcerts />
            <SavedConcerts />
            <SavedConcerts />
            <SavedConcerts />
          </div>
        </div>
        <div class="col-md-6">
          <div class="containerBorder p-2 myListContainers">
            <p class="title">Previous concerts</p>
            <div class="d-flex gap-2 justify-content-start align-items-center">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="Search" class="searchInput" />
            </div>
            <PreviousConcerts />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
