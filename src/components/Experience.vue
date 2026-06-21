<script setup>
import { Reveal, SectionLabel, SectionTitle } from './AnimatedSection.js'
import { experience } from '../data/portfolio.js'
</script>

<template>
  <section
    id="experience"
    class="min-h-full flex items-center py-8 px-6 bg-bg-secondary relative overflow-hidden"
  >
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
      style="font-size: clamp(6rem,16vw,16rem)"
      aria-hidden="true"
    >
      WORK
    </div>

    <div class="max-w-[1100px] mx-auto w-full relative z-10">
      <SectionLabel>Experience</SectionLabel>
      <SectionTitle>Where I've Worked</SectionTitle>

      <Reveal v-for="(exp, idx) in experience" :key="exp.company" :delay="0">
        <div :class="['mb-4', idx > 0 ? 'bg-bg-card border border-border rounded-2xl p-6' : '']">
          <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
            <div>
              <h3
                class="font-extrabold text-text-primary leading-tight"
                :style="{ fontSize: idx === 0 ? 'clamp(1.4rem, 3vw, 2.5rem)' : 'clamp(1.1rem,2.5vw,1.6rem)' }"
              >
                {{ exp.company }}
              </h3>
              <div class="text-accent font-semibold text-lg mt-1">{{ exp.role }}</div>
            </div>
          </div>
          <div class="font-mono text-xs text-text-muted mb-3">
            {{ exp.period }} &bull; {{ exp.context }}
          </div>

          <div class="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div v-for="(cat, ci) in exp.categories" :key="ci">
              <div
                v-if="cat.title"
                class="text-[0.7rem] font-bold text-accent mb-3 font-mono uppercase tracking-[3px] flex items-center gap-2"
              >
                {{ cat.title }}
                <span class="flex-1 h-px bg-border" />
              </div>
              <ul class="flex flex-col gap-2 list-none p-0">
                <li
                  v-for="(item, ii) in cat.items"
                  :key="ii"
                  class="pl-5 relative text-sm text-text-secondary leading-relaxed"
                >
                  <span class="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full border-[1.5px] border-accent" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>
