//Soltara un numero entre el 0 y 5
var x = Math.floor(Math.random()*6);

//Dependiendo del resultado de x, este switch cambiara la imagen principal
// de acuerdo al caso
switch (x) {
    case 0:
        document.getElementById("hero-img").src = "./imagenes/imagenes-menu/doro.jpg";
        console.log("salio 0");
        break;
    case 1:
        document.getElementById("hero-img").src = "./imagenes/imagenes-menu/Restaurante2.PNG";
        console.log("salio 1");
        break;
    case 2:
        document.getElementById("hero-img").src = "./imagenes/imagenes-menu/Restaurante3.PNG";
        console.log("salio 2");
        break;
    case 3:
        document.getElementById("hero-img").src = "./imagenes/imagenes-menu/Restaurante4.PNG";
        console.log("salio 3");
        break;
    case 4:
        document.getElementById("hero-img").src = "./imagenes/imagenes-menu/Restaurante5.PNG";
        console.log("salio 4");
        break;
    case 5:
        document.getElementById("hero-img").src = "./imagenes/imagenes-menu/Restaurante6.PNG";
        console.log("salio 5");
        break;
    default:
        break;
}


