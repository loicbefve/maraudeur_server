var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user',(req,res)=>{
  // aller chercher data dans la base de donnée
  data={
    /*
    {
      user1:coordonnée
      user2:coordonnée
    }
   */
  }
  res.send(data);
});

router.get('/user:id',(req,res)=>{
  // aller chercher data dans la base de donnée
  data={
    /*
    {
      user1:coordonnée
    }
   */
  }
  res.send(data);

});

router.post('/user',(req,res)=>{
  // rajouter ce user à la base de données
});

router.update('/user:id',(req,res)=>{
  // mettre à jour la position de cet id
});

router.delete('/user',(req,res)=>{
  //supprimer ce user de la DB
});

module.exports = router;
