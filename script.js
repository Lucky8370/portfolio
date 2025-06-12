var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
console.log(tabLinks);
console.log(tabContents);

function opentab(tabName) {
    for (var tablink of tabLinks) {
        tablink.classList.remove('active-link');
    }
    for (var tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

const sideMenu = document.getElementById('js-sideMenu')

function openMenu() {
    sideMenu.style.right = '0';

}
function closeMenu() {
    sideMenu.style.right = '-200px';
    
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxbey9ayOdCThwMicSNyxAKu8GwvKyLKCGEL8ZhfGk2NiYAv6kM977mnRZrQekKUR3z/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Send Successfully"
        setTimeout(()=> {
            msg.innerHTML = "";
        }, 4000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})