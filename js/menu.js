export function setMenu(){
    let aMenuItems = document.querySelectorAll("nav.tablet a")
    let aSections = document.querySelectorAll("section")
    let oOffsets = []
    let botonMenu1 = document.querySelector('#menu-btn-1')
    let botonMenu2 = document.querySelector('#menu-btn-2')
    let menuMobile = document.querySelector('#mobile')
    botonMenu1.addEventListener('click', toggleMenu)
    botonMenu2.addEventListener('click', toggleMenu)
    
    document.addEventListener('DOMContentLoaded', prepararNavegacion)
    window.addEventListener('resize', prepararNavegacion)

    prepararNavegacion()
    window.addEventListener('scroll', changeMenuStyle)



    function prepararNavegacion(){
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
        console.log(oOffsets)

    }

    function changeMenuStyle(){
        let pageOffset =  window.pageYOffset
        
        let menuItem = 0

        if(pageOffset < oOffsets['#quien-soy']){
            menuItem = 0

        }else if(pageOffset >= oOffsets['#quien-soy'] && pageOffset < oOffsets['#estudios'] ){
            menuItem = 1
        }else if(pageOffset >= oOffsets['#estudios'] && pageOffset < oOffsets['#experiencia'] ){
            menuItem = 2
        }else if(pageOffset >= oOffsets['#experiencia'] && pageOffset < oOffsets['#sobre-mi'] ){
            menuItem = 3
        }else if(pageOffset >= oOffsets['#sobre-mi'] && pageOffset < oOffsets['#contacto'] ){
            menuItem = 4
        }else{
            menuItem = 5
        }
        

    aMenuItems.forEach(
        (item) => item.classList.remove('active')
    )
    aMenuItems[menuItem].classList.add('active')
    }

    function toggleMenu(oE){
        oE.preventDefault()
        //cambia su visibilidad
        oE.target.classList.toggle('hide')
        //cambía la visibilidad del otro icono
        if(oE.target.previousElementSibling){
            oE.target.previousElementSibling.classList.toggle('hide')
        }else{
            oE.target.nextElementSibling.classList.toggle('hide')
        }
        //cambia la visibilidad del menu
        menuMobile.classList.toggle('hide')
        
    }





    

}