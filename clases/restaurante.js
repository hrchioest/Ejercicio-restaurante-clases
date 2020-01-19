
 /**
  * Hacer un sistema para restaurant.
  * Para esto necesitamos.
  * 1. Lista de mesas - agregar, eliminar
  * 2. Lista de productos con precio - Agregar, eliminar, modificar
  * 
  * Y que nos permita obtener
  * 3. Una cuenta por mesa (la mesa se abre, se cargan los productos, y 
  * se cierra pidiendo el total consumido. Lista de cuentas con objetos)
  * 4. Obtener el producto mas vendido
  * 
  * Las funciones deben tener validaciones correspondientes.
  * 
  * Y esto debe estar todo accesible desde una pagina web.
  * TESTS de las funciones que no requieran DOM
  * 
  * En el GUI (graphical user interface, o interfaz grafica de usuario), o sea
  * la pagina, vamos a tener varias acciones relacionadas a inputs.
  * Resetear el valor de los inputs cada vez que hago click en el boton que le 
  * corresponde al input. O sea, si agrego un nuevo numero de mesa, el input
  * debe quedar vacio una vez agregado.
  * 
  */


class Restaurante {
    constructor (mesas, productos, pedido){
        this.mesas = mesas;
        this.productos = productos;
        this.pedido = pedido;
        this.listaCuentasCerradas = [];
    
    };
    cargarProdMesa(number, pedido){
       const mesa = this.mesas.listaMesas.find(item => item.number == number);
        mesa.consumos.push(pedido);
    }
    traerCuenta(number){
        let mesa = this.mesas.listaMesas.find(item =>item.number== number);
        const cuenta = mesa.consumos.reduce((acumulador, pedido)=>{
            let costoProducto = pedido.producto.precio * pedido.cantidad;
            acumulador += costoProducto;
            return acumulador;
        }, 0); 
        return cuenta;
    }
    cierreMesa(number){
        let index = this.mesas.listaMesas.findIndex(item =>item.number == number);
        let consumos = this.mesas.listaMesas[index].consumos;
        this.listaCuentasCerradas.push(consumos);
        this.mesas.listaMesas[index].consumos = [];
    }
}


try {
    module.exports = {
        Restaurante
    }
 } catch (e) {}