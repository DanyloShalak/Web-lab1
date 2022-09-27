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

const opositeLanguages = {
    'en': 'uk',
    'uk': 'en'
}

const languageDict = {
    "en":{
        "name": "Danylo Shalak",
        "group": "Group: КП-03",
        "expectations": {
            "name": "My expectations:",
            "items": ["Learn frameworks for developing web applications",
                         "Learn how to deploy web applications"]
        },
        "experience": {
            "name": "My experience:",
            "items": ["C# 1 year", "Unity 6 months"]
        }
    },
    "uk":{
        "name": "Данило Шалак",
        "group": "Група: КП-03",
        "expectations": {
            "name": "Мої очікування:",
            "items": ["Вивчити нові фреймворки для створення веб застосунків",
                         "Вивчити як розгортати веб додатки"]
        },
        "experience": {
            "name": "Мій досвід:",
            "items": ["C# 1 рік", "Unity 6 місяців"]
        }
    }
}

languageBtn.onclick = () => {
    var language = opositeLanguages[languageBtn.innerText]
    languageBtn.innerText = language

    var expectsLis = expectations.getElementsByTagName('li')
    expectations.getElementsByTagName('h3')[0].innerText = languageDict[language]['expectations'].name
    for(var i = 0; i < expectsLis.length; i++) {
        expectsLis[i].innerText = languageDict[language]['expectations'].items[i]
    }
    
    var expLis = experience.getElementsByTagName('li')
    experience.getElementsByTagName('h3')[0].innerText = languageDict[language]['experience'].name
    for(var i = 0; i < expLis.length; i++) {
        expLis[i].innerText = languageDict[language]['experience'].items[i]
    }

    nameSection.getElementsByTagName('h1')[0].innerText = languageDict[language].name
    nameSection.getElementsByTagName('h3')[0].innerText = languageDict[language].group
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