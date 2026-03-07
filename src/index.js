import "./styles.css"
import {home} from "./home.js"
import { menu } from "./menu.js"
import { about} from "./aboutPage.js"

const contentDiv = document.querySelector('#content')

const homePage = home()
const menuPage = menu()
const aboutPage = about()

contentDiv.append(homePage)

const homeBtn = document.querySelector('#homeBtn')
homeBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = ''
    contentDiv.append(homePage)
})

const menuBtn = document.querySelector('#menuBtn')
menuBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = ''
    contentDiv.append(menuPage)
})

const abtBtn = document.querySelector('#abtBtn')
abtBtn.addEventListener('click', ()=>{
    contentDiv.innerHTML = ''
    contentDiv.append(aboutPage)
})