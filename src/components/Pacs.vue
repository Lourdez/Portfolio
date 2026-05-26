<script setup>
import { Reveal, SectionLabel, SectionTitle } from './AnimatedSection.js'
import { pacsComponents } from '../data/portfolio.js'
</script>

<template>
  <section
    id="pacs"
    class="min-h-screen flex items-center py-32 px-6 bg-bg-secondary relative overflow-hidden"
  >
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 font-extrabold leading-none text-text-primary opacity-[0.025] select-none pointer-events-none"
      style="font-size: clamp(6rem,16vw,16rem)"
      aria-hidden="true"
    >
      PACS
    </div>

    <div class="max-w-[1100px] mx-auto w-full relative z-10">
      <SectionLabel>Domain</SectionLabel>
      <SectionTitle>What is PACS?</SectionTitle>

      <Reveal>
        <div class="bg-bg-card border-l-[3px] border-l-accent border border-border rounded-xl p-7 mb-12">
          <p class="text-text-primary text-lg font-medium leading-relaxed">
            <strong>PACS</strong> = Picture Archiving and Communication System.
            The backbone of modern radiology — it stores, retrieves, and
            distributes medical images (X-ray, CT, MRI, Ultrasound) across
            hospitals and clinics.
          </p>
        </div>
      </Reveal>

      <Reveal :delay="1">
        <p class="text-text-secondary text-base max-w-[720px] mb-12 leading-relaxed">
          I build and operate the entire infrastructure stack that connects
          these systems — cloud, networking, storage, security, CI/CD, and
          automation. Here are the key components:
        </p>
      </Reveal>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Reveal v-for="(item, i) in pacsComponents" :key="item.name" :delay="i % 3">
          <div class="bg-bg-card border border-border rounded-xl p-5 hover:border-border-accent hover:-translate-y-0.5 transition-all h-full group">
            <div class="font-mono text-sm text-accent font-bold mb-2 group-hover:translate-x-0.5 transition-transform">
              {{ item.name }}
            </div>
            <div class="text-sm text-text-secondary leading-relaxed">
              {{ item.desc }}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
