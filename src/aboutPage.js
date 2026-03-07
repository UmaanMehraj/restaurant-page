const about = ()=>{
    const container = document.createElement('div')
    container.setAttribute('id', 'about')

    const header =  document.createElement('div')
    header.innerText = "About Odin's"
    header.setAttribute('id', 'headLine')

    const divOne = document.createElement('div')
    divOne.setAttribute('class', 'text')
    divOne.innerText = "At Odin’s, we believe that every meal should feel legendary. Inspired by the bold spirit of Norse mythology, Odin’s is a place where rich flavors, warm hospitality, and a touch of adventure come together to create a dining experience worthy of the gods"

    const divTwo = document.createElement('div')
    divTwo.setAttribute('class', 'text')
    divTwo.innerText = "At Odin’s, every table is a gathering of legends."

    container.append(header, divOne, divTwo)

    return container


}

export {about}