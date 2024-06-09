document.querySelector("input[name='nombres']").addEventListener("keypress",function(event) {
    var ascii = event.keyCode || event.which;
    if ((ascii >= 48 && ascii <= 57) || (ascii == 46)) {
        alert("Usted ha ingresado un valor que no es un caracter");
        window.event.preventDefault();
        return;
    }
    var longitud = document.querySelector("input[name='nombres']").value.length;
    if (longitud > 25) {
        alert("Usted ha ingresado 25 caracteres");
        window.event.preventDefault();
        return;
    }

});
document.querySelector("input[name='apellidos']").addEventListener("keypress",function(event) {
    var ascii = event.keyCode || event.which;
    if ((ascii >= 48 && ascii <= 57) || (ascii == 46)) {
        alert("Usted ha ingresado un valor que no es un caracter");
        window.event.preventDefault();
    }
    var longitud = document.querySelector("input[name='apellidos']").value.length;
    if (longitud > 50) {
        alert("Usted ha ingresado 50 caracteres");
        window.event.preventDefault();
        return;
    }
  
    });   
    document.querySelector("input[name='telefono']").addEventListener("keypress", function(event) {
        var longitud = document.querySelector("input[name='telefono']").value.length;
        if (longitud >= 9) {
            alert("Usted ha ingresado 9 digitos");
            window.event.preventDefault();
            return;
        }
    
        var ascii = event.keyCode || event.which;
        if (ascii < 48 || ascii>57) {
            alert("Usted ha ingresado letras");
            window.event.preventDefault();
            return;
        }
    
    });




    function validarformulario(frm) {
        let test = /^\s*$/;
        if(test.test(frm.nombres.value)) {
            window.event.preventDefault();
            alert("Ingrese los nombres");
            return;
        }
    
        test = /^\s*$/;
        if(test.test(frm.apellidos.value)) {
            window.event.preventDefault();
            alert("Ingrese los apellidos");
            return;
        }
    
        test = /^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
        if(test.test(frm.email.value)) {
            window.event.preventDefault();
            alert("Ingrese su correo");
            return;
        }
    
        test = /^\d{9}$/;
        if(!test.test(frm.telefono.value)) {
            window.event.preventDefault();
            alert("Ingrese el número de su celular");
            return;
        }
    
        test = /^\s*$/;
        if(test.test(frm.genero.value)) {
            window.event.preventDefault();
            alert("Seleccione su genero");
            return;
        }
    
        test = /^\s*$/;
        if(test.test(frm.distrito.value)) {
            window.event.preventDefault();
            alert("Seleccione la pelicula que desea ver");
            return;
        }
    
        test = /^\s*$/;
        if(test.test(frm.comentarios.value)) {
            window.event.preventDefault();
            alert("Ingrese los comentarios");
            return;
        }
    
        alert("Su formulario de registro fue enviado exitosamente");
    
    }




