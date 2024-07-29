import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const imba=document.getElementById("imba")
imba.addEventListener("click", cayf)
function cayf(){
  while(true){
    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        width:"100px",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    document.getElementById
  }
}
// document.addEventListener("mousemove", (event)=>{
//   Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     destination: "https://github.com/apvarun/toastify-js",
//     newWindow: true,
//     close: true,
//     offset: {
//       x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
//       y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
//     },
//     gravity: "top", // `top` or `bottom`
//     position: "left", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//       width:"100px",
//     },
//     onClick: function(){} // Callback after click
//   }).showToast();
// })


const GAME_STATUS_ELEMENT_ID = 'game-status';
const KEY_ELEMENT_ID = 'key';
const NEW_GAME_BUTTON_ID = 'new-game';

const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let currentKeyIndex = 0;

const gameStatusElement = document.getElementById(GAME_STATUS_ELEMENT_ID);
const keyElement = document.getElementById(KEY_ELEMENT_ID);
const newGameButton = document.getElementById(NEW_GAME_BUTTON_ID);

keyElement.textContent = keys[currentKeyIndex];

document.addEventListener('keydown', (event) => {
  if (event.key === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex >= keys.length) {
      currentKeyIndex = 0;
    }
    keyElement.textContent = keys[currentKeyIndex];
    gameStatusElement.textContent = 'Вірно!';
  } else {
    gameStatusElement.textContent = 'Помилка!';
    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    
    
  }
});


document.addEventListener('keypress', (event) => {
  event.preventDefault();
});

newGameButton.addEventListener('click', () => {
  currentKeyIndex = 0;
  keyElement.textContent = keys[currentKeyIndex];
  gameStatusElement.textContent = '';
  Toastify({
    text: "Нова гра почалась",
    duration: 5000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    offset: {
      x: 300, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
});