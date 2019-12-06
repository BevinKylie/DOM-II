// Your code goes here
const body = document.querySelector('body');
body.addEventListener('keypress', (e) => {
    e.target.style.backgroundColor ="lightgray"
})

const mapImg = document.querySelector('[src="img/adventure.jpg"]')
mapImg.addEventListener('mouseenter', (e) => {
    e.target.style.transform = ("rotate(30deg) transLateX(50px)")
    // e.target.style.transform = ("translateX(50px)")
})
mapImg.addEventListener('mouseleave', (e) => {
    e.target.style.transform = ("rotate(0deg) transLateX(0px)")
    // e.target.style.transform = ("translateX(50px)")
})

const sound = document.getElementById('busSound');
const busPic = document.querySelector('[src="img/fun-bus.jpg"]')

busPic.addEventListener('dblclick', (e) => {
    sound.play()
})
