import { onMounted, watch } from 'vue'

export function useScrollAnimation() {
  const observe = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.05 })

    document.querySelectorAll('.fade-up:not(.visible)').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`
      observer.observe(el)
    })
  }

  onMounted(() => {
    observe()

    // Re-observe when DOM changes
    const mutationObserver = new MutationObserver(() => {
      observe()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
}