<script setup>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Pacs from './components/Pacs.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Certifications from './components/Certifications.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <!-- Hero — normal flow, z-index 20, scrolls away revealing About behind it -->
  <div style="position: relative; z-index: 20; height: 100vh">
    <Hero />
  </div>

  <!-- About — sticky at top:0, z-index 10; margin-top pulls it behind Hero -->
  <div style="position: sticky; top: 0; height: 100vh; margin-top: -100vh; z-index: 10">
    <About />
  </div>

  <!-- Spacer gives About dwell time before content card slides over it -->
  <div style="height: 100vh" />

  <!-- Rest of content — z-index 20, solid bg, slides over sticky About -->
  <div
    style="position: relative; z-index: 20; background: #0a0e17; border-top: 1px solid #1e293b; box-shadow: 0 -16px 60px rgba(0,0,0,0.85)"
  >
    <Pacs />
    <Skills />
    <Experience />
    <Projects />
    <Certifications />
    <Education />
    <Contact />
    <footer class="py-8 px-6 border-t border-border text-center">
      <p class="font-mono text-xs text-text-muted">
        &copy; 2025 Lourdez Parker — Built with Vue 3 + Vite + Tailwind CSS
      </p>
    </footer>
  </div>

  <ScrollToTop />
</template>
