<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  screenWidthProp: Number,
  mobileNavigationShown: Boolean,
})

let mobileNavShown = ref<boolean>(props.mobileNavigationShown)

const emit = defineEmits(['get-mobileNavShown'])

const handleMobileNavigation = () => {
  mobileNavShown.value = !mobileNavShown.value
  emit('get-mobileNavShown', mobileNavShown.value)
}

let mobileNavPosition = computed(() => {
  if (mobileNavShown.value) {
    return {
      position: 'fixed' as const,
      zIndex: 100,
      borderBottomRightRadius: '0px',
      borderTopRightRadius: '0px',
    }
  }
  return {}
})
</script>
<template>
  <nav
    class="col-md-3 col-xxl-2 d-flex flex-column align-items-center align-items-md-stretch p-4 navigation"
    :style="{ ...mobileNavPosition }"
  >
    <div
      class="d-flex flex-md-wrap align-items-center justify-content-end gap-12 gap-md-1 justify-content-md-between title"
    >
      <span>ConcertHub</span>
      <i
        class="bi bi-x pointerElement"
        style="font-size: 3rem"
        @click="handleMobileNavigation"
        v-if="props.screenWidthProp! <= 767 && props.mobileNavigationShown == true"
      ></i>
    </div>
    <div class="mt-8 mt-md-6 mb-6 mb-md-4 navTitle">
      <RouterLink
        to="/dashboard"
        class="d-flex align-items-center justify-content-md-end gap-2"
        exactActiveClass="exactActiveRoute"
        ><i class="bi bi-house"></i><span>Dashboard</span></RouterLink
      >
    </div>
    <div class="mt-4 mt-md-6 mb-6 mb-md-4 navTitle">
      <RouterLink
        to="/concerts"
        class="d-flex align-items-center justify-content-md-end gap-2"
        exactActiveClass="exactActiveRoute"
        ><i class="bi bi-music-note-list"></i><span>Concert list</span></RouterLink
      >
    </div>
    <div class="mt-4 mt-md-6 mb-6 mb-md-4 navTitle">
      <RouterLink
        to="/mylist"
        class="d-flex align-items-center justify-content-md-end gap-2"
        exactActiveClass="exactActiveRoute"
        ><i class="bi bi-card-list"></i><span>My list</span></RouterLink
      >
    </div>
    <div class="mt-auto pb-5 navTitle">
      <RouterLink to="/" class="d-flex align-items-center justify-content-md-end gap-2"
        ><i class="bi bi-person-slash"></i><span>Log out</span></RouterLink
      >
    </div>
  </nav>
</template>
