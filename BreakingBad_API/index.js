// const container = document.getElementsByClassName('container');
// const search = document.getElementById('search');
// const data = [];
// search.addEventListener('keyup', (e) => {
//   let inputFilter = e.target.value.toUpperCase();
//   let cardContainer = document.getElementsByClassName('container')[0];
//   let cards = cardContainer.querySelectorAll('.card');
//   cards.forEach((card) => {
//     let cardInfo = card.getElementsByClassName('back')[0];
//     let name = cardInfo.getElementsByTagName('h2').name.innerText;
//     let compare = name.startsWith(inputFilter);
//     card.style.display = compare ? 'block' : 'none';
//   });
// });

// async function fetchData(url) {
//   const response = await fetch(url);
//   const result = await response.json();
//   UpdatingDom(result);
//   data.push(result);
// }

// const characters = fetchData('https://www.breakingbadapi.com/api/characters');

// function UpdatingDom(characters) {
//   characters.map((character) => {
//     const { img, name, birthday, nickname, status, occupation } = character;
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `<div class="front"><img src="${img}"/></div>
//         <div class="back">
//         <h2 id="name"> ${name}</h2>
//         <small>(${nickname})</small>
//         <h3>DOB: ${birthday}</h3>
//        <h3 class=${
//          status == 'Alive' ? 'sta-g' : 'sta-r'
//        }>STATUS: ${status}</h3>
//        <hr>
//        <p> ${occupation}</p>
//         </div>`;
//     container[0].appendChild(card);
//   });
// }
