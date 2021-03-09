function sendValuesToCard(condition) {
    const getBorderTopLeftValue = document.getElementById('borderTop').value
    const getBorderTopRightValue = document.getElementById('borderRight').value
    const getBorderBottomLeftValue = document.getElementById('borderLeft').value
    const getBorderBottomRightValue = document.getElementById('borderBottom').value
    // const getBorderColorValue = document.getElementById('borderColor').value
    // const getBackgroundColor = document.getElementById('backgroundColor').value
    const applyValuesInTheCard = document.getElementById('card').style

    // insert values in viewCode
    // document.getElementById('backColor').innerHTML = getBackgroundColor
    // document.getElementById('bColor').innerHTML = getBorderColorValue
    document.getElementById('topLeft').innerHTML = `${getBorderTopLeftValue}%`
    document.getElementById('topRight').innerHTML = `${getBorderTopRightValue}%`
    document.getElementById('bottomLeft').innerHTML = `${getBorderBottomLeftValue}%`
    document.getElementById('bottomRight').innerHTML = `${getBorderBottomRightValue}%`

    switch (condition) {
        case 'borderTopLeftHorizontal':
            applyValuesInTheCard.borderTopLeftRadius = `${getBorderTopLeftValue}%`
            break;
        case 'borderTopRightHorizontal':
            applyValuesInTheCard.borderTopRightRadius = `${getBorderTopRightValue}%`
            break;
        case 'borderBottomLeftHorizontal':
            applyValuesInTheCard.borderBottomLeftRadius = `${getBorderBottomLeftValue}%`
            break;
        case 'borderBottomRightHorizontal':
            applyValuesInTheCard.borderBottomRightRadius = `${getBorderBottomRightValue}%`
            break;
        default:
            console.log("it dosen't work")
    }
}

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
    let copyText = document.getElementById('borderRight')

    copyText.select();

    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    alert("Copied the text: " + copyText.value)
}