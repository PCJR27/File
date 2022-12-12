import {CookieUtil} from'./lib/cookieUtil.js';

// document.cookie='memberType=premium'
// document.cookie='color-tone=pastel;max-age=300'
// document.cookie=`productId=1001;expires=${new Date("December 17,2022 17:00:00")}`
// alert(document.cookie)

// const cookieName=encodeURIComponent('Food Shop')
// const cookieValue=encodeURIComponent('S & P')
// document.cookie=`${cookieName}=${cookieValue}`
// CookieUtil.set('hobby','reading')
// CookieUtil.set('color','#1234')
// alert(CookieUtil.get('color'))
// CookieUtil.unset('hobby')

//Browser Session Storage new tab กับปิด browser หาย
// let visit = sessionStorage.getItem('visit')
// if (visit === null) {
// sessionStorage.setItem('visit', 1)
// } else {
// sessionStorage.setItem('visit', ++visit)
// }
// alert(`visit: ${sessionStorage.getItem('visit')}`)


//local Storage
// let visit = localStorage.getItem('visit')
// if (visit === null) {
// localStorage.setItem('visit', 1)
// } else {
// localStorage.setItem('visit', ++visit)
// }
// window.addEventListener('beforeunload',()=> {
//     localStorage.setItem('visit',999)
// })
// alert(`visit: ${localStorage.getItem('visit')}`)
localStorage.setItem('like',100)
// localStorage.removeItem('visit')
// localStorage.clear()

window.addEventListener('load',()=>alert(localStorage.getItem('like')))
window.addEventListener('beforeunload',()=>{localStorage.setItem('visit',999)})
window.addEventListener('load',()=>alert(localStorage.getItem('visit')))