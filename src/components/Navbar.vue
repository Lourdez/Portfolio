<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { navLinks, personalInfo } from '../data/portfolio.js'
import GithubIcon from './GithubIcon.vue'

const scrolled = ref(false)
const visible = ref(false)
const open = ref(false)
const active = ref('')

function onScroll() {
  const heroHeight = window.innerHeight * 0.85
  scrolled.value = window.scrollY > heroHeight + 20
  visible.value = window.scrollY > heroHeight

  const sections = document.querySelectorAll('section[id]')
  let current = ''
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id
  })
  active.value = current
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="navbar">
    <nav
      v-if="visible"
      :class="[
        'fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl transition-shadow',
        scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : '',
      ]"
      style="background: rgba(10, 14, 23, 0.88)"
    >
      <div class="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          class="font-mono text-base font-bold text-accent hover:opacity-80 transition-opacity"
        >
          lp<span class="text-text-muted font-normal">@devops</span>:~$
        </a>

        <!-- Desktop nav -->
        <ul class="hidden md:flex gap-7 list-none items-center">
          <li v-for="l in navLinks" :key="l.href">
            <a
              :href="l.href"
              :class="[
                'text-sm font-medium tracking-wide transition-colors',
                active === l.href.slice(1) ? 'text-accent' : 'text-text-secondary hover:text-accent',
              ]"
            >{{ l.label }}</a>
          </li>
          <li>
            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon :size="18" />
            </a>
          </li>
        </ul>

        <!-- Hamburger -->
        <button
          class="md:hidden bg-transparent border-none cursor-pointer text-text-secondary"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <component :is="open ? X : Menu" :size="22" />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition name="mobile-menu">
        <ul
          v-if="open"
          class="md:hidden flex flex-col gap-5 px-6 py-6 list-none border-b border-border"
          style="background: rgba(10, 14, 23, 0.97)"
        >
          <li v-for="l in navLinks" :key="l.href">
            <a
              :href="l.href"
              :class="[
                'text-sm font-medium transition-colors',
                active === l.href.slice(1) ? 'text-accent' : 'text-text-secondary hover:text-accent',
              ]"
              @click="open = false"
            >{{ l.label }}</a>
          </li>
        </ul>
      </Transition>
    </nav>
  </Transition>
</template>

<style scoped>
.navbar-enter-active,
.navbar-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.navbar-enter-from,
.navbar-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, max-height 0.3s ease;
  max-height: 400px;
  overflow: hidden;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
