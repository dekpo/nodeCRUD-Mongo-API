const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exports.ContactSchema = new Schema({
    firstname: {
        type: String,
        required: 'Enter a firstname !!!'
    },
    lastname: {
        type: String,
        required: 'Enter a lastname please'
    },
    email: String,
    company: String,
    company_id: String,
    phone: Number,
    message: String,
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: Date.now
    }
});

exports.EntrepriseSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name !!!'
    },
    type: {
        type: String,
        required: 'Enter a type please'
    },
    address: String,
    site_url: String,
    description: String,
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: Date.now
    }
});