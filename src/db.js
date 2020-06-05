const nedb = require('nedb');

function createDB(name){
    return new nedb({
        filename: `./.db/${name}.db`,
        autoload: true
    })
}

function find(db, id){
    return new Promise((resolve, reject) => {
        db.findOne({_id: id}, (error, document) => {
            if(error){
                reject(error);
            }else{
                resolve(document);
            }
        })
    })
}

function list(db){
    return new Promise((resolve, reject) => {
        db.find({}, (error, documents) => {
            if(error){
                reject(error);
            }else{
                resolve(documents);
            }
        })
    })
}

function insert(db, data){
    return new Promise((resolve, reject) => {
        db.insert(data, (error, newDocument) => {
            if(error){
                reject(error);
            }else{
                resolve(newDocument);
            }
        })
    })
}

function update(db, id, data){
    return new Promise((resolve, reject) => {
        db.update({_id: id}, {$set: data}, {  }, (error, updatedDocuments) => {
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        })
    })
}

function remove(db, id){
    return new Promise((resolve, reject) => {
        db.remove({_id: id}, {}, (error, numRemoved) => {
            if(error){
                reject(error);
            }else{
                resolve({});
            }
        })
    })
}

module.exports = {
    async find(name, id){
        const db = createDB(name);
        return find(db, id);
    },
    async list(name){
        const db = createDB(name);
        return list(db);
    },
    async create(name, data){
        const db = createDB(name);
        return insert(db, data);
    },
    async update(name, id, data){
        const db = createDB(name);
        return update(db, id, data);
    },
    async remove(name, id){
        const db = createDB(name);
        return remove(db, id);
    }
}