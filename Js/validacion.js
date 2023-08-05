//leHaz tú validación en javascript acá
let inputs = document.getElementsByClassName('formcontacto__input');

for (let i =0; i < inputs.length ; i++){
   inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
        this.nextElementSibling.classList.add('fijar');
    } else{
        this.nextElementSibling.classList.add('fijar');
    }
   });
}