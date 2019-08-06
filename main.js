//alert('Herzlich willkommen auf meiner Homepage');
console.log('Michał');
console.log('32');
const name = 'Michał';
const age = 32;
console.log(`Mein Name ist ${name} und ich bin ${age} jare alt`);

const navigationSwitcher = document.querySelector('.navigation__switcher--js')
navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});