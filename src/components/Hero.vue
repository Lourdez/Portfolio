<script setup>
import { ref, watch, onUnmounted } from 'vue'

const roles = [
  'DevOps Engineer',
  'Healthcare — Radiology Specialist',
  'Infrastructure Engineer',
]

const display = ref('')
const index = ref(0)
const isDeleting = ref(false)
const typingSpeed = 65
const deleteSpeed = 38
const pause = 2400

let timeout = null

function tick() {
  clearTimeout(timeout)
  const current = roles[index.value]

  if (!isDeleting.value && display.value === current) {
    timeout = setTimeout(() => {
      isDeleting.value = true
    }, pause)
  } else if (isDeleting.value && display.value === '') {
    isDeleting.value = false
    index.value = (index.value + 1) % roles.length
  } else if (isDeleting.value) {
    timeout = setTimeout(() => {
      display.value = current.slice(0, display.value.length - 1)
    }, deleteSpeed)
  } else {
    timeout = setTimeout(() => {
      display.value = current.slice(0, display.value.length + 1)
    }, typingSpeed)
  }
}

watch([display, isDeleting, index], tick, { immediate: true })
onUnmounted(() => clearTimeout(timeout))
</script>

<template>
  <section
    id="hero"
    class="relative h-full w-full flex items-center justify-center overflow-hidden"
  >
    <!-- GIF background -->
    <img
      src="/loop_style.gif"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-bg-primary/65" />

    <!-- Vignette -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at center, transparent 35%, rgba(10,14,23,0.75) 100%)"
    />

    <!-- Centered content -->
    <div class="relative z-10 text-center px-6 select-none">
      <h1
        class="hero-title font-extrabold leading-[1.05] text-text-primary"
        style="font-size: clamp(3rem, 9vw, 9rem); letter-spacing: -0.02em"
      >
        Lourdez <span class="text-accent">Parker</span>
      </h1>

      <!-- Typewriter -->
      <div class="typewriter-wrap mt-5 h-9 flex items-center justify-center">
        <span class="font-mono text-lg md:text-xl text-text-secondary tracking-wide">{{ display }}</span>
        <span
          class="inline-block w-[2px] h-6 bg-accent ml-1 mb-0.5"
          style="animation: blink 1s step-end infinite"
        />
      </div>

      <!-- Scroll hint -->
      <div class="scroll-hint mt-16 flex flex-col items-center gap-2 text-text-muted">
        <span class="text-[0.65rem] font-mono uppercase tracking-[4px]">Scroll</span>
        <div
          class="w-px h-10 bg-gradient-to-b from-accent to-transparent"
          style="animation: float 1.8s ease-in-out infinite"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-title {
  animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}
.typewriter-wrap {
  animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
}
.scroll-hint {
  animation: fadeIn 1s ease 2.2s both;
}

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(40px); filter: blur(12px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>
