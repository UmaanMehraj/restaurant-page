import "./styles.css"
import {fun} from "./moduleOne.js"

const contentDiv = document.querySelector('#content')
const subDiv = fun()
contentDiv.append(subDiv)