//
const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultadoP =document.getElementById('resultado');

const btnOnclick = () => {

    const resultadoSuma =parseInt(input1.value) + parseInt(input2.value);
    // resultadoP.append(resultadoSuma);
    resultadoP.innerText = "Resultado suma: "  + resultadoSuma;
}




