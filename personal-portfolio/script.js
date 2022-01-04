const navbar = document.querySelector('.navbar')
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bars-wrapper')

const setProgressBarPercents = (reset = false) => {
  const progressBarPercents = [97, 89, 85, 87, 80, 70, 50]
  document.querySelectorAll('.progress-percent').forEach((el, i) => {
    const percent = !reset ? progressBarPercents[i] : 0
    el.style.width = `${percent}%`
    el.previousElementSibling.firstElementChild.textContent = percent
  })
}

window.addEventListener('scroll', () => {
  mainFn()
  if (window.pageYOffset == 0) {
    setProgressBarPercents(true)
  }
})

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach(link => {
        link.classList.remove('change')
      })
      navbarLinks[i].classList.add('change')
    }
  })

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll('.progress-percent').forEach((el, i) => {
      setProgressBarPercents()
    })
  }
}

mainFn()

window.addEventListener('resize', () => {
  window.location.reload()
})
