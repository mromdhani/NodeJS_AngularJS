var express = require('express');
var router = express.Router();

var Employe = require("../mappings/employe");


/* GET users listing. */
router.get('/', function(req, res, next) {

    
    console.log("Je suis dans le controleur get all !!")
    Employe.find( function (err, resultat) {
            console.log(resultat);
            res.json( resultat);
    } );


});
// Route pour ajout d'un employe
router.post('/', function(req, res, next) {

      var a_ajouter = new Employe(req.body); // Le middleware body-parser fera le travail
      a_ajouter.save( function (err) {
          if (err)
              return res.send (err);
          res.send({"Message": "Employe ajoute avec success"}) ;

      });


});



module.exports = router;
