// on effectue les imports des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
// connection à ma base de données MongoDB
const mongoURI = 'mongodb+srv://dekpo:qi08xn6@cluster0.dgrcq.mongodb.net/CRM_DB?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('MongoDB connected successfully !!!');
});

// on définit le serveur Express et le port
const app = express();
const PORT = 3000;
// express doit comprendre les données encodées en url
app.use(express.urlencoded({ extended: true}));
// express doit gérer le format json
app.use(express.json());
// chargement de mes routes
const router = require('./src/routes/crmRoutes');
// on fait passer l'app Express dans notre methode routes
router.routes(app);

// on a la route / principale
app.get('/', (req,res) => {
    res.send('Express server is running on port: ' + PORT );
});

// le serveur Express écoute le port 3000
app.listen(PORT, () => {
    console.log('Express server is ALIVE !');
});