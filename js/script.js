const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')