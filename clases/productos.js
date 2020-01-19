
class Producto {
    constructor(nombre, precio){
        this.id = null;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Productos{
    constructor(){
        this.idActual = 0;
        this.listaProductos = [];
    }
    asignarId(){
        this.idActual += 1;
        return this.idActual;
    }
    add(producto){
        producto.id = this.asignarId();
        this.listaProductos.push(producto);
    }
    delete(id){
        let index = this.listaProductos.findIndex(item =>{
            return item.id == id;
        });
        if(index == -1) {
            throw "No se encontro ningun item con ese id";
        }
        this.listaProductos.splice(index, 1);
    }
    getProducto(id){
        const index = this.listaProductos.findIndex(item => item.id == id);
        return this.listaProductos[index];
    }
   
    
}




try {
    module.exports = {
        Producto,
        Productos,
    }
 } catch (e) {}
