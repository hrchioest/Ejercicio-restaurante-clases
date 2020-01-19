
const armarTablaMesas = () => {

	let contenido = `
	<table class="tabla">
		<tr>
			<th>Numero de Mesa</th>
			<th>Cuenta</th>
			<th>Cerrar Mesa</th>
			<th>Eliminar Mesa</th>
		</tr>`;
	 
	 mesas.listaMesas.forEach(mesa => {
		contenido += `
		<tr>
			<td class="filas">${mesa.number}</td>
			<td class="filas js-cuenta">${restaurante.traerCuenta(mesa.number)}</td>
			<td class="filas "><button class="js-boton-cerrar boton-cerrar" number="${mesa.number}">Cerrar</button></td>
			<td class="filas"><button class="js-boton-eliminar boton-eliminar" number="${mesa.number}">Eliminar</button></td>
		</tr>`;
	});
	//colspan: se usa para determinar en que columna de la tabla tr se agrega esa frase.
	if(mesas.listaMesas.length === 0){
		contenido += `
		<tr>
			<td class="filas" colspan="4">No hay mesas creadas</td>
		</tr>`;
	}

	contenido += `</table>`;

	const tabla = document.querySelector('.js-mesas-tabla');
	tabla.innerHTML= contenido;


	tabla.querySelectorAll('.js-boton-eliminar').forEach(boton => {
		boton.addEventListener('click', () => {
			const numeroMesa = boton.getAttribute('number');
			mesas.deleteMesa(numeroMesa);
			armarTablaMesas();
		});
	});

	tabla.querySelectorAll('.js-boton-cerrar').forEach(boton => {
		boton.addEventListener('click', () => {
			const numeroMesa = boton.getAttribute('number');
			restaurante.cierreMesa(numeroMesa);	
			armarTablaMesas();		
		});	
	});

}


const armarSelectMesas = () => {

	let contenido = `
		<option value="">Número de mesa</option>`;

	 mesas.listaMesas.forEach(mesa => {
		contenido += `
		<option value="${mesa.number}">${mesa.number}</option>`;
	});

	document.querySelectorAll('.js-option-mesa').forEach(select => {
		select.innerHTML = contenido;
	});
	
}

const crearAgregarMesa = () => {

	let content = `
	<div class="content-inputs">
		<input class="input" type="text" placeholder="Numero de Mesa" />
		<button class="boton-agregar">Agregar Mesa</button>
	</div>`;

	const bloque = document.querySelector('.js-mesas-crear');
	bloque.innerHTML = content;

	const botonAgregarMesa = bloque.querySelector("button");

	botonAgregarMesa.addEventListener('click', () => {
		const numeroMesa = bloque.querySelector("input").value;
		const mesa = new Mesa(numeroMesa);
		mesas.addMesa(mesa);
		armarTablaMesas();
		armarSelectMesas()
	});
}

