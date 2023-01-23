// temp * 1.8 + 32   F to C
// temp - 32 * 0,5556

const input1 = document.querySelector(".input1")
const output1 = document.querySelector(".output1")
const cToF = document.querySelector(".ctof")
const fToC = document.querySelector(".ftoc")



function tempConverter() {
    if (cToF.checked) {
        output1.value = (parseFloat(input1.value) * 1.8 + 32).toFixed(1) + " ℉"
    }
    if (fToC.checked) {
        output1.value = ((parseFloat(input1.value) - 32) * 0.5556).toFixed(1) + " ℃"
    }
    if (input1.value == "") {
        output1.value = "Enter a value above to see the result"
    }
}



const input2 = document.querySelector(".input2")
const output2 = document.querySelector(".output2")
const lToG = document.querySelector(".ltog")
const gToL = document.querySelector(".gtol")

function quanConverter() {
    if (isNegativeNumber(input2.value)) {
        output2.value = "Invalid input"
        return
    }
    if (lToG.checked) {
        output2.value = (parseFloat(input2.value) * 0.264172).toFixed(1) + " Gallons"
    }
    if (gToL.checked) {
        output2.value = (parseFloat(input2.value) * 3.7854).toFixed(1)  + " Liters"
    }
    if (input2.value == "") {
        output2.value = "Enter a value above to see the result"
    }
}

const input3 = document.querySelector(".input3")
const output3 = document.querySelector(".output3")
const kmToMi = document.querySelector(".kmtomi")
const miToKm = document.querySelector(".mitokm")

function distansConverter() {
    if (isNegativeNumber(input3.value)) {
        output3.value = "Invalid input"
        return
    }
    if (kmToMi.checked) {
        output3.value = (parseFloat(input3.value) * 0.621371192).toFixed(1) + " Miles"
    }
    if (miToKm.checked) {
        output3.value = (parseFloat(input3.value) * 1.609344).toFixed(1) + " KM"
    }
    if (input3.value == "") {
        output3.value = "Enter a value above to see the result"
    }
}


function change1() {
    if (cToF.checked == true) {
        fToC.checked = true
    }
    else {
        cToF.checked = true
    }
    tempConverter()
}

function change2() {
    if (lToG.checked == true) {
        gToL.checked = true
    }
    else {
        lToG.checked = true
    }
    quanConverter()
}

function change3() {
    if (kmToMi.checked == true) {
        miToKm.checked = true
    }
    else {
        kmToMi.checked = true
    }
    distansConverter()
}

function isNegativeNumber(num) {
    if (parseFloat(num) < 0) {
     return true   
    } else {
        return false
    }
}

