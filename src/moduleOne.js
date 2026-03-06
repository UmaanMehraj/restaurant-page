const fun = ()=>{
    const parentDiv = document.createElement('div')
    parentDiv.setAttribute('id', 'parentDiv')

    const headLine = document.createElement('div')
    headLine.setAttribute('id', 'headLine')
    headLine.innerText = "Mell's Kitchen"

    const TwoLine = document.createElement('div')
    TwoLine.setAttribute('id', 'headLine')
    TwoLine.innerText = "Mello's Kitchen"


    parentDiv.append(headLine, TwoLine)

    return parentDiv
}

export {fun}

