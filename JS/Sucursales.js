let original = document.querySelector("#Sucursales");
let contenedor = document.querySelector("#Contenedor"); 

let botonsuc1 = document.querySelector("#suc1");
let botonsuc2 = document.querySelector("#suc2");
let botonsuc3 = document.querySelector("#suc3");

let referencia = original.cloneNode(true);
original.remove() // Clono y elimino el original

//Consultando al JSON propio

fetch("https://M-Monzon.github.io/CAC_Proyecto/datos.json")
.then(response => response.json()) // Convierte a JSON
.then(data => { 
    // Procesamiento de la info que llega de la API
    console.log(data);

    console.log("Acercate a " + data.Sucursal1[1] + " en el famoso Barrio de " + data.Sucursal1[0]) //Direccion
    console.log(data.img1) //Imagen

    let Sucursal1 = referencia.cloneNode(true);

    sucursal1.querySelector("img").src = data.img1;
    sucursal1.querySelector("img").alt = "Foto de la sucursal";
    sucursal1.querySelector("p").innerHTML = "Acercate a " + data.Sucursal1[1] + " en el famoso Barrio de " + data.Sucursal1[0];

    contenedor.appendChild(Sucursal1); 
    })
.catch(error => console.log("Ocurrió un error!" + error));

