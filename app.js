const hero= document.querySelector('.hero')
const slider= document.querySelector('.slider')
const hamburger= document.querySelector('.hamburger')
const logo= document.querySelector('#logo')
const headline= document.querySelector('.headline')

const tl = TimelineMax();

tl.fromTo(
    hero,
    1,
    { height:"0%" },
    { height:"80%", ease:Power2.easeInOut}
).fromTo(
        hero,
        1.2,
        {width:'100%'},
        {width:"80%", ease:Power2.easeInOut}
)
.fromTo(slider,1.2,{x: "-100%"},{x:"0%",ease:Power2.easeInOut},"-=1.2")
.from(logo,0.5,{opacity:0,x:30},{opacity:1, x:0},"-=0.5")
.from(hamburger,0.5,{opacity:0,x:30},{opacity:1, x:0},"-=0.5")
.from(headline,0.5,{opacity:0,x:30},{opacity:1, x:0},"-=0.5")
