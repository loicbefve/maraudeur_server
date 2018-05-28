const form = require('express-form');
const field = form.field;

let express = require('express');
let router = express.Router();

/* Client page. */
router.get('/client', (req, res) => {
  res.render('client', { title: 'Client' });
});

router.post(
    '/client',
    form(
        field("latitude").trim().required().isNumber,
        field("longitude").trim().required().isNumber,
    ),
    (req, res) => {

        if (!req.form.isValid) {
            // Handle errors
            console.log(req.form.errors);

        } else {
            // Or, use filtered form data from the form object:
            console.log("Username:", req.form.username);
            console.log("Password:", req.form.password);
            console.log("Email:", req.form.email);
        }
        res.render('index', {title:"test ça"});
});




/*router.get('/user',(req,res)=>{
  // aller chercher data dans la base de donnée
  data={

    {
      user1:coordonnée
      user2:coordonnée
    }

  }
  res.send(data);
});

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
