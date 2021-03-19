const mongoose = require('mongoose');
const { ContactSchema, EntrepriseSchema } = require('../models/crmModels');

// création du model de Contact
const Contact = mongoose.model('Contact',ContactSchema);
// création du model de Entreprise
const Entreprise = mongoose.model('Entreprise',EntrepriseSchema);

/* -------------------------- Méthodes Contacts -------------------------------- */

// export de la methode d'ajout de contact
exports.addNewContact = (req,res) => {
    const newContact = new Contact( req.body );
    newContact.save( (err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method addNewContact from crmControllers: ', data);
    });
}
// export de la methode d'affichage de tous les contacts
exports.getContacts = (req,res) => {
    Contact.find({},(err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method getContacts from crmControllers: ', data);
    });
}
// export de la methode d'affichage d'un contact par son id
exports.getContactByID = (req,res) => {
    Contact.find({ _id:req.params.id },(err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method getContactByID from crmControllers: ', data);
    });
}
// export de la methode de modif d'un contact par son id
exports.updateContact = (req,res) => {
    Contact.findByIdAndUpdate( req.params.id, req.body,  {new:true } ,(err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method updateContact from crmControllers: ', data);
    });
}
// export de la methode de suppression d'un contact par son id
exports.deleteContact = (req,res) => {
    Contact.deleteOne( { _id:req.params.id }, (err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method deleteContact from crmControllers: ', data);
    });
}

/* -------------------------- Méthodes Entreprises -------------------------------- */

// export de la methode d'ajout d'entreprise
exports.addNewEntreprise = (req,res) => {
    const newEntreprise = new Entreprise( req.body );
    newEntreprise.save( (err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method addNewEntreprise from crmControllers: ', data);
    });
}
// export de la methode d'affichage de toutes les entreprises
exports.getEntreprises = (req,res) => {
    Entreprise.find({},(err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method getEntreprises from crmControllers: ', data);
    });
}
// export de la methode d'affichage d'une entreprise par son id
exports.getEntrepriseByID = (req,res) => {
    Entreprise.find({ _id:req.params.id },(err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method getEntrepriseByID from crmControllers: ', data);
    });
}
// export de la methode de modif d'une entreprise par son id
exports.updateEntreprise = (req,res) => {
    Entreprise.findByIdAndUpdate( req.params.id, req.body,  {new:true } ,(err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method updateEntreprise from crmControllers: ', data);
    });
}
// export de la methode de suppression d'une entreprise par son id
exports.deleteEntreprise = (req,res) => {
    Entreprise.deleteOne( { _id:req.params.id }, (err,data) => {
        if (err) res.send(err);
        res.json(data);
        console.log('Method deleteEntreprise from crmControllers: ', data);
    });
}