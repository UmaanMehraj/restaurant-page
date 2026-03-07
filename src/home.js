import image from "./img.jpg"

const home = ()=>{
    const containerOne = document.createElement('div')
    containerOne.setAttribute('id', 'home')

    const headLine = document.createElement('div')
    headLine.setAttribute('id', 'headLine')
    headLine.innerText = "Welcome to Odin's"

    const imgDiv = document.createElement('div')
    imgDiv.setAttribute('id', 'img')
    const img = document.createElement('img')
    img.src = image
    img.alt = 'Restaurant Preview'
    imgDiv.append(img)

    const moreText = document.createElement('div')
    moreText.setAttribute('id', 'headLine')
    moreText.innerText = "At Odin's we commit to hospitality which runs in our blood by tradition!"

    containerOne.append(headLine, imgDiv, moreText)

    return containerOne
}

export {home}
