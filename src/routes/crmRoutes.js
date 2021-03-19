const controllers = require('../controllers/crmControllers');

const routes = (app) => {
    // route contacts pour lister et ajouter des contacts
    app.route('/contacts')
    .get( (req,res,next) => {

        //mon middleware pour traiter les demandes
        console.log('Request GET of a user from ' + req.originalUrl );
        next();

    }, (req,res) => {
        res.send('GET method /contacts WORKS !');
    })
    // la méthode POST me permet d'ajouter un nouveau contact
    .post( controllers.addNewContact );

    // route contacts avec param id pour modifier ou supprimer des contacts
    app.route('/contacts/:id')
    .put( (req,res) => {
        res.send('PUT method /contacts/' + req.params.id + ' WORKS !')
    })
    .delete( (req,res) => {
        res.send('DELETE method /contacts/' + req.params.id + ' WORKS !')
    });

}

exports.routes = routes;
