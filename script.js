const aimTarget = document.getElementById('aimTarget')
const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')
const downButton = document.getElementById('downButton')
const upButton = document.getElementById('upButton')
const xCoord = document.getElementById('xCoord')
const yCoord = document.getElementById('yCoord')
const launchButton = document.getElementById('launchButton')
const targetParent = document.getElementById('targetParent')
const clearButton = document.getElementById('clearButton')

let moveHorizontal = 0
let moveVertical = 0


rightButton.addEventListener('mousedown', function() {
    let moveRight = setInterval(function() {
    if(moveHorizontal < 970) {
        moveHorizontal += 5
        moveHorizontal.toString()
        aimTarget.style.left = `${moveHorizontal}px`
        xCoord.innerHTML = moveHorizontal
    }}, 50)
    rightButton.addEventListener('mouseleave', function() {
        clearInterval(moveRight)
    })
    rightButton.addEventListener('mouseup', function() {
        clearInterval(moveRight)
    })
})

leftButton.addEventListener('mousedown', function() {
    let moveLeft = setInterval(function() {
    if(moveHorizontal > 0) {
        moveHorizontal -= 5
        moveHorizontal.toString()
        aimTarget.style.left = `${moveHorizontal}px`
        xCoord.innerHTML = moveHorizontal
    }}, 50)
    leftButton.addEventListener('mouseleave', function() {
        clearInterval(moveLeft)
    })
    leftButton.addEventListener('mouseup', function() {
        clearInterval(moveLeft)
    })
})

upButton.addEventListener('mousedown', function() {
    let moveUp = setInterval(function() {
    if(moveVertical > 0) {
        moveVertical -= 5
        moveVertical.toString()
        aimTarget.style.top = `${moveVertical}px`
        yCoord.innerHTML = moveVertical
    }}, 50)
    upButton.addEventListener('mouseleave', function() {
        clearInterval(moveUp)
    })
    upButton.addEventListener('mouseup', function() {
        clearInterval(moveUp)
    })
})

downButton.addEventListener('mousedown', function() {
    let moveDown = setInterval(function() {
    if(moveVertical < 470) {
        moveVertical += 5
        moveVertical.toString()
        aimTarget.style.top = `${moveVertical}px`
        yCoord.innerHTML = moveVertical
    }}, 50)
    downButton.addEventListener('mouseleave', function() {
        clearInterval(moveDown)
    })
    downButton.addEventListener('mouseup', function() {
        clearInterval(moveDown)
    })
})

launchButton.addEventListener('click', function() {
    let nukeDrop = document.createElement('div')
    nukeDrop.style.left = (aimTarget.style.left)
    nukeDrop.style.top = (aimTarget.style.top)
    nukeDrop.style.width = '10px'
    nukeDrop.style.height = '10px'
    nukeDrop.style.backgroundColor = 'Red'
    nukeDrop.style.borderRadius = '30px'
    nukeDrop.style.border = '10px solid orange'
    nukeDrop.style.position = 'absolute'
    nukeDrop.style.opacity = '0.8'
    nukeDrop.id = 'droppedNuke'
    targetParent.appendChild(nukeDrop)

    clearButton.addEventListener('click', function() {
        targetParent.removeChild(nukeDrop) // replace with blank?
    })
})
