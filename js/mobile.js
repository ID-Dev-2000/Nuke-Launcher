const mobileLeftClick = document.getElementById('leftButton')
const mobileRightClick = document.getElementById('rightButton')
const mobileDownClick = document.getElementById('downButton')
const mobileUpClick = document.getElementById('upButton')

let mediaQuery = window.matchMedia('(max-width: 1080px')

if (mediaQuery.matches) {
    mobileRightClick.addEventListener('click', function() {
    if (moveHorizontal < targetParent.offsetWidth) {
    moveHorizontal += 5
    moveHorizontal.toString()
    aimTarget.style.left = `${moveHorizontal}px`
    xCoord.innerHTML = moveHorizontal
    }
})

mobileLeftClick.addEventListener('click', function() {
    if (moveHorizontal > 0) {
    moveHorizontal -= 5
    moveHorizontal.toString()
    aimTarget.style.left = `${moveHorizontal}px`
    xCoord.innerHTML = moveHorizontal
    }
})

mobileUpClick.addEventListener('click', function() {
    if (moveVertical > 0) {
    moveVertical -= 5
    moveVertical.toString()
    aimTarget.style.top = `${moveVertical}px`
    yCoord.innerHTML = moveVertical
    }
})

mobileDownClick.addEventListener('click', function() {
    if (moveVertical < targetParent.offsetHeight) {
    moveVertical += 5
    moveVertical.toString()
    aimTarget.style.top = `${moveVertical}px`
    yCoord.innerHTML = moveVertical
    }
})
}
