
let express = require('express');
let router = express.Router();

const db = require('../db/myPostGreSQLClient');

let form = require('express-form'),
    field = form.field;

/* Client page. */

    /* -- GET --*/
router.get('/client', (req, res) => {
  res.render('client', { title: 'Client' });
});

    /* -- POST --*/
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
    });


/* Signin page. */

    /* -- GET --*/

router.get('/signin', (req, res) => {
  res.render('signin', { title: 'signin' });
});

    /* -- POST --*/
router.post(
    '/signin',
    form(
        field("name").required(),
        field("surname").required(),
        field("username").required(),
        field("type").required(),
    ),
    (req, res) => {

        if (!req.form.isValid) {
            // Handle errors
            console.log(req.form.errors);

        } else {
            // Or, use filtered form data from the form object:
            console.log("name:", req.form.name);
            console.log("surname:", req.form.surname);
            console.log("username:", req.form.username);
            console.log("type:", req.form.type);
            // TODO insérer le nouveau user dans la bdd
            // TODO gérer le cas où username est déjà utilisé


        }
        res.render('index', {title:"signin ok"});
    });

/* update-id page. */

    /* -- GET --*/

router.get('/update_id', (req, res) => {
  res.render('update_id', { title: 'update_id' });
});

    /* -- POST --*/

router.post(
    '/update_id',
    form(
        field("id").required(),
        field("latitude").required(),
        field("longitude").required()
    ),
    (req, res) => {

        if (!req.form.isValid) {
            // Handle errors
            console.log(req.form.errors);

        } else {
            console.log("id:", req.form.id);
            console.log("latitude:", req.form.latitude);
            console.log("longitude:", req.form.longitude);
            var id=req.form.id;
            var lat=req.form.latitude;
            var long=req.form.longitude;
            db.query('UPDATE users SET long = $1, lat = $2 WHERE id_user = $3', [long,lat,id],(err, datares) => {
                if (err) throw err;
                res.render('index', {title:"update ok"});
            });
        }
    });

/* update-username page. */

    /* -- GET --*/

router.get('/update_username', (req, res) => {
  res.render('update_username', { title: 'update_username' });
});

    /* -- POST --*/

router.post(
    '/update_username',
    form(
        field("username").required(),
        field("latitude").required(),
        field("longitude").required()
    ),
    (req, res) => {

        if (!req.form.isValid) {
            // Handle errors
            console.log(req.form.errors);
            res.send(err);

        } else {
            // Or, use filtered form data from the form object:
            console.log("username:", req.form.username);
            console.log("latitude:", req.form.latitude);
            console.log("longitude:", req.form.longitude);
            var longitude = req.form.longitude;
            var latitude = req.form.latitude;
            var username = req.form.username;
            db.query('UPDATE users SET long = $1, lat = $2 WHERE username = $3', [longitude,latitude,username],(err, datares) => {
                if (err) throw err;
                res.render('index', {title:"update ok"});
            });
        }
    });




router.get('/user',(req,res)=> {
    // aller chercher data dans la base de donné

    db.query('SELECT * FROM users', (err, datares) => {
        if (err) throw err;
        var str = '';
        for (let row of datares.rows) {
            console.log(JSON.stringify(row));
            str = str + JSON.stringify(row);
            res.write(JSON.stringify(row));
        }
    res.send();
    });
})


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
});

module.exports = router;
