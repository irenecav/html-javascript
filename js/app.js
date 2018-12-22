import { setMenu } from './menu.js'
import { setForm } from './form.js'
import { limite } from './limite.js'



function app(){
    setMenu()
    setForm()
    limite()
   
}

document.addEventListener('DOMContentLoaded', app)