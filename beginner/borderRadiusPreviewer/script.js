function sendValuesToCard(condition) {
    const borderTopLeftValueHorizontal = document.getElementById('borderTopLeftHorizontal').value
    const borderTopRightValueHorizontal = document.getElementById('borderTopRightHorizontal').value
    const borderBottomLeftValueHorizontal = document.getElementById('borderBottomLeftHorizontal').value
    const borderBottomRightValueHorizontal = document.getElementById('borderBottomRightHorizontal').value

    const borderTopLeftValueVertical = document.getElementById('borderTopLeftVertical').value
    const borderTopRightValueVertical = document.getElementById('borderTopRightVertical').value
    const borderBottomLeftValueVertical = document.getElementById('borderBottomLeftVertical').value
    const borderBottomRightValueVertical = document.getElementById('borderBottomRightVertical').value

    const applyValuesInTheCard = document.getElementById('card').style

    document.getElementById('topLeft').innerHTML = `${borderTopLeftValueHorizontal}% ${borderTopLeftValueVertical}%`
    document.getElementById('topRight').innerHTML = `${borderTopRightValueHorizontal}% ${borderTopRightValueVertical}`
    document.getElementById('bottomLeft').innerHTML = `${borderBottomLeftValueHorizontal}% ${borderBottomLeftValueVertical}`
    document.getElementById('bottomRight').innerHTML = `${borderBottomRightValueHorizontal}% ${borderBottomRightValueVertical}`

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
        case 'borderTopLeftVertical':
            if (borderTopLeftValueHorizontal != 0) {
                applyValuesInTheCard.borderTopLeftRadius = `
                    ${borderTopLeftValueHorizontal}% 
                    ${borderTopLeftValueVertical}%`
            } else {
                console.log("it dosen't work 1")
            }
            break;
        case 'borderTopRightVertical':
            if (borderTopRightValueHorizontal != 0) {
                applyValuesInTheCard.borderTopRightRadius = `
                    ${borderTopRightValueHorizontal}% 
                    ${borderTopRightValueVertical}%`
            } else {
                console.log("it dosen't work 2")
            }
            break;
        case 'borderBottomLeftVertical':
            if (borderBottomLeftValueHorizontal != 0) {
                applyValuesInTheCard.borderBottomLeftRadius = `
                    ${borderBottomLeftValueHorizontal}% 
                    ${borderBottomLeftValueVertical}%`
            } else {
                console.log("it dosen't work 3")
            }
            break;
        case 'borderBottomRightVertical':
            if (borderTopLeftValueHorizontal != 0) {
                applyValuesInTheCard.borderBottomRightRadius = `
                    ${borderBottomRightValueHorizontal}% 
                    ${borderBottomRightValueVertical}%`
            } else {
                console.log("it dosen't work 4")
            }
            break;
        default:
            console.log("it dosen't work")
    }
}

function copyCode() {
    let copyText = document.getElementById('borderRight')

    copyText.select();

    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    alert("Copied the text: " + copyText.value)
}