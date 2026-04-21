<script setup lang="ts">
import NavigationList from './NavigationListComponent.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'

let screenWidth = ref<number>(window.innerWidth)

let showMobileNavigation = ref<boolean>(false)

const emit = defineEmits(['get-mobileNavShown'])

const handleShowMobileNav = (shownMobileNav: boolean) => {
  showMobileNavigation.value = shownMobileNav

  emit('get-mobileNavShown', shownMobileNav)
}

const handleToggleMobileNavigation = () => {
  showMobileNavigation.value = !showMobileNavigation.value
}

const onWidthChange = () => {
  screenWidth.value = window.innerWidth
}

const onEnter = (el: any, done: () => void) => {
  gsap.fromTo(
    el,
    { x: -100, autoAlpha: 0 },
    { x: 0, duration: 0.4, autoAlpha: 1, ease: 'back.out(0.1)', onComplete: done },
  )
}

const onLeave = (el: any, done: () => void) => {
  gsap.to(el, {
    x: -100,
    duration: 0.4,
    autoAlpha: 0,
    ease: 'back.in(0.1)',
    onComplete: done,
  })
}

onMounted(() => {
  window.addEventListener('resize', onWidthChange)
})

onUnmounted(() => {
  window.removeEventListener('resize', onWidthChange)
})
</script>
<template>
  <NavigationList
    v-if="screenWidth > 767"
    :screenWidthProp="screenWidth"
    :mobileNavigationShown="false"
  />
  <div v-else-if="!showMobileNavigation">
    <i class="bi bi-list mobileMenu pointerElement" @click="handleToggleMobileNavigation"></i>
  </div>
  <Transition @enter="onEnter" @leave="onLeave" :css="false">
    <NavigationList
      :screenWidthProp="screenWidth"
      :mobileNavigationShown="showMobileNavigation"
      @get-mobileNavShown="handleShowMobileNav"
      v-if="showMobileNavigation"
    />
  </Transition>
</template>
