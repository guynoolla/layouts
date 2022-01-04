const dropdownItems = document.querySelectorAll('.dropdown-hover')

if (window.innerWidth < 1000) {
  const url = window.location.href
  const filename = url.substring(url.lastIndexOf('/')+1);

  if (filename == 'index.html') {
    const menuIcon = document.querySelector('.menu')
    const navbar = document.querySelector('.navbar')

    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('change')

      if (!navbar.classList.contains('change')) {
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
          dropdown.style.left = '-20rem';
        })
      }
    })

    document.querySelectorAll('.show-dropdown').forEach(link => {
      link.addEventListener('click', () => {
        link.nextElementSibling.style.left = '0'
      })
    })

    document.querySelectorAll('.dropdown-heading-link')
      .forEach(headingLink => {
        headingLink.addEventListener('click', () => {
          headingLink.parentElement.parentElement.style.left = '-20rem'
        })
    })
  }

} else {
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener('mouseover', () => {
      dropdownItem.lastElementChild.style
        .cssText = 'opacity: 1; visibility: visible'
      document.querySelector('.navbar-wrapper').style
        .background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'

      dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
    })
    dropdownItem.addEventListener('mouseout', () => {
      dropdownItem.lastElementChild.style
        .cssText = 'opacity: 0; visibility: hidden'
      document.querySelector('.navbar-wrapper').style
        .background = 'none'

      dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
    })
  })
}

document.querySelectorAll('.logo').forEach((item) => {
  item.addEventListener('click', (e) => {
    window.location.href = './index.html'
  })
})

document.querySelectorAll('.login').forEach((item) => {
  item.addEventListener('click', (e) => {
    window.location.href = './login.html'
  })
})

document.querySelectorAll('.signup').forEach((item) => {
  item.addEventListener('click', (e) => {
    window.location.href = './signup.html'
  })
})

window.addEventListener('resize', () => {
  window.location.reload()
})
