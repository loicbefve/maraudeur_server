
let express = require('express');
let router = express.Router();
let client = require('../db/myPostGreSQLClient');

let bodyParser = require('body-parser'),
    form = require('express-form'),
    field = form.field;

/* Client page. */
router.get('/client', (req, res) => {
  res.render('client', { title: 'Client' });
});

router.post(
    '/client',
    form(
        field("latitude").required().is(/^[0-9]+.?[0-9]*/),
        field("longitude").required().is(/^[0-9]+.?[0-9]*/),
    ),
    (req, res) => {

        if (!req.form.isValid) {
            // Handle errors
            console.log(req.form.errors);

        } else {
            // Or, use filtered form data from the form object:
            console.log("Latitude:", req.form.latitude);
            console.log("Longitude:", req.form.longitude);


        }
        res.render('index', {title:"test ça"});
    }
);


router.get('/user',(req,res)=>{
  // aller chercher data dans la base de donnée
  client.connect();

  client.query('SELECT * FROM user;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });

  /*
  data={

    {
      user1:coordonnée
      user2:coordonnée
    }

  }
  res.send(data);
  */
});


/*

router.get('/user:id',(req,res)=>{
  // aller chercher data dans la base de donnée
  data={

    {
      user1:coordonnée
    }

  }
  res.send(data);

});

router.post('/user',(req,res)=>{
  // rajouter ce user à la base de données
});

router.put('/user:id',(req,res)=>{
  // mettre à jour la position de cet id
});

router.delete('/user',(req,res)=>{
  //supprimer ce user de la DB
});*/


router.get('/admin',(req,res)=>{
  res.render('index', { title: 'the marauder webpage' });
})

module.exports = router;
