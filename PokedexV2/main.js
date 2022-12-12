import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };



let imgCount=0
let parent =document.getElementById('poke_card')
let parentText=document.getElementById('poke_info')
let bigParent =document.querySelector('.container')


let newImg=document.createElement('img')
newImg.src=pokeImg[poke[0].name.english]

let newP=document.createElement('p')
newP.textContent=poke[0].name.english

let newDiv=document.createElement('div')
newDiv.className='btn'

let button1=document.createElement('button')
button1.className='prev_btn'
button1.textContent='prev'

let button2=document.createElement('button')
button2.className='next_btn'
button2.textContent='next'

parent.appendChild(newImg)
parentText.appendChild(newP)
parent.insertBefore(newImg,parentText)
newDiv.appendChild(button1)
newDiv.appendChild(button2)
bigParent.appendChild(newDiv)

button1.addEventListener('click',()=>{
imgCount--
if(imgCount<0){
    imgCount=5
}
newP.textContent=poke[imgCount].name.english
newImg.src=pokeImg[poke[imgCount].name.english]

})

button2.addEventListener('click',()=>{
    imgCount++
    if(imgCount>5){
        imgCount=0
    }
newP.textContent=poke[imgCount].name.english
newImg.src=pokeImg[poke[imgCount].name.english]
})


//พี่ทำ
// let imgCount=0

// let divCard = document.getElementById('poke_card')
// let divInfo =document.getElementById('poke_info')
// let divCon=document.getElementsByClassName('container')


// let newImg = document.createElement('img')
// let newP=document.createElement('p')
// let divBt=document.createElement('div')
// let btn_prev=document.createElement('button')
// let btn_next=document.createElement('button')

// newImg.src=pokeImg[poke[0].name.english]
// newP.textContent=poke[0].name.japanese
// divBt.className='btn'
// btn_prev.className='prev_btn'
// btn_next.className='next_btn'
// btn_prev.textContent='prev'
// btn_next.textContent='next'

// divCard.appendChild(newImg)
// divCard.appendChild(newImg)
// divCard.insertBefore(newImg,divInfo)
// divInfo.append(newP)
// divCon[0].append(divBt)
// divBt.append(btn_prev)
// divBt.append(btn_next)

// btn_next.addEventListener('click',()=>{
//     imgCount++
//     if(imgCount>5){
//         imgCount=0
//     }
//    newP.textContent=poke[imgCount].name.japanese
//    newImg.src=pokeImg[poke[imgCount].name.english]
// })
// btn_prev.addEventListener('click',()=>{
//     imgCount--
//     if(imgCount<0){
//         imgCount=5
//     }
//    newP.textContent=poke[imgCount].name.japanese
//    newImg.src=pokeImg[poke[imgCount].name.english]
// })


