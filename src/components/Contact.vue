<script setup>
import { Mail, ExternalLink, MapPin, Globe } from 'lucide-vue-next'
import { Reveal, SectionLabel, SectionTitle } from './AnimatedSection.js'
import { personalInfo } from '../data/portfolio.js'
import GithubIcon from './GithubIcon.vue'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'Lourdez Parker',
    href: personalInfo.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/Lourdez',
    href: personalInfo.github,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: `${personalInfo.location} • Open to: ${personalInfo.targets}`,
    href: null,
  },
]
</script>

<template>
  <section
    id="contact"
    class="min-h-screen flex items-center py-32 px-6 bg-bg-secondary relative overflow-hidden"
  >
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
      style="font-size: clamp(6rem,16vw,16rem)"
      aria-hidden="true"
    >
      TALK
    </div>

    <div class="max-w-[1100px] mx-auto w-full relative z-10">
      <SectionLabel>Connect</SectionLabel>
      <SectionTitle>Get In Touch</SectionTitle>

      <div class="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <Reveal>
            <p class="text-lg text-text-secondary mb-10 leading-relaxed max-w-md">
              Actively looking for DevOps and infrastructure roles in European
              medtech — Netherlands and Switzerland. If you're building
              healthcare imaging infrastructure, let's talk.
            </p>
          </Reveal>

          <div class="flex flex-col gap-3">
            <Reveal v-for="(l, i) in links" :key="l.label" :delay="i">
              <component
                :is="l.href ? 'a' : 'div'"
                v-bind="l.href ? { href: l.href, ...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {}"
                class="flex items-center gap-4 p-5 bg-bg-card border border-border rounded-xl hover:border-border-accent hover:translate-x-1.5 transition-all group"
              >
                <div class="w-11 h-11 min-w-11 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <component :is="l.icon" :size="18" />
                </div>
                <div>
                  <div class="text-[0.68rem] text-text-muted uppercase tracking-widest font-mono">
                    {{ l.label }}
                  </div>
                  <div class="text-[0.95rem] text-text-primary font-semibold mt-0.5">
                    {{ l.value }}
                  </div>
                </div>
              </component>
            </Reveal>
          </div>
        </div>

        <Reveal :delay="2">
          <div class="bg-bg-card border border-border rounded-2xl p-10 text-center">
            <div class="w-12 h-12 rounded-xl bg-accent-glow border border-border-accent flex items-center justify-center text-accent mx-auto mb-6">
              <Globe :size="22" />
            </div>
            <h3 class="text-2xl font-extrabold mb-3">Open to Relocation</h3>
            <p class="text-sm text-text-secondary mb-2">Actively targeting EU medtech hubs</p>
            <p class="text-accent font-bold text-lg">Netherlands &bull; Switzerland</p>
            <div class="mt-6 pt-6 border-t border-border text-xs text-text-muted leading-relaxed space-y-1">
              <p>Healthcare IT &bull; PACS/RIS &bull; Medical Imaging</p>
              <p>DevOps &bull; Infrastructure &bull; Cloud</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
