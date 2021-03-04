// function handleBorder() {
//     const getBorderTopLeftValue = document.getElementById('borderTop').value
//     const getBorderTopRightValue = document.getElementById('borderRight').value
//     const getBorderBottomLeftValue = document.getElementById('borderLeft').value
//     const getBorderBottomRightValue = document.getElementById('borderBottom').value
//     const getBorderColorValue = document.getElementById('borderColor').value
//     const getBackgroundColor = document.getElementById('backgroundColor').value
//     const setValuesToCard = document.getElementById('card').style

//     setValuesToCard.borderTopLeftRadius = `${getBorderTopLeftValue}px`
//     setValuesToCard.borderTopRightRadius = `${getBorderTopRightValue}px`
//     setValuesToCard.borderBottomLeftRadius = `${getBorderBottomLeftValue}px`
//     setValuesToCard.borderBottomRightRadius = `${getBorderBottomRightValue}px`
//     setValuesToCard.borderColor = getBorderColorValue
//     setValuesToCard.backgroundColor = getBackgroundColor

//     document.getElementById('backColor').innerHTML = getBackgroundColor
//     document.getElementById('bColor').innerHTML = getBorderColorValue
//     document.getElementById('topLeft').innerHTML = `${getBorderTopLeftValue}px`
//     document.getElementById('topRight').innerHTML = `${getBorderTopRightValue}px`
//     document.getElementById('bottomLeft').innerHTML = `${getBorderBottomLeftValue}px`
//     document.getElementById('bottomRight').innerHTML = `${getBorderBottomRightValue}px`
// }

const getBorderTopLeftValue = document.getElementById('borderTop').value
const getBorderTopRightValue = document.getElementById('borderRight').value
const getBorderBottomLeftValue = document.getElementById('borderLeft').value
const getBorderBottomRightValue = document.getElementById('borderBottom').value
const getBorderColorValue = document.getElementById('borderColor').value
const getBackgroundColor = document.getElementById('backgroundColor').value
const setValuesToCard = document.getElementById('card').style

console.log(getBorderTopRightValue)


setValuesToCard.borderTopLeftRadius = `${getBorderTopLeftValue}px`
setValuesToCard.borderTopRightRadius = `${getBorderTopRightValue}px`
setValuesToCard.borderBottomLeftRadius = `${getBorderBottomLeftValue}px`
setValuesToCard.borderBottomRightRadius = `${getBorderBottomRightValue}px`
setValuesToCard.borderColor = getBorderColorValue
setValuesToCard.backgroundColor = getBackgroundColor

document.getElementById('testeteste').innerHTML = oninput = getBorderTopLeftValue
// let testetestest = ""
// console.log(testetestest.value=oninput = getBorderTopLeftValue)
document.getElementById('backColor').innerHTML = getBackgroundColor
document.getElementById('bColor').innerHTML = getBorderColorValue
document.getElementById('topLeft').innerHTML = `${getBorderTopLeftValue}px`
document.getElementById('topRight').innerHTML = `${getBorderTopRightValue}px`
document.getElementById('bottomLeft').innerHTML = `${getBorderBottomLeftValue}px`
document.getElementById('bottomRight').innerHTML = `${getBorderBottomRightValue}px`

function viewCode() {
    const viewCodeStyle = document.getElementById('viewCode').style
    const buttonViewCode = document.getElementById('buttonViewCode')

        switch (buttonViewCode.innerHTML) {
            case "Ver Código":
                viewCodeStyle.width = "50%"
                buttonViewCode.innerHTML = "fechar Código"
                break;
            case "fechar Código":
                viewCodeStyle.width = "0%"
                buttonViewCode.innerHTML = "Ver Código"
                break;
            default:
                console.log(buttonViewCode.innerHTML)
        }
}

function copyCode() {
    // let copyCode= document.querySelector('code').innerText
    // let copyCode = `borderTop: ${borderTop}`
    // let copyCode = {
    //     "borderTop": borderTop
    // }

    const borderTop = document.getElementById('borderTop').value

    let data = [{
        "botderTop": borderTop,
    }]

    data.select()
    // copyCode.setSelectionRange(0, 99999)

    document.execCommand("copy")

    alert(data)   
}