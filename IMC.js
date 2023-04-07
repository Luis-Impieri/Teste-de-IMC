let peso = 80
let altura = 1.82
let IMC = peso / (altura * altura)

if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if (IMC >=18.5 & IMC < 25) {
    console.log('Peso normal');
} else if (IMC >= 25 & IMC < 30 ) {
    console.log('Sobrepeso');
} else if (IMC >= 30 & IMC < 40) {
    console.log('Obesidade');
}else {
    console.log('Obesidade morbida');
}