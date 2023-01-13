document.getElementById("experiencia").onclick = function() {funcion1()};


function funcion1(){
  gsap.to(".impresora", {
    rotation: 360, 
    y: 627, 
    duration: 4,
    ease: 'bounce.out'
  });
}

document.getElementById("educacion").onclick = function() {funcion()};


function funcion(){
  gsap.to(".tecnica", {
    rotation: 360, 
    y: 302, 
    duration: 3,
    ease: 'bounce.out'
  });
}




