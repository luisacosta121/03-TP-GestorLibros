import ModelMem from "./librosMem.js";


class ModelFactory{
    static get(tipo){
        switch(tipo){
        case 'MEM':
            console.log('Persistiendo en memoria');
             return new ModelMem()
        default:
            console.log('Persistiendo en memoria (default)');
            return new ModelMem()
    }
    }
}

export default ModelFactory