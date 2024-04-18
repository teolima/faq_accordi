
function clicar(ima_id, para_id) {
    var image = window.document.getElementById(ima_id)
    var parag1 = window.document.getElementById(para_id)
    if(parag1.style.display === 'none' ){
        parag1.style.display = 'block'
        image.src = './assets/images/icon-minus.svg'   
        
        
    }else{
        parag1.style.display = 'none'
        image.src = './assets/images/icon-plus.svg'
    }
   
}

function sair(ima_i2, para_i2) {
    var ima2 = window.document.getElementById(ima_i2)
    var parag2 = document.getElementById(para_i2)
    if(parag2.style.display !== 'none'){
        ima2.src = './assets/images/icon-plus.svg'
        parag2.style.display = 'none'
    }

}



