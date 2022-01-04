document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((target) => {
    target.classList.toggle('change')
  })
})

document.querySelectorAll('.wrapper').forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((target) => {
      target.classList.remove('change')
    })
  })
})

const videos = document.querySelectorAll('.video')

videos.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play()
  })
  video.addEventListener('mouseout', () => {
    video.pause()
  })
})
