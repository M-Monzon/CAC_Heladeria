let original = document.querySelector("#Sucursales");
let contenedor = document.querySelector("#Contenedor"); 

let botonsuc1 = document.querySelector("#suc1");
let botonsuc2 = document.querySelector("#suc2");
let botonsuc3 = document.querySelector("#suc3");

let referencia = original.cloneNode(true);
original.remove() // Clono y elimino el original

//Consultando al JSON propio


//Funciones

function fsuc1() {
    fetch("https://M-Monzon.github.io/CAC_Proyecto/datos.json")
    .then(response => response.json()) // Convierte a JSON
    .then(data => { 
        // Procesamiento de la info que llega de la API
        console.log(data);

        console.log("Acercate a " + data.Sucursal1[1] + " en el famoso Barrio de " + data.Sucursal1[0]) //Direccion
        console.log(data.img1) //Imagen

        let Sucursal1 = referencia.cloneNode(true);

        Sucursal1.querySelector("img").src = data.img1;
        Sucursal1.querySelector("img").alt = "Foto de la sucursal";
        Sucursal1.querySelector("p").innerHTML = "Acercate a " + data.Sucursal1[1] + " en el famoso Barrio de " + data.Sucursal1[0];

        contenedor.appendChild(Sucursal1); 
        })
    .catch(error => console.log("Ocurrió un error!" + error));
}

function fsuc2() {    
    fetch("https://M-Monzon.github.io/CAC_Proyecto/datos.json")
    .then(response => response.json()) // Convierte a JSON
    .then(data => { 
        // Procesamiento de la info que llega de la API
        console.log(data);

        console.log("Acercate a " + data.Sucursal2[1] + " en el famoso Barrio de " + data.Sucursal2[0]) //Direccion
        console.log(data.img2) //Imagen

        let Sucursal2 = referencia.cloneNode(true);

        Sucursal2.querySelector("img").src = data.img2;
        Sucursal2.querySelector("img").alt = "Foto de la sucursal";
        Sucursal2.querySelector("p").innerHTML = "Acercate a " + data.Sucursal2[1] + " en el famoso Barrio de " + data.Sucursal2[0];

        contenedor.appendChild(Sucursal2); 
        })
    .catch(error => console.log("Ocurrió un error!" + error));
}

function fsuc3() {    
    fetch("https://M-Monzon.github.io/CAC_Proyecto/datos.json")
    .then(response => response.json()) // Convierte a JSON
    .then(data => { 
        // Procesamiento de la info que llega de la API
        console.log(data);

        console.log("Acercate a " + data.Sucursal3[1] + " en el famoso Barrio de " + data.Sucursal3[0]) //Direccion
        console.log(data.img3) //Imagen

        let Sucursal3 = referencia.cloneNode(true);

        Sucursal3.querySelector("img").src = data.img3;
        Sucursal3.querySelector("img").alt = "Foto de la sucursal";
        Sucursal3.querySelector("p").innerHTML = "Acercate a " + data.Sucursal3[1] + " en el famoso Barrio de " + data.Sucursal3[0];

        contenedor.appendChild(Sucursal3); 
    })
    .catch(error => console.log("Ocurrió un error!" + error));
}

// Eventos

botonsuc1.addEventListener("click", function(){
    fsuc1();
});

botonsuc2.addEventListener("click", function(){
    fsuc2();
});

botonsuc3.addEventListener("click", function(){
    fsuc3();
});
