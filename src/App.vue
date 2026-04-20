<template>
  <div class="min-h-screen bg-[#0f0f0f] text-white">

    <!-- Fixed Logo -->
    <div class="fixed top-5 left-6 z-50">
      <LogoIcon />
    </div>

    <!-- Hero -->
    <section id="hero" class="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center">
        <img src="./assets/sonorandesert.jpg" alt="Sonorandesert-image"
          class="w-full h-full object-cover opacity-30 grayscale" />
        <div class="absolute inset-0 bg-linear-to-r from-[#0f0f0f] via-transparent to-[#0f0f0f]"></div>
        <div class="absolute inset-0 bg-linear-to-b from-[#0f0f0f] via-transparent to-[#0f0f0f]"></div>
      </div>
      <div class="relative z-10 max-w-5xl mx-auto w-full pt-20">
        <p class="fade-up text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">Software Dev.</p>
        <h1 class="fade-up text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
          Jimmy<br/>
          <span class="text-zinc-500">Quiroz</span>
        </h1>
        <p class="fade-up text-zinc-400 text-xl max-w-xl leading-relaxed mb-10">
          Front-end, UX/UI developer focused on building clean, modern interfaces that are as functional as they are beautiful.
        </p>
        <div class="fade-up flex items-center gap-4">
          <a href="#projects"
            class="btn-glow bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
            View Projects
          </a>
          <a href="#contact"
            class="btn-glow border border-zinc-700 hover:border-red-500 text-zinc-400 hover:text-red-400 font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
            Get in Touch
          </a>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-32 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="w-2/3 mx-auto border-t border-zinc-800/50 mb-32"></div>
        <p class="fade-up text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">Work</p>
        <h2 class="fade-up text-4xl font-black mb-16">Projects</h2>
        <div class="space-y-6">

          <div v-for="project in projects.slice(0, 3)" :key="project.title"
            class="fade-up group border border-zinc-800 hover:border-red-500/50 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-zinc-900/50">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-2xl">{{ project.icon }}</span>
                <span v-for="tech in project.tech" :key="tech"
                  class="text-xs font-semibold px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                  {{ tech }}
                </span>
              </div>
              <h3 class="text-xl font-black mb-2">{{ project.title }}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed max-w-lg">{{ project.description }}</p>
            </div>
            <div class="shrink-0 flex items-center gap-2">
              <a :href="project.demo" target="_blank"
                class="btn-glow border border-red-500/50 hover:border-red-500 text-red-400 hover:text-red-300 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm cursor-pointer flex items-center gap-2">
                <span>Live Demo</span>
                <span>↗</span>
              </a>
              <a :href="project.github" target="_blank"
                class="btn-glow border border-zinc-700 hover:border-red-500 hover:text-red-400 text-zinc-400 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm cursor-pointer flex items-center gap-2">
                <span>GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div v-if="!showMore" class="flex justify-center pt-4">
            <button @click="showMore = true"
              class="flex items-center gap-2 text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 px-5 py-2.5 rounded-xl transition-all text-sm font-semibold cursor-pointer">
              Show more
              <span>↓</span>
            </button>
          </div>

          <template v-if="showMore">

            <div class="fade-up group border border-dashed border-zinc-800 hover:border-red-500/50 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-zinc-900/50">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-2xl">🧮</span>
                  <span class="text-xs font-semibold px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">React</span>
                  <span class="text-xs font-semibold px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">Tailwind CSS</span>
                  <span class="text-xs font-semibold px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Coming Soon</span>
                </div>
                <h3 class="text-xl font-black mb-2 text-zinc-500">ReactCalculator_Placeholder</h3>
                <p class="text-zinc-600 text-sm leading-relaxed max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="shrink-0 border border-zinc-800 text-zinc-700 font-semibold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 cursor-not-allowed">
                <span>Coming Soon</span>
              </div>
            </div>

            <div class="fade-up border border-zinc-800 rounded-2xl p-8 text-center">
              <p class="text-zinc-400 mb-4">Want to see more? Check out the rest of my work on GitHub.</p>
              <a href="https://github.com/jimmyqb" target="_blank"
                class="btn-glow inline-flex items-center gap-2 border border-zinc-700 hover:border-red-500 hover:text-red-400 text-zinc-400 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm cursor-pointer">
                → <img :src="githubIcon" class="w-5 h-5 brightness-0 invert opacity-60" />
              </a>
            </div>

            <div class="flex justify-center pt-4">
              <button @click="showMore = false"
                class="flex items-center gap-2 text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 px-5 py-2.5 rounded-xl transition-all text-sm font-semibold cursor-pointer">
                Show less
                <span class="inline-block rotate-180">↓</span>
              </button>
            </div>

          </template>

        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-32 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="w-2/3 mx-auto border-t border-zinc-800/50 mb-32"></div>
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p class="fade-up text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">About</p>
            <h2 class="fade-up text-4xl font-black mb-6">A bit about me</h2>
            <p class="fade-up text-zinc-400 leading-relaxed mb-4">
              I'm a frontend developer based in Mexico with a passion for building polished, user-centered web experiences. I care about the details — from smooth animations to clean code structure.
            </p>
            <p class="fade-up text-zinc-400 leading-relaxed">
              I'm always looking for opportunities where I can contribute, grow, and keep building things I'm proud of.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="skill in skills" :key="skill.name"
              class="fade-up border border-zinc-800 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-300 hover:border-red-500/50 hover:text-red-400 transition-all flex items-center gap-2">
              <i :class="skill.icon" class="text-lg"></i>
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-32 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="w-2/3 mx-auto border-t border-zinc-800/50 mb-32"></div>
        <div class="text-center">
          <p class="fade-up text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 class="fade-up text-4xl font-black mb-4">Let's work together 💪</h2>
          <p class="fade-up text-zinc-400 mb-10 max-w-md mx-auto">
            If you'd like to ask for a meeting or know something more about me...</p><br><br><p class="fade-up text-zinc-400 mb-10 max-w-md mx-auto"><strong>The message is free!</strong>
          </p>
          <div class="fade-up flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:quirozborquez.jimmy@gmail.com"
              class="btn-glow flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              <img :src="gmailIcon" class="w-5 h-5 brightness-0 invert" />
              Send me an Email
            </a>
            <a href="https://github.com/jimmyqb" target="_blank"
              class="btn-glow flex items-center gap-2 border border-zinc-700 hover:border-red-500 text-zinc-400 hover:text-red-400 font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              <img :src="githubIcon" class="w-5 h-5 brightness-0 invert opacity-60" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/jimmy-quiroz-b736933a2" target="_blank"
              class="btn-glow flex items-center border border-zinc-700 hover:border-red-500 text-zinc-400 hover:text-red-400 font-semibold p-3 rounded-xl transition-colors cursor-pointer">
              <img :src="linkedinIcon" class="w-5 h-5 brightness-0 invert opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-zinc-900 py-8 px-6 text-center text-zinc-600 text-sm">
      Designed & built with care, by Jimmy Quiroz — 2026 ☻
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from './composables/useScrollAnimation'
import LogoIcon from './components/LogoIcon.vue'
import githubIcon from './assets/github.svg'
import gmailIcon from './assets/gmail.svg'
import linkedinIcon from './assets/linkedin-logo.svg'

useScrollAnimation()

const showMore = ref(false)

const projects = [
  {
    title: 'Wander',
    icon: '🌎',
    description: 'A sleek travel landing page with smooth scroll animations, sticky navbar, and curated destination showcases. Built with vanilla HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/jimmyqb/wander-landing',
    demo: '/demos/wander/index.html',
  },
  {
    title: 'NestFind',
    icon: '🏠',
    description: 'A modern real estate app with property listings, advanced filters, interactive maps powered by Leaflet, and a polished detail view. Built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Leaflet'],
    github: 'https://github.com/jimmyqb/nestfind_react',
    demo: '/demos/nestfind/index.html',
  },
  {
    title: 'Vivid UI',
    icon: '⚡',
    description: 'A bold component library built with Vue and Tailwind CSS — featuring buttons, cards, badges, modals, and form inputs with a vibrant design system.',
    tech: ['Vue', 'Tailwind CSS'],
    github: 'https://github.com/jimmyqb/vivid-ui',
    demo: '/demos/vivid-ui/index.html',
  },
]

const skills = [
  { name: 'Vue', icon: 'devicon-vuejs-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'HTML & CSS', icon: 'devicon-html5-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Git & GitHub', icon: 'devicon-github-original' },
  { name: 'Responsive Design', icon: 'devicon-chrome-plain colored' },
  { name: 'UX Design', icon: 'devicon-figma-plain colored' },
]
</script>