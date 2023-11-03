const shareIconEl = document.querySelector(".share-icon-box")
const shareIconMobileEl = document.querySelector(".share-icon-box-mobile")
const shareMenuEl = document.querySelector(".share-menu")
const shareMenuMobileEl = document.querySelector(".share-menu-mobile")

const mediaQueryDesktop = window.matchMedia("(max-width: 40em)")
const mediaQueryMobile = window.matchMedia("(min-width: 40em)")

// Register event listener
mediaQueryDesktop.addListener(handleDesktopChange)
mediaQueryMobile.addListener(handleMobileChange)
function handleDesktopChange(e) {
  if (e.matches) {
    shareMenuMobileEl.classList.remove("open")
    shareMenuEl.classList.remove("open")
  }
}

function handleMobileChange(e) {
  if (e.matches) {
    shareMenuMobileEl.classList.remove("open")
    shareMenuEl.classList.remove("open")
  }
}

// Initial check
handleDesktopChange(mediaQueryDesktop)
handleMobileChange(mediaQueryMobile)

shareIconEl.addEventListener("click", () => {
  shareMenuEl.classList.toggle("open")
})

shareIconMobileEl.addEventListener("click", () => {
  shareMenuMobileEl.classList.toggle("open")
})
