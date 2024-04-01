//alert("Hola este es mi Javascript");

let nombre = "Ronaldo";

console.log(nombre);

let contenidoTitulo = "Acerca de Mí";

let titulo = document.querySelector(".acerca-de h2")
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Acerca de Mí") {
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(ver, logros, tilinescos) {
    let contenido = `Acá podrás ${ver} todos mis ${logros} ${tilinescos}. Su su suscríbete y dale a like si quieres.`;

    return contenido;
}

parrafo.innerText = cambiarTexto("chupar","grozos","monolitos");