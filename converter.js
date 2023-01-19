// temp * 1.8 + 32   F to C
// temp - 32 * 0,5556

const input1 = document.querySelector(".input1")
const output1 = document.querySelector(".output1")
const cToF = document.querySelector(".ctof")
const fToC = document.querySelector(".ftoc")



function tempConverter() {
    if (cToF.checked) {
        output1.value = (parseFloat(input1.value) * 1.8 + 32) + " ℃"
    }
    if (fToC.checked) {
        output1.value = ((parseFloat(input1.value) - 32) * 0.5556) + " ℉"
    }
}



const input2 = document.querySelector(".input2")
const output2 = document.querySelector(".output2")
const lToG = document.querySelector(".ltog")
const gToL = document.querySelector(".gtol")

function gasConverter() {
    if (lToG.checked) {
        output2.value = parseFloat(input2.value) * 0.264172
    }
    if (gToL.checked) {
        output2.value = parseFloat(input2.value) * 3.7854
    }
}

const input3 = document.querySelector(".input3")
const output3 = document.querySelector(".output3")
const kmToMi = document.querySelector(".kmtomi")
const miToKm = document.querySelector(".mitokm")

function distansConverter() {
    if (kmToMi.checked) {
        output3.value = parseFloat(input3.value) * 0.621371192
    }
    if (miToKm.checked) {
        output3.value = parseFloat(input3.value) * 1.609344
    }
}