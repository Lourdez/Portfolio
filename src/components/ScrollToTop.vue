<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="scroll-btn">
    <button
      v-if="visible"
      class="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl bg-accent text-bg-primary flex items-center justify-center shadow-[0_0_20px_var(--color-accent-dim)] hover:shadow-[0_0_28px_var(--color-accent-glow)] hover:-translate-y-0.5 transition-all"
      aria-label="Scroll to top"
      @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      <ArrowUp :size="18" />
    </button>
  </Transition>
</template>

<style scoped>
.scroll-btn-enter-active,
.scroll-btn-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.scroll-btn-enter-from,
.scroll-btn-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
