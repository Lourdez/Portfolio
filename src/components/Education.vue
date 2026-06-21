<script setup>
import { GraduationCap } from 'lucide-vue-next'
import { Reveal, SectionLabel, SectionTitle } from './AnimatedSection.js'
import { education } from '../data/portfolio.js'
</script>

<template>
  <section id="education" class="h-full flex items-center py-8 px-6">
    <div class="max-w-[1100px] mx-auto">
      <SectionLabel>Education</SectionLabel>
      <SectionTitle>Academic Background</SectionTitle>

      <div class="flex gap-5 flex-wrap">
        <Reveal v-for="(e, i) in education" :key="e.degree" :delay="i">
          <div class="bg-bg-card border border-border rounded-xl p-6 min-w-[260px] flex-1">
            <div class="w-9 h-9 rounded-lg bg-accent-glow border border-border-accent flex items-center justify-center text-accent mb-3">
              <GraduationCap :size="16" />
            </div>
            <div class="text-base font-bold text-text-primary mb-1">{{ e.degree }}</div>
            <div class="text-sm text-text-secondary">{{ e.school }}</div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
