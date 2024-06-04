//Consultando al JSON propio

fetch("https://M-Monzon.github.io/CAC_Proyecto/datos.json")
.then(response => response.json()) // Convierte a JSON
.then(data => { 
    // Procesamiento de la info que llega de la API
    console.log(data);

    console.log(data.Sucursal1[0])
    console.log(img1)




    })
.catch(error => console.log("Ocurrió un error!" + error));

