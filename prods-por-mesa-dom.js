const selecMesasProdMesa = () => {
    let content =`
        <select class="js-option-mesa input" name="Numero de Mesa">
        </select> `; 

    const select = document.querySelector('.js-selec-mesa');
    select.innerHTML= content;
    armarSelectMesas();

    select.addEventListener('change', () => {
        armarTablaProdsMesa();
    });
    
};



const armarTablaProdsMesa = () => {

    const numero_mesa_seleccionada = document.querySelector('.js-selec-mesa .js-option-mesa').value;
    const index_mesa = restaurante.mesas.getIndexMesa(numero_mesa_seleccionada);

   

    let contenido =`
    <table class="tabla">
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Eliminar</th>
        </tr>`;

    if(index_mesa >= 0){
        restaurante.mesas.listaMesas[index_mesa].consumos.forEach((pedido, index) => {
            contenido += `
            <tr>
                <td class="filas">${pedido.producto.nombre}</td>
                <td class="filas">${pedido.cantidad}</td>
                <td class="filas">${pedido.producto.precio}</td>
                <td class="filas"><button pedido_posicion="${index}" class="boton-eliminar">Eliminar</button></td>
            </tr>`;
        });
    }

    if(mesas.listaMesas.length === 0){
        contenido += `
        <tr>
            <td class="filas" colspan="4">No hay productos cargados</td>
        </tr>`;
    }           
    contenido += `</table>`;

    const tabla = document.querySelector('.js-prods-mesas-tabla');
    tabla.innerHTML= contenido;

    if(restaurante.mesas.listaMesas.length > 0){
       tabla.querySelectorAll("button").forEach(boton => {
        boton.addEventListener('click', () => {
            const pedido_posicion = boton.getAttribute('pedido_posicion');
            restaurante.mesas.listaMesas[index_mesa].consumos.splice(pedido_posicion, 1);
            armarTablaProdsMesa();
        });
       })
        
    }
    
}



