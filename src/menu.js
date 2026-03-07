const menu = ()=>{
    const containerTwo = document.createElement('div')
    containerTwo.setAttribute('id', 'menu') 

    const divOne = document.createElement('div')
    divOne.setAttribute('class', 'dish')

    const descOne = document.createElement('div')
    descOne.setAttribute('class', 'description')
    descOne.innerText = "Some info about the dish"
    const priceOne = document.createElement('div')
    priceOne.setAttribute('class', 'price')
    priceOne.innerText = "Price: $2.59"
    const dImgOne = document.createElement('div')
    dImgOne.setAttribute('class', 'd-img')

    const divTwo = document.createElement('div')
    divTwo.setAttribute('class', 'dish')
    const descTwo = document.createElement('div')
    descTwo.setAttribute('class', 'description')
    descTwo.innerText = "Some info about the dish"
    const priceTwo = document.createElement('div')
    priceTwo.setAttribute('class', 'price')
    priceTwo.innerText = "Price: $2.59"
    const dImgTwo = document.createElement('div')
    dImgTwo.setAttribute('class', 'd-img')
    

    
    divOne.append(descOne, priceOne, dImgOne)
    divTwo.append(descTwo, priceTwo, dImgTwo)
    containerTwo.append(divOne, divTwo)


    return containerTwo

}

export {menu}