// ── Scroll Animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  })
}, { threshold: 0.65 })

document.querySelectorAll('.feature-card, .dest-card, .cta-content, .features-header, .destinations-header')
  .forEach(el => {
    el.classList.add('fade-up')
    observer.observe(el)
  })

// ── Navbar scroll effect ──
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor = window.scrollY > 50
    ? 'rgba(201, 169, 110, 0.15)'
    : 'rgba(255,255,255,0.06)'
})

// ── Staggered cards ──
document.querySelectorAll('.feature-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`
})
document.querySelectorAll('.dest-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.15}s`
})

// ── Hamburger menu ──
const hamBtn     = document.getElementById('hamBtn')
const mobileMenu = document.getElementById('mobileMenu')

function closeMenu() {
  hamBtn.classList.remove('open')
  mobileMenu.classList.remove('open')
  hamBtn.setAttribute('aria-expanded', 'false')
}

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open')
  hamBtn.classList.toggle('open', isOpen)
  hamBtn.setAttribute('aria-expanded', isOpen)
}

hamBtn.addEventListener('click', e => { e.stopPropagation(); toggleMenu() })
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu))
document.addEventListener('click', e => {
  if (!mobileMenu.contains(e.target) && !hamBtn.contains(e.target)) closeMenu()
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu()
})

// ── Scroll suave lento ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const target = document.querySelector(link.getAttribute('href'))
    if (!target) return
    const start = window.scrollY
    const end = target.getBoundingClientRect().top + window.scrollY
    const duration = 1200
    let startTime = null

    function ease(t) {
      return t < 0.5 ? 2*t*t : -1+(4-2*t)*t
    }
    function step(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      window.scrollTo(0, start + (end - start) * ease(progress))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
})