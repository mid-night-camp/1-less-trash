const itemQuery = require('../database/item-query');
const db=require('../config/db-config');

exports.findAllItems =(connection) =>{

    return new Promise((resolve,reject) => {
        db.query(itemQuery.findAllItems(), (err, result) => {
            if (err) {
                console.log('repo에서 err발생');
                reject(err);
            }   
            
            resolve(result);
        });
    });
}

exports.findByName =(itemInfo)=>{
    return new Promise((resolve,reject) => {
        db.query(itemQuery.findByName(itemInfo), (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });

    });
}
exports.modifyProabability = (name, probaility,sum)=>{
    return new Promise((resolve,reject) => {
        db.query(itemQuery.modifyProabability(name, probaility,sum), (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
})
}