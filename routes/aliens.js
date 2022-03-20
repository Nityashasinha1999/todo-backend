const express = require('express')

const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await(Alien.findById(req.params.id))
           res.json(alien)
           console.log(alien, req.params, "hh")
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        title: req.body.title,
        desc: req.body.desc,
        status: req.body.status
    })

    try{
        const a1 =  await alien.save() 
        // res.json(a1 )
        res.status(200).json({success: true, data: a1})
    }catch(err){
        res.json('error')
        console.log(err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.status = req.body.status
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.get('/delete/(:id)', function(req, res, next) {
    Alien.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            // res.redirect('/');
            res.status(200).json({success: true})
            console.log("deleted")
        } else {
            console.log('Failed to Delete user Details: ' + err);
            res.status(400).json({success: false})
        }
    });
})
 
module.exports = router