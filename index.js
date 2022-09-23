const centeredContent = document.getElementById('content')
const opositeBodyStyles = {
    'body-dark': 'body-light',
    'body-light': 'body-dark'
}
const buttonOpositeNames = {
    'Dark': 'Light',
    'Light': 'Dark'
}

const opositeContentStyles = {
    'centered-content-dark': 'centered-content-light',
    'centered-content-light': 'centered-content-dark'
}

modeBtn.onclick = () => {
    var bodyStyle = opositeBodyStyles[document.body.className]
    var btnName = buttonOpositeNames[modeBtn.innerText]
    document.body.className = bodyStyle
    modeBtn.innerText = btnName
    
    for (const [key, value] of Object.entries(opositeContentStyles)) {
        if(centeredContent.classList.contains(key))
        {
            centeredContent.classList.remove(key)
            centeredContent.classList.add(value)
            return
        }
    };
}