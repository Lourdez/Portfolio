<script setup>
import { MapPin, BookOpen, Star } from 'lucide-vue-next'
import { Reveal, SectionLabel } from './AnimatedSection.js'
import { personalInfo, aboutText } from '../data/portfolio.js'

const details = [
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: BookOpen, label: 'Language', value: personalInfo.language },
  { icon: Star, label: 'Goal', value: personalInfo.goal },
]
</script>

<template>
  <section
    id="about"
    class="h-full flex items-center py-8 px-6 relative overflow-hidden"
  >
    <!-- Background watermark -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 font-extrabold text-[clamp(6rem,18vw,18rem)] leading-none text-text-primary opacity-[0.02] select-none pointer-events-none whitespace-nowrap"
      aria-hidden="true"
    >
      ABOUT
    </div>

    <div class="max-w-[1100px] mx-auto w-full relative z-10">
      <SectionLabel>About</SectionLabel>

      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Left — statement + bio -->
        <div>
          <Reveal :delay="1">
            <h2
              class="font-extrabold leading-[1.05] text-text-primary mb-8"
              style="font-size: clamp(2.4rem, 5vw, 5rem)"
            >
              Infrastructure that keeps
              <span class="text-accent">hospitals running</span>.
            </h2>
          </Reveal>
          <div class="space-y-4">
            <Reveal v-for="(p, i) in aboutText" :key="i" :delay="i + 2">
              <p class="text-base text-text-secondary leading-relaxed">{{ p }}</p>
            </Reveal>
          </div>
        </div>

        <!-- Right — detail cards -->
        <Reveal :delay="2">
          <div class="flex flex-col gap-3">
            <div
              v-for="(d, i) in details"
              :key="d.label"
              class="flex gap-4 items-center p-5 bg-bg-card border border-border rounded-xl hover:border-border-accent transition-colors group"
            >
              <div class="w-10 h-10 min-w-10 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <component :is="d.icon" :size="16" />
              </div>
              <div>
                <div class="text-text-muted text-[0.68rem] uppercase tracking-widest font-mono">
                  {{ d.label }}
                </div>
                <div class="text-text-primary font-semibold mt-0.5">{{ d.value }}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
