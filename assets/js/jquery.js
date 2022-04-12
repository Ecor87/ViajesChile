//Destaca el link de navbar que se le hace clic al agregar la clase 'active'
$(document).ready(function(){
    $('.linkNavbar').on('click', function(){        //ejecuta la función al hacer click en uno de los items con clase "linkNavbar"
        $('.linkNavbar').removeClass('active')      //quita la clase "active" a cualquier item de clase "linkNavbar" que ya la posea
        $(this).addClass('active');                 //agrega la clase "active" al elemento que se le hizo click
    })
})