
const crearTablaProductos = () => {

    let contenido = `
    <table class="tabla">
            <tr>
                <th>Id</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Eliminar</th>
            </tr>`;

    productos.listaProductos.forEach(producto => {
        contenido += `
        <tr>    
            <td class="filas">${producto.id}</td>
            <td class="filas">${producto.nombre}</td>
            <td class="filas">${producto.precio}</td>
            <td class="filas"><button class="boton-eliminar js-boton-eliminar" id="${producto.id}" "js-boton-eliminar>Eliminar</button></td>
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
    const tabla = document.querySelector('.js-productos-tabla');
    tabla.innerHTML= contenido;
    
    tabla.querySelectorAll('.js-boton-eliminar').forEach(boton => {
		boton.addEventListener('click', () => {
			const idProd = boton.getAttribute('id');
			productos.delete(idProd);
            crearTablaProductos();
            crearTablaProductosMesa();
		});
    });
}

const crearProducto = () => {
    let content =`
    <div class="content-inputs">
        <input class="input js-input-producto" type="text" placeholder="Producto" />
        <input class="input js-input-precio" type="text" placeholder="Precio" />
        <button class="boton-agregar">Agregar Producto</button>
    </div>`;
    const bloque = document.querySelector('.js-productos-crear');
    bloque.innerHTML= content;
    
    const botonAgregarProd = bloque.querySelector("button");
    botonAgregarProd.addEventListener('click', () => {
        
        const designandoProd = bloque.querySelector(".js-input-producto").value;
        const precio = bloque.querySelector(".js-input-precio").value;
        const producto = new Producto(designandoProd,precio);
        productos.add(producto);
        crearTablaProductos();
        crearTablaProductosMesa();
	});
}


