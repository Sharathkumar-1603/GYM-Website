window.oncontextmenu = function(){
  return true;
}



let openHam = document.querySelector('#open');
let closeHam = document.querySelector('#close');
let navigationItems = document.querySelector('nav');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));


const scriptURL = 'https://script.google.com/macros/s/AKfycby07KlnpMuMTBxY_mOHcU5PzTp0oz11dSsCoa_p8bFzO9i6acuGQETLigngDlf5uG6XWg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML=("Thanks for submitting") ;
      setTimeout(function(){
          msg.innerHTML = ""
      },6000)
      form.reset()
    
    })
    .catch(error => console.error('Error!', error.message))
})
