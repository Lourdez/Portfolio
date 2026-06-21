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
  <!--
    STACKED PARALLAX — how it works:
    Every section sits in a 200vh outer container (position: relative).
    Inside is a 100vh sticky element (position: sticky; top: 0).
    Containers overlap by 100vh via margin-top: -100vh.
    Z-indices decrease top-to-bottom so each section sits BEHIND the previous.

    Result: as you scroll, the top section exhausts its container and unsticks,
    scrolling off to reveal the next section that was always sitting behind it.
    Each section gets 100vh of "dwell time" before the next one appears.
  -->

  <!-- ① HERO — z-90, normal flow, scrolls off first -->
  <div style="position: relative; z-index: 90; height: 100vh">
    <Hero />
  </div>

  <!-- ② ABOUT — z-80, behind Hero -->
  <div style="position: relative; z-index: 80; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <About />
    </div>
  </div>

  <!-- ③ PACS — z-70, behind About -->
  <div style="position: relative; z-index: 70; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <Pacs />
    </div>
  </div>

  <!-- ④ SKILLS — z-60, behind Pacs -->
  <div style="position: relative; z-index: 60; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <Skills />
    </div>
  </div>

  <!-- ⑤ EXPERIENCE — z-50, behind Skills -->
  <div style="position: relative; z-index: 50; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <Experience />
    </div>
  </div>

  <!-- ⑥ PROJECTS — z-40, behind Experience -->
  <div style="position: relative; z-index: 40; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <Projects />
    </div>
  </div>

  <!-- ⑦ CERTIFICATIONS — z-30, behind Projects -->
  <div style="position: relative; z-index: 30; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <Certifications />
    </div>
  </div>

  <!-- ⑧ EDUCATION — z-20, behind Certifications -->
  <div style="position: relative; z-index: 20; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <Education />
    </div>
  </div>

  <!-- ⑨ CONTACT — z-10, behind Education -->
  <div style="position: relative; z-index: 10; height: 200vh; margin-top: -100vh">
    <div style="position: sticky; top: 0; height: 100vh; overflow: hidden">
      <Contact />
    </div>
  </div>

  <!-- Footer — normal flow, always last -->
  <footer
    class="py-8 px-6 border-t border-border text-center"
    style="position: relative; z-index: 5; background: #0a0e17"
  >
    <p class="font-mono text-xs text-text-muted">
      &copy; 2025 Lourdez Parker — Built with Vue 3 + Vite + Tailwind CSS
    </p>
  </footer>

  <ScrollToTop />
</template>
