import "./styles.css"
import {fun} from "./home.js"

const contentDiv = document.querySelector('#content')
const subDiv = fun()
contentDiv.append(subDiv)