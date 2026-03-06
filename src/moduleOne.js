import image from "./img.jpg"

const fun = ()=>{
    const parentDiv = document.createElement('div')
    parentDiv.setAttribute('id', 'parentDiv')

    const headLine = document.createElement('div')
    headLine.setAttribute('id', 'headLine')
    headLine.innerText = "Welcome to Odin's"

    const imgDiv = document.createElement('div')
    imgDiv.setAttribute('id', 'img')
    const img = document.createElement('img')
    img.src = image

    imgDiv.append(img)

    parentDiv.append(headLine, imgDiv)

    return parentDiv
}

export {fun}
