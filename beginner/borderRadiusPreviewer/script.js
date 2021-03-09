function sendValuesToCard(condition) {
    const borderTopLeftValueHorizontal = document.getElementById('borderTopLeftHorizontal').value
    const borderTopRightValueHorizontal = document.getElementById('borderTopRightHorizontal').value
    const borderBottomLeftValueHorizontal = document.getElementById('borderBottomLeftHorizontal').value
    const borderBottomRightValueHorizontal = document.getElementById('borderBottomRightHorizontal').value

    // const borderTopLeftValueVertical = document.getElementById('borderTopLeftVertical').value
    // const borderTopRightValueVertical = document.getElementById('borderTopRightVertical').value
    // const borderBottomLeftValueVertical = document.getElementById('borderBottomLeftVertical').value
    // const borderBottomRightValueVertical = document.getElementById('borderBottomRightVertical').value

    const applyValuesInTheCard = document.getElementById('card').style

    document.getElementById('topLeft').innerHTML = `${borderTopLeftValueHorizontal}%`
    document.getElementById('topRight').innerHTML = `${borderTopRightValueHorizontal}%`
    document.getElementById('bottomLeft').innerHTML = `${borderBottomLeftValueHorizontal}%`
    document.getElementById('bottomRight').innerHTML = `${borderBottomRightValueHorizontal}%`

    switch (condition) {
        case 'borderTopLeftHorizontal':
            applyValuesInTheCard.borderTopLeftRadius = `${borderTopLeftValueHorizontal}%`
            break;
        case 'borderTopRightHorizontal':
            applyValuesInTheCard.borderTopRightRadius = `${borderTopRightValueHorizontal}%`
            break;
        case 'borderBottomLeftHorizontal':
            applyValuesInTheCard.borderBottomLeftRadius = `${borderBottomLeftValueHorizontal}%`
            break;
        case 'borderBottomRightHorizontal':
            applyValuesInTheCard.borderBottomRightRadius = `${borderBottomRightValueHorizontal}%`
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