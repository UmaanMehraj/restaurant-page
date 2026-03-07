import "./styles.css"
import {home} from "./home.js"
import { menu } from "./menu.js"
import { about} from "./aboutPage.js"

const contentDiv = document.querySelector('#content')
const subDivOne = home()
// contentDiv.append(subDivOne)

const subDivTwo = menu()
// contentDiv.append(subDivTwo)

const subdivThree = about()
contentDiv.append(subdivThree)
