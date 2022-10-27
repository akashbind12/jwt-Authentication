const moongose = require("mongoose");

const connect=() =>{
    return  moongose.connect(
        'mongodb://localhost:27017/JobPortalWebnew'
    );
}


module.exports = connect;