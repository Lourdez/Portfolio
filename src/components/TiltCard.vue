<script setup>
import { ref, reactive } from 'vue'

const cardRef = ref(null)
const state = reactive({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 })

function handleMouseMove(e) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  state.rotateX = (y - 0.5) * -14
  state.rotateY = (x - 0.5) * 14
  state.shineX = x * 100
  state.shineY = y * 100
}

function handleMouseLeave() {
  state.rotateX = 0
  state.rotateY = 0
  state.shineX = 50
  state.shineY = 50
}
</script>

<template>
  <div style="perspective: 900px">
    <div
      ref="cardRef"
      class="relative h-full"
      :style="{
        transformStyle: 'preserve-3d',
        transform: `rotateX(${state.rotateX}deg) rotateY(${state.rotateY}deg)`,
        transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
      }"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <slot />
      <div
        class="absolute inset-0 rounded-xl pointer-events-none z-10"
        :style="{
          background: `radial-gradient(circle at ${state.shineX}% ${state.shineY}%, rgba(0,212,170,0.13) 0%, transparent 65%)`,
        }"
      />
    </div>
  </div>
</template>
