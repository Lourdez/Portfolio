<script setup>
import { Clock, CheckCircle, Star } from 'lucide-vue-next'
import { Reveal, SectionLabel, SectionTitle } from './AnimatedSection.js'
import { certifications } from '../data/portfolio.js'

const groups = [
  {
    label: 'Actively Pursuing',
    items: certifications.active,
    icon: Clock,
    iconClass: 'bg-[#f59e0b22] border-[#f59e0b44] text-[#f59e0b]',
    badge: 'IN PROGRESS',
    badgeClass: 'bg-[#f59e0b22] text-[#f59e0b]',
  },
  {
    label: 'Planned',
    items: certifications.planned,
    icon: CheckCircle,
    iconClass: 'bg-accent-glow border-border-accent text-accent',
    badge: 'PLANNED',
    badgeClass: 'bg-accent-glow text-accent',
  },
  {
    label: 'Domain Knowledge',
    items: certifications.domain,
    icon: Star,
    iconClass: 'bg-[#8b5cf622] border-[#8b5cf644] text-[#8b5cf6]',
    badge: 'DOMAIN',
    badgeClass: 'bg-[#8b5cf622] text-[#8b5cf6]',
  },
]
</script>

<template>
  <section
    id="certifications"
    class="min-h-full flex items-center py-8 px-6 bg-bg-secondary relative overflow-hidden"
  >
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
      style="font-size: clamp(6rem,14vw,14rem)"
      aria-hidden="true"
    >
      CERTS
    </div>

    <div class="max-w-[1100px] mx-auto relative z-10">
      <SectionLabel>Growth</SectionLabel>
      <SectionTitle>Certifications &amp; Learning Roadmap</SectionTitle>

      <div v-for="g in groups" :key="g.label" class="mb-4">
        <Reveal>
          <h3 class="text-xs text-text-muted font-bold uppercase tracking-[3px] font-mono mb-5">
            {{ g.label }}
          </h3>
        </Reveal>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Reveal v-for="(cert, i) in g.items" :key="cert.name" :delay="i % 3">
            <div class="bg-bg-card border border-border rounded-xl p-6 flex gap-4 items-start hover:border-border-accent transition-colors h-full group">
              <div :class="['w-10 h-10 min-w-10 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform', g.iconClass]">
                <component :is="g.icon" :size="18" />
              </div>
              <div>
                <div class="text-[0.95rem] font-semibold text-text-primary">{{ cert.name }}</div>
                <div class="text-xs text-text-muted mt-0.5">{{ cert.org }}</div>
                <span :class="['font-mono text-[0.65rem] font-bold px-2 py-0.5 rounded mt-2 inline-block tracking-wider', g.badgeClass]">
                  {{ g.badge }}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>
