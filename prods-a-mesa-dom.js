const crearTablaProductosMesa = () => {

    let contenido =`
    <table class="tabla">
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
        </tr>`;

    productos.listaProductos.forEach(producto => {
        contenido += `
        <tr>    
            <td class="filas">${producto.nombre}</td>
            <td class="filas"><input producto-id="${producto.id}" class="content-inputs input" type="number"></td>
        </tr>
        `
    });

    if(productos.listaProductos.length === 0){
		contenido += `
		<tr>
			<td class="filas" colspan="4">No hay productos cargados</td>
		</tr>`;
    }

   
    contenido += `</table>`;
    const tabla = document.querySelector('.js-productos-mesa-tabla');
    tabla.innerHTML= contenido; 


    let content =`
    <div class="content-inputs">
            <select class="js-option-mesa input" name="Numero de Mesa">
        </select>
        <button class="boton-agregar">Agregar a Mesa</button>
    </div>`;
    const bloque = document.querySelector('.js-cargar-productos');
    bloque.innerHTML= content;

    armarSelectMesas();

    const botonAgregarProd = bloque.querySelector("button");
    botonAgregarProd.addEventListener('click', () => {
        
        const numero_mesa = document.querySelector('.js-option-mesa').value;

        tabla.querySelectorAll('input').forEach(input => {
            if(input.value > 0){
                const producto_id = input.getAttribute('producto-id');
                const cantidad = input.value;
                const producto = productos.getProducto(producto_id);
                const pedido = new Pedido(producto,cantidad);
                restaurante.cargarProdMesa(numero_mesa,pedido);
                armarTablaProdsMesa();
                armarTablaMesas();
            }
        });
	});
};

