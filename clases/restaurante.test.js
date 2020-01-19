const { Producto, Productos } = require('./productos');
const { Mesa, Mesas } = require('./mesas');
const { Restaurante } = require('./restaurante');
const { Pedido, Pedidos } = require('./pedidos');

    test("Agregar productos a la lista de productos", () => {
        const productos = new Productos();
        const producto1 = new Producto("ceviche",450);
        productos.add(producto1);
        expect(productos.listaProductos.length).toBe(1);
    });

    test("Asignar id al producto", () => {
        const productos = new Productos();
        const producto1 = new Producto("ceviche",450);
        productos.add(producto1);
        expect(productos.idActual).toBe(1);
    });

    test("Borrar producto de la lista", () => {
        const productos = new Productos();
        const producto1 = new Producto("ceviche",450);
        productos.add(producto1);
        productos.delete(1);    
        expect(productos.listaProductos.length).toBe(0);
    });

    test("Encontrar producto por id", () => { 
        const productos = new Productos();
        const producto1 = new Producto("ceviche",450);
        productos.add(producto1);       
        expect(productos.getProducto(1).nombre).toBe("ceviche");
    });

    test("Agregar mesa a la lista de mesas", () => {
        const mesas = new Mesas();
        const mesa1 = new Mesa(1);
        mesas.addMesa(mesa1);
        expect(mesas.listaMesas.length).toBe(1);
    });

    test("Eliminar mesa a la lista de mesas", () => {
        const mesas = new Mesas();
        const mesa1 = new Mesa(1);
        mesas.addMesa(mesa1);
        mesas.deleteMesa(1);
        expect(mesas.listaMesas.length).toBe(0);
    });

    test("Agregar producto a mesa", () => {
        const mesas = new Mesas();
        const mesa1 = new Mesa(1);
        const productos = new Productos();
        const producto1 = new Producto("ceviche",450);
        productos.add(producto1);
        mesas.addMesa(mesa1);
        const restaurante = new Restaurante(mesas, productos);
        const pedido1 = new Pedido(producto1, 2);
        restaurante.cargarProdMesa(1,pedido1)
        expect(mesa1.consumos[0].producto.nombre).toBe('ceviche');
    });

    test("traer cuenta", () => {
        const mesas = new Mesas();
        const mesa1 = new Mesa(1);
        const productos = new Productos();
        const producto1 = new Producto("ceviche",450);
        productos.add(producto1);
        mesas.addMesa(mesa1);
        const restaurante = new Restaurante(mesas, productos);
        const pedido1 = new Pedido(producto1, 2);
        restaurante.cargarProdMesa(1,pedido1);
        expect(restaurante.traerCuenta(1)).toBe(900);
        
    });

    test("cierre de cuenta", () => {
        const mesas = new Mesas();
        const mesa1 = new Mesa(1);
        const productos = new Productos();
        const producto1 = new Producto("ceviche",450);
        productos.add(producto1);
        mesas.addMesa(mesa1);
        const restaurante = new Restaurante(mesas, productos);
        const pedido1 = new Pedido(producto1, 2);
        restaurante.cargarProdMesa(1,pedido1);
        restaurante.cierreMesa(1);
        expect(restaurante.listaCuentasCerradas.length).toBe(1);
        expect(restaurante.mesas.listaMesas[0].consumos.length).toBe(0);
        
    });

   

    
 
