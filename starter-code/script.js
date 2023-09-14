const btn = document.querySelector('.icon-hamburger')
const nav = document.querySelector(' header nav')
const main = document.querySelector('main')

btn.addEventListener('click', () => {
  btn.classList.toggle('active')
  nav.classList.toggle('active')
  main.classList.toggle('active')
})
