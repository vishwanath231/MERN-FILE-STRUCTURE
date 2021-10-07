const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moment = require('moment');


const schemaItem = new Schema({

    text: {
        type: String,
        required: [true, "Please add some text..."]
    },
    time: moment().format('lll')
})

const list = mongoose.model('lists', schemaItem);

module.exports = list;