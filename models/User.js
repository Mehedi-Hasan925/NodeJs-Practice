const mongodb = require('mongodb')
const getDB = require('../util/database').getDB

const objectId = mongodb.objectId;
class User {
    constructor(Name,email){
        this.Name = Name,
        this.email = email
    }

    save(){
        const db = getDB();
        return db.collection('User').insertOne(this)
        .then(()=>{

        })
        .catch(err=>{
            console.log(err);
        });
    }

    static findById(userId){
        const db = getDb();
        return db.collection('User').findOne({_id: new ObjectId(userId)})
            .then(()=>{

            })
            .catch(err=>{
                console.log(err);
            })
    }
}

module.exports = User;