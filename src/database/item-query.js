exports.findAllItems = () => {

    return `
        SELECT * FROM ITEM
    `;
}

exports.findByName = (name) => {
    return `
        SELECT SUM, PROBABILITY FROM ITEM WHERE name='${name}'
    `;

}
exports.modifyProabability=(name, prob,sum)=>{
    return `
        UPDATE ITEM SET PROBABILITY='${prob}', SUM='${sum}' WHERE name='${name}'
    `;
}