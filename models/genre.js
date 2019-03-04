var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: {type:String, enum:['Fiction', 'Non-Fiction', 'Military', 'Romance'], minlength: 3, maxlength:100 } 
});


GenreSchema
.virtual('url')
.get(function(){
    return '/catalogs/genre/' + this._id;
})

module.exports = mongoose.model("Genre" , GenreSchema);

