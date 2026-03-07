import "./styles.css"
import {home} from "./home.js"
import { menu } from "./menu.js"

const contentDiv = document.querySelector('#content')
const subDivOne = home()
// contentDiv.append(subDivOne)

const subDivTwo = menu()
contentDiv.append(subDivTwo)
