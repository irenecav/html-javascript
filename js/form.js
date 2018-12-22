export function setForm(){
    let form = document.querySelector('#contact')
    form.addEventListener('submit', enviar)
  let selection = document.querySelector('#selection')
   selection.addEventListener('change', addTexti)


    let oContact = {}


    function addTexti(){
        let secret = document.querySelector('#secret')
      if(getSelection(document.querySelector('#selection'))== "op3"){
         secret.classList.remove('hide')
          }else{
              secret.classList.add('hide')
          }
  
    }

    function enviar(oEv) {
        oEv.preventDefault()

        oContact.name = document.querySelector('#name').value
        oContact.email = document.querySelector('#email').value
        oContact.tlfn = document.querySelector('#tlfn').value
        oContact.msg = document.querySelector('#msg').value
        oContact.selection = getSelection(document.querySelector('#selection'))
        oContact.msg2 = document.querySelector('#msg2').value

        console.log(oContact)
        
    }


   

    function getSelection(nodo){
        let i = nodo.selectedIndex
        return nodo[i].value
    }








}