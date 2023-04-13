const express = require('express');
const router = express.Router();

//get User model
const User = require('../models/user');
//const User = require(path.join(__dirname, '/models/user'));

//get all
 router.get('/usuarios', async (req, res) =>{
    /*User.find( {}, (err, users) =>{
     return res.json(users);
    });*/
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err);
    }
 });

// //add
router.post('/usuarios', async (req, res) =>{
    //borrar el campo que no es necesario en mi models definido en Node
    delete req.body._id;
    try {
        console.log('body ',req.body);
        const user = new User({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            editable: req.body.editable
          });
          user.save().then(val => {
            res.json({ msg: "Usuario Added Successfully", val: val })
          })
        /*await User.create(req.body, (err, user) =>{
            if(err){
                res.json(err);
            }
            else res.json(user);
        });    */
    } catch (err) {
        res.status(500).json(err);
    }
    /*User.create(req.body, (err, user) =>{
        if(err){
            res.json(err);
        }
        else return res.json(user);
    })*/
});

//update
router.put('/usuarios/:id', async (req, res) =>{
    //borrar el campo que no es necesario en mi models definido en Node
    //delete req.body._id;
    try {
        console.log('body put ',req.body);
        console.log('params put ',req.params);        
          /*User.update(req.body, {
            where: {
              _id: req.params.id
            }
          }).then(val => {
            res.json({ msg: "Usuario Updated Successfully", val: val })
          })*/
          /*await User.update({ _id: req.params.id}, req.body, (err, user) =>{
            if(err){
                res.json(err);
            }
            else res.json(user);
          }).then(val => {
            res.json({ msg: "Usuario Updated Successfully.", val: val })
          });*/
          
          
          //funciona
          const filter = { _id: req.params.id };
          const update = req.body;
          await User.findOneAndUpdate(filter, update, {
            rawResult: true
          }).then(val => {
            res.json({ msg: "Usuario Updated Successfully", val: val })
          });
    } catch (err) {
        res.status(500).json(err);
    }
});

//borrar registro
router.delete('/usuarios/:id', async (req, res) => {
    const filter = { _id: req.params.id };
          const update = req.body;
          await User.deleteOne(filter).then(val => {
            res.json({ msg: "Usuario deleted Successfully", val: val })
          });
    /*await User.deleteOne({_id: req.params.id}, (err, user) => {
        if(err){
            res.json(err);
        } else {
            res.json(user);
        }
    }).then(val => {
        res.json({ msg: "Usuario Updated Successfully", val: val })
      });*/

    /*await User.remove({ _id: req.params.id }).then((result) => {
        res
         .status(200)
         .json({ message: "User deleted", })
         .catch((err) => {
          res.status(500).json({
           error: err,
          });
         });
       });  */
    /*try {   
       await User.deleteOne({_id: req.params.id}, (err, data) =>{
            if (err) {
            res.status(400).send(err);
            } else {
            res.status(200).send(req.body);
            }
        }).then(val => {
            res.json({ msg: "Usuario Deleted Successfully", val: val })
        });
    } catch (err) {
        res.status(500).json(err);
    }        */   
});

module.exports = router;