//Con esta funcion llamamos y pintamos los datos de España.
function españa(){
    //hacemos peticion de datos
    const xhr = new XMLHttpRequest();    
    xhr.open("GET", "listadoPaises.json", true);
    xhr.onreadystatechange = function () {
        // si el estado de la peticion a sido correcto procedemos a leer la info
        if (this.readyState == 4 && this.status == 200) {
            //parseamos con JSON.parse el tesxto que obtenemos del json.
            let resultado = JSON.parse(this.responseText);
            let res = document.querySelector('.paises');
           // con el bucle recorremos el array de los paises para ir mostrando la info
            for (let i of resultado.listadoPaises.pais) {
                //si el nombre coincide los pintamos
                if (i.nombre == 'España') {
                    //con el inner pintamos los td dentro de los tr de las tablas 
                    res.innerHTML += `<a href="https://www.red2000.com/spain/1t-map.html"><td>${i.nombre}</td></a>
                    <td> ${i.ciudades}</td>`;
               
                   }
            }
        }
    }
    xhr.send();
}
//Con esta funcion llamamos y pintamos los datos de Mexico.
function mexico(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "listadoPaises.json", true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let resultado = JSON.parse(this.responseText);
            let res = document.querySelector('.paises');
            
           ;
            for (let i of resultado.listadoPaises.pais) {
                if (i.nombre == 'México') {
                    res.innerHTML += `<td>${i.nombre}</td>
                    <td> ${i.ciudades}</td>`;
                    
                   }
            }
        }
    }
    xhr.send();
}
//Con esta funcion llamamos y pintamos los datos de Alemania.
function alemania(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "listadoPaises.json", true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let resultado = JSON.parse(this.responseText);
            let res = document.querySelector('.paises');
            
           ;
            for (let i of resultado.listadoPaises.pais) {
                if (i.nombre == 'Alemania') {
                    res.innerHTML += `<td>${i.nombre}</td>
                    <td> ${i.ciudades}</td>`;
                    
                   }
            }
        }
    }
    xhr.send();
}
//Con esta funcion llamamos y pintamos los datos de Japon.
function japon(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "listadoPaises.json", true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let resultado = JSON.parse(this.responseText);
            let res = document.querySelector('.paises');
           
           ;
            for (let i of resultado.listadoPaises.pais) {
                if (i.nombre == 'Japon') {
                    res.innerHTML += `<td>${i.nombre}</td>
                    <td> ${i.ciudades}</td>`;
                    
                   }
            }
        }
    }
    xhr.send();
}

    
