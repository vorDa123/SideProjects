<script setup lang="ts"></script>
<template>
    <nav class="col-md-2 d-flex flex-column align-items-center align-items-md-stretch p-4 position-sticky navigation">
        <div class="d-flex flex-md-wrap align-items-center justify-content-end gap-12 gap-md-1 justify-content-md-between title">
          <span>ConcertHub</span><i class="bi bi-box-arrow-left hideNavIcon"></i>
        </div>
        <div class="mt-8 mt-md-6 mb-6 mb-md-4 navTitle">
          <RouterLink to="/dashboard" class="d-flex align-items-center justify-content-md-end gap-2"><i class="bi bi-house"></i><span>Dashboard</span></RouterLink>
        </div>
        <div class="mt-4 mt-md-6 mb-6 mb-md-4 navTitle">
          <RouterLink to="/concerts" class="d-flex align-items-center justify-content-md-end gap-2"><i class="bi bi-music-note-list"></i><span>Concert list</span></RouterLink>
        </div>
        <div class="mt-4 mt-md-6 mb-6 mb-md-4 navTitle">
          <RouterLink to="/mylist" class="d-flex align-items-center justify-content-md-end gap-2"><i class="bi bi-card-list"></i><span>My list</span></RouterLink>
        </div>
        <div class="mt-auto pb-5 navTitle">
          <RouterLink to="/" class="d-flex align-items-center justify-content-md-end gap-2"><i class="bi bi-person-slash"></i><span>Log out</span></RouterLink>
        </div>
      </nav>
</template>