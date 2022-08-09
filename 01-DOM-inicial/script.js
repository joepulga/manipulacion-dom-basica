//
const h1 = document.querySelector('h1'); 
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

// console.log(input.value )

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerText = 'Si <br> soy';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');
h1.classList.add('rojo')
h1.classList.remove('verde')
// h1.classList.contains('verde')
// h1.classList.toggle('verde')

input.value = 'joe'

const img = document.createElement('img')
img.setAttribute('src','images/0600371ef7bedeffcedb3175065ecdd4.jpg');
console.log(img);

pid.append(img);

pid.childNodes[0].textContent = '';

