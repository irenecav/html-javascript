export function limite(){
    let texto = document.querySelector('#msg')
    texto.addEventListener('keydown', contarLimite)
    texto.addEventListener('keyup', contarLimite)
   
    function contarLimite (event) {
        let arrayTexto = texto.value.split(' ')
        var tecla = event.keyCode;
        if (tecla !== 8){
        if(arrayTexto.length >= 151 ) {
            event.preventDefault()
          }
        }

    }



}

