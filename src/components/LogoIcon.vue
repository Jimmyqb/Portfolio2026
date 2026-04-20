<template>
  <a href="#hero" @click.prevent="scrollToTop"
    class="logo-icon cursor-pointer group relative">
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.2" />
      <circle cx="20" cy="20" r="7" fill="currentColor" opacity="0.9" />
      <circle class="moon" cx="20" cy="4" r="3" fill="currentColor" />
    </svg>
    <!-- Custom tooltip -->
    <span class="absolute left-12 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-lg whitespace-nowrap
      opacity-0 group-hover:opacity-100 pointer-events-none
      transition-opacity duration-300 delay-1500">
      Back to top
    </span>
  </a>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.logo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #a1a1aa;
  transition: color 0.3s, filter 0.3s;
}

.logo-icon:hover {
  color: #ef4444;
  filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.6));
}

.moon {
  transform-origin: 20px 20px;
  animation: orbit 3s linear infinite;
}

@keyframes orbit {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

span {
  transition-property: opacity;
  transition-duration: 300ms;
  transition-delay: 1500ms;
}

.group:not(:hover) span {
  transition-delay: 0ms;
}
</style>