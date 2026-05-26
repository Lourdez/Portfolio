<script setup>
import {
  Activity, Cloud, Server, Database, GitBranch, Shield, Radio, Mail, Box,
} from 'lucide-vue-next'
import { Reveal, SectionLabel, SectionTitle } from './AnimatedSection.js'
import { skills } from '../data/portfolio.js'
import TiltCard from './TiltCard.vue'

const iconMap = { Activity, Cloud, Server, Database, GitBranch, Shield, Radio, Mail, Box }
</script>

<template>
  <section
    id="skills"
    class="min-h-screen flex items-center py-32 px-6 relative overflow-hidden"
  >
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
      style="font-size: clamp(6rem,16vw,16rem)"
      aria-hidden="true"
    >
      STACK
    </div>

    <div class="max-w-[1100px] mx-auto w-full relative z-10">
      <SectionLabel>Skills</SectionLabel>
      <SectionTitle>Technical Arsenal</SectionTitle>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Reveal v-for="(skill, i) in skills" :key="skill.title" :delay="i % 3">
          <TiltCard class="h-full">
            <div class="bg-bg-card border border-border rounded-xl p-6 hover:border-border-accent transition-all h-full">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent">
                  <component :is="iconMap[skill.icon]" :size="18" />
                </div>
                <h3 class="text-[0.95rem] font-bold text-text-primary">{{ skill.title }}</h3>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in skill.tags"
                  :key="tag"
                  class="font-mono text-[0.72rem] px-2.5 py-1 rounded bg-bg-primary border border-border text-text-secondary hover:border-accent-dim hover:text-text-primary transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </div>
  </section>
</template>
