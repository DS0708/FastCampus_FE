// Query String
// 주소?속성=값&속성=값&속성=값

import axios from 'axios'

export function fetchMovies(){
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') //프로젝트에서는 https 프로토콜을 사용해야함
  .then((res)=>{
    console.log(res)

    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  }) 
}