const mongoose = require('mongoose');
const { ContactSchema } = require('../models/crmModels');

// création du model de Contact
const Contact = mongoose.model('Contact',ContactSchema);

// export de la methode d'ajout de Contact
exports.addNewContact = (req,res) => {
    const newContact = new Contact( req.body );
    newContact.save( (err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method addNewContact from crmControllers: ', data);
    });
}