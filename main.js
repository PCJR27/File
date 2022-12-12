import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };


let parent =document.getElementById('pokedex')

for(let i=0;i<150;i++){
let newDiv=document.createElement('div')
newDiv.className='pokeCard'

let newP=document.createElement('p')
newP.textContent=poke[i].name.english
let newImg=document.createElement('img')
newImg.className='pokeImg'
newImg.src=pokeImg[poke[i].name.english]
// newImg.setAttributeNode('src')
// let newDivCall=document.getElementsByClassName('pokeCard')
// console.log(newDivCall)
newDiv.appendChild(newImg)
newDiv.appendChild(newP)
parent.appendChild(newDiv)
}
// let newDiv=document.createElement('div')
// newDiv.className='pokeCard'

// let newP=document.createElement('p')
// newP.textContent=poke[0].name.english
// let newImg=document.createElement('img')
// newImg.className='pokeImg'
// newImg.src=pokeImg[poke[0].name.english]
// newImg.setAttributeNode('src')
// let newDivCall=document.getElementsByClassName('pokeCard')
// console.log(newDivCall)
// newDiv.appendChild(newImg)
// newDiv.appendChild(newP)
// parent.appendChild(newDiv)

// console.log(poke[0].name.japanese)
// console.log(pokeImg[poke[0].name.english])

//พี่ทำ
// let divPoke=document.getElementById("pokedex")
// let newDiv = document.createElement("div")
// newDiv.className='pokecard'
// divPoke.appendChild(newDiv)

//สร้าง img
// let newImg=document.createElement('img')
// newImg.className='pokeImg'
//ละเอียด
// let newSrc=document.createAttribute('src')
// newSrc.value=pokeImg[poke[0].name.english]
// newImg.setAttribute('src',pokeImg[poke[0].name.english])
//setAttribute ต้องใส่สองค่าคือชื่อattributeและvalue
//setAttributeNode ใส่แต่ชื่อได้
//ลัด
// newImg.src=pokeImg[poke[0].name.english]

// let newPe=document.createElement("p")
// newPe.innerText=poke[0].name.japanese
// newDiv.appendChild(newImg)
// newDiv.appendChild(newPe)
// divPoke.appendChild(newDiv)

//เราทำเอง
// const newDiv=document.createElement("div")
// newDiv.setAttribute('class','pokeCard')
// const addDiv=document.getElementById("pokedex")
// addDiv.appendChild(newDiv)
// const newImg=document.createElement("img")
// newImg.setAttribute('class','pokeImg')
// newImg.setAttribute('src')

// const newPe=document.createElement("p")
// newPe.innerText('porcha')


//get ตั้งแต่ html 

// let temp=document.querySelector('div').children
// console.log(temp)
// //copy
// let divPokedex = document.getElementById('pokedex')



// for (let i = 0; i < 150; i++) {
//     let newDiv = document.createElement('div')
//     newDiv.className = 'pokeCard'
//     let newImgElement = document.createElement('img')
//     newImgElement.className = 'pokeImg'
//     newImgElement.src = pokeImg[poke[i].name.english]
//     let pElement = document.createElement('p')
//     pElement.innerText = poke[i].name.english

//     //add to pokeCard
//     newDiv.append(newImgElement)
//     newDiv.append(pElement)
//     //add to pokeDex
//     divPokedex.append(newDiv)

// }
