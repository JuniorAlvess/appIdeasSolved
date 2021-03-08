function sendValuesToCard(condition) {
    const getBorderTopLeftValue = document.getElementById('borderTop').value
    const getBorderTopRightValue = document.getElementById('borderRight').value
    const getBorderBottomLeftValue = document.getElementById('borderLeft').value
    const getBorderBottomRightValue = document.getElementById('borderBottom').value
    const getBorderColorValue = document.getElementById('borderColor').value
    const getBackgroundColor = document.getElementById('backgroundColor').value
    const applyValuesInTheCard = document.getElementById('card').style

    // insert values in viewCode
    document.getElementById('backColor').innerHTML = getBackgroundColor
    document.getElementById('bColor').innerHTML = getBorderColorValue
    document.getElementById('topLeft').innerHTML = `${getBorderTopLeftValue}px`
    document.getElementById('topRight').innerHTML = `${getBorderTopRightValue}px`
    document.getElementById('bottomLeft').innerHTML = `${getBorderBottomLeftValue}px`
    document.getElementById('bottomRight').innerHTML = `${getBorderBottomRightValue}px`

    switch (condition) {
        case 'borderTopLeftRadius':
            applyValuesInTheCard.borderTopLeftRadius = `${getBorderTopLeftValue}px`
            break;
        case 'borderTopRightRadius':
            applyValuesInTheCard.borderTopRightRadius = `${getBorderTopRightValue}px`
            break;
        case 'borderBottomLeftRadius':
            applyValuesInTheCard.borderBottomLeftRadius = `${getBorderBottomLeftValue}px`
            break;
        case 'borderBottomRightRadius':
            applyValuesInTheCard.borderBottomRightRadius = `${getBorderBottomRightValue}px`
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

    // copyText.setSelectionRange(0, 99999)
    copyText.
        document.execCommand("copy");

    alert("Copied the text: " + copyText.value)
}