var express = require('express');
var router = express.Router();
// some comment
var employes =[
                { nom: "Fahmi BEZZAOUIA", poste: "Formateur permanent", age: 40 },
                { nom: "Sami AYADI", poste: "Formateur permanent", age: 40 },
                { nom: "Brahim OUESLATI", poste: "Formateur permanent", age: 30 },
                { nom: "Hanen OUESLATI", poste: "Formateur permanent", age: 18 },
            ];

/* Retourner la liste des employés en JSON */
router.get('/', function(req, res, next) {
  res.json(employes);
});

module.exports = router;
