const menu = ()=>{
    const container = document.createElement('div')
    container.setAttribute('id', 'container')

    const divOne = document.createElement('div')
    container.setAttribute('id', 'dish')

    const subDivOne = document.createElement('div')
    subDivOne.setAttribute('id', 'description')
    subDivOne.innerText = "Some info about the dish"
    const subDivTwo = document.createElement('div')
    subDivTwo.setAttribute('id', 'price')
    subDivTwo.innerText = "Price: $2.59"
    const subDivThree = document.createElement('div')
    subDivThree.setAttribute('id', 'd-img')

    
    divOne.append(subDivOne, subDivTwo, subDivThree)
    container.append(divOne)


    return container

}

export {menu}