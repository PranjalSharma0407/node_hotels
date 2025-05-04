console.log("Notes file is accessed");

var age = 24;
const addnumber = function(a,b)
{
    return a+b;
}

module.exports = { // yeh module export use nhi krenge toh age access nhi hoga humko jo jo acess krna hai sbko export karana pdega.
    age ,
    addnumber
}
// yeh module export hmesha last mai likha jayega

