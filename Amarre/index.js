
//funcion para que se mueva el boton_no

function Moverposicion(elm){
    elm.style.position= 'absolute';
    //se va a mover a partir de las medidas de la pantalla de la laptop
    //se resta por la altura del elemento(elm.offsetHeight), para que no se salga de la pantalla
    elm.style.top=Math.random()*(window.innerHeight-elm.offsetHeight) + 'px';
    elm.style.left=Math.random()*(window.innerWidth-elm.offsetWidht) + 'px';

}

let boton_si=document.getElementById("boton_si");
let boton_no=document.getElementById("boton_no");
let divModosexo=document.getElementsByClassName("modo_sexo")[0];

//addEventListener=es lo que quiero que pase
boton_no.addEventListener('mouseenter', function(e){Moverposicion(e.target)});

//si dice que si
boton_si.addEventListener('click',function(e){alert('sabia que dirias que SI :)')

    //aparece el modo sexo y la musica
    divModosexo.style.display='block';
    
    const cancion=new Audio('img_modo_hot.mp3')
    cancion.play();
})