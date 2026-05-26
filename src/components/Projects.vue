<script setup>
import { Reveal, SectionLabel, SectionTitle } from './AnimatedSection.js'
import { projects } from '../data/portfolio.js'
import TiltCard from './TiltCard.vue'
</script>

<template>
  <section
    id="projects"
    class="min-h-screen flex items-center py-32 px-6 relative overflow-hidden"
  >
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
      style="font-size: clamp(6rem,16vw,16rem)"
      aria-hidden="true"
    >
      BUILD
    </div>

    <div class="max-w-[1100px] mx-auto w-full relative z-10">
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>What I've Built</SectionTitle>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Reveal v-for="(p, i) in projects" :key="p.number" :delay="i % 3">
          <TiltCard class="h-full">
            <div class="bg-bg-card border border-border rounded-xl p-7 flex flex-col hover:border-border-accent transition-all h-full">
              <div class="font-mono text-xs text-accent font-bold mb-3 opacity-60">
                {{ p.number }}
              </div>
              <h3 class="text-lg font-bold text-text-primary mb-3 leading-snug">
                {{ p.title }}
              </h3>
              <p class="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                {{ p.desc }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="s in p.stack"
                  :key="s"
                  class="font-mono text-[0.7rem] px-2 py-0.5 rounded bg-accent-glow border border-border-accent text-accent"
                >
                  {{ s }}
                </span>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </div>
  </section>
</template>
