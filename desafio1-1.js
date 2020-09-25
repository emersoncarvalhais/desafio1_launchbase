/*===============================================
calculo de imc
=================================================*/
const nome = "Emerson"
const peso = 69
const altura = 1.68

const imc = peso / (altura * altura)

if (imc > 30) {
    console.log(`Seu resultado é ${imc} e você está acima do peso ideal`)
} else {
    console.log(`Seu resultado é ${imc} e você está dentro do peso ideal`)
}

if (!(imc > 30) || imc <= 29.9) {
    console.log(`${nome}Seu resultado é ${imc} e você está dentro do peso ideal`)
} else {
    console.log(`${nome}Seu resultado é ${imc} e você está acima do peso ideal`)
}

/*=====================================================================
CALCULO APOSENTAORIA (FICTICIO)
=======================================================================*/

const nome = "Maria"
const idade = 40
const genero = "F"
const contribuicao = 29

const apos = idade + contribuicao

if (apos >= 85){
    console.log("Você pode se aposentar")
}else {
    console.log("Você não pode ser aposentar, espere mais uns anos")
}

const homemAposentar = genero == "M" && contribuicao >= 35 && apos >= 90
const mulherAposentar = genero == "F" && contribuicao >= 30 && apos >= 85

if (homemAposentar || mulherAposentar){
    console.log(`${nome}, você pode se aposentar`)
}else{
    console.log(`${nome}, você não pode se aposentar`)
}