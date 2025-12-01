const grilla = document.getElementById('grilla');

// Hacemos la petición con fetch
fetch('http://localhost:3000/articulos')
    .then(resp => {
        if (!resp.ok) {
            throw new Error('Error en la respuesta');
        }
        return resp.json(); // Convertimos la respuesta a JSON
    })
    .then(data => {
        // Recorremos la lista y agregamos al HTML
        data.forEach(articulo => {
            //crea un elemnto div en el body
            let caja = document.createElement("div");
            caja.className = "caja";   //definimos una clase "caja"
            
            
            let desc = document.createElement('p');
            desc.className = "descripcion"  //con esto se puede editar desde el css
            desc.innerHTML = `${articulo.descripcion}`;
            caja.appendChild(desc);   //agrego desc a la caja 

            let imagen = document.createElement ("img");//crea una imagen
            imagen.src = "imagenesropa/" + `${articulo.imagen}`;  //definir el archivo a mostrar
            imagen.className = "imagen";    //definir una clase para usar en css
            caja.appendChild (imagen);   //con estos 4 renglones se agrega imagen ala caja

            let precio = document.createElement('p');
            precio.className = "precio"
            precio.innerHTML ="$" + `${articulo.precio}`;
            caja.appendChild(precio);

            //agregar la caja entera en la grilla
            grilla.appendChild(caja);
        });
    })
    .catch(error => {
        // En caso de error, mostramos un mensaje
        grilla.innerHTML = 'Error al cargar los datos: ' + error;
        console.error('Error al obtener los datos:', error);
    });

    