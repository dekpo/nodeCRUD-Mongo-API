const controllers = require('../controllers/crmControllers');

const routes = (app) => {
    // route contacts pour lister et ajouter des contacts
    app.route('/contacts')
    .get( (req,res,next) => {

        //mon middleware pour traiter les demandes
        console.log('Request GET of a user from ' + req.originalUrl );
        next();

    }, controllers.getContacts )
    // la méthode POST me permet d'ajouter un nouveau contact
    .post( controllers.addNewContact );

    // route contacts avec param id pour modifier ou supprimer des contacts
    app.route('/contacts/:id')
    .get( controllers.getContactByID )
    .put( controllers.updateContact )
    .delete( controllers.deleteContact );

}

exports.routes = routes;
