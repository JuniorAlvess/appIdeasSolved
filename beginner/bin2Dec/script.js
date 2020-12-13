const input = document.querySelector("input[type=number]")

const output = document.getElementById("output")
const convertBtn = document.querySelector('button')
const iconWarning = document.querySelector('#iconWarning')
const warningMessege = document.querySelector('#warningMessege')
input.focus()

iconWarning.onmousemove = () => {
    iconWarning.style.color = "#f00"
    warningMessege.style.opacity = "100%"
}

iconWarning.onmouseleave = () => {
    iconWarning.style.color = "#ccc"
    warningMessege.style.opacity = "0%"
}

convertBtn.onclick = () => {
    let inputValue = input.value

    if (inputValue.length > 8) {
        setTimeout(() => {
            iconWarning.style.color = "#f00"
            warningMessege.style.opacity = "100%"
            warningMessege.style.transition = 'all 1s'
        })

        setTimeout(() => {
            warningMessege.style.opacity = '0%'
            warningMessege.style.transition = 'all 1s'
        }, 4000)

        input.value = ""
        output.innerHTML = ""
    } else {
        iconWarning.style.color = "#ccc"
        numberConverted()
    }
}

function numberConverted() {
    let binToDec = parseInt(input.value, 2)
    const messageErr = `Atenção: ${input.value} não é um valor binário. Por favor, insira apenas números binários (0, 1).`

    binToDec ? output.innerHTML = `Valor convertido : ${binToDec}` : output.innerHTML = messageErr

    input.value = ""
}