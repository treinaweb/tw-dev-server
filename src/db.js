const Datastore = require('nedb');
const path = require('path');
const terminal = require('./terminal');
const arguments = require('./arguments');
const isTempData = arguments.get('temp', false);
const dbFolder = '.tw-db';
const memoryDB = {};

function renameField(object, oldName, newName){
    try{
        const newObject = {...object, [newName]: object[oldName]};
        delete newObject[oldName];
        return newObject;
    }catch(error){
        return object;
    }
}

function createDB(name){
    if(memoryDB.hasOwnProperty(name)){
        return memoryDB[name];
    }
    const dbFilename = path.join(terminal.cliDirectory, dbFolder, `${name}.db`);
    const db = new Datastore({
        filename: isTempData ? undefined : dbFilename,
        autoload: true
    })
    memoryDB[name] = db;
    return db;
}

function find(db, id){
    return new Promise((resolve, reject) => {
        db.findOne({_id: id}, (error, document) => {
            if(error){
                reject(error);
            }else{
                resolve(
                    renameField(document, '_id', 'id')
                );
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
                resolve(
                    documents.map(item => renameField(item, '_id', 'id'))
                );
            }
        })
    })
}

function insert(db, data){
    const dbData = renameField(data, 'id', '_id');
    return new Promise((resolve, reject) => {
        db.insert(dbData, (error, newDocument) => {
            if(error){
                reject(error);
            }else{
                resolve(
                    renameField(newDocument, '_id', 'id')
                );
            }
        })
    })
}

function update(db, id, data){
    const dbData = renameField(data, 'id', '_id');
    return new Promise( (resolve, reject) => {
        db.update({_id: id}, 
            {...dbData, _id: id}, 
            {upsert: true, returnUpdatedDocs: true}, 
            async (error, numAffected, affectedDocuments, upsert) => {
                if(error){
                    reject(error);
                }else{
                    if(Array.isArray(affectedDocuments)){
                        resolve(
                            affectedDocuments.map(item => renameField(item, '_id', 'id'))
                        );
                    }else{
                        resolve(
                            renameField(affectedDocuments, '_id', 'id')
                        );
                    }
                }
            }
        )
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

function removeAll(db){
    return new Promise((resolve, reject) => {
        db.remove({}, {multi: true}, (error, numRemoved) => {
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
    },
    async removeAll(name){
        const db = createDB(name);
        return removeAll(db);
    }
}