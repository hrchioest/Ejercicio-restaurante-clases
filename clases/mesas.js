
class Mesa {
    constructor(number){
        this.number = number; 
        this.consumos = [];
    }
}

class Mesas {
    constructor(){
        this.listaMesas= [];
    }
    addMesa(mesa){
        this.listaMesas.push(mesa);
    }
    deleteMesa(number){
        let index = this.listaMesas.findIndex(item =>item.number == number);
        if(index == -1) {
            throw "No se encontro ninguna mesa con ese numero";
        }
        this.listaMesas.splice(index, 1);
    }
    getIndexMesa(number){
        return  this.listaMesas.findIndex(item =>item.number == number);
    }
}

try {
    module.exports = {
        Mesa,
        Mesas
    }
 } catch (e) {}

