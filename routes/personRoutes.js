const express = require('express');
const router = express.Router();
const Person = require('../models/person');

 // PERSON POST REQUEST SERVER SE UTHA KR IDHR PASTE KRDI
 // app ki jgh pr router likh denge
router.post('/person', async(req,res)=>{
  try{

    const data = req.body; // because data body parser  se hote hue req.body m jaa rha hai.

    // create a new person document(row table) using moongose model
    const newPerson = new Person(data);

    // save the new person to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
     

  }
  catch(error){
    console.log(error);
    res.status(500).json({error:'internal server error'});
  }
})

//  get methodd to get the person
router.get('/',async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('Data Fetched Successfully');
        res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })


  // Get Method to get specific data from person databse
  
  router.get('/person/:workType',async(req,res)=>{
    try{
      const workType = req.params.workType; // extract the worktype from the url parameters
      if(workType == 'chef'|| workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'Invalid Work Type'});
      }
    } 
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  // Update Operation

  router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; // Extract Id from the url parameter
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
          new: true, // return the updated data
          runValidators: true// run the mongoose validator
        })

        if(!response){
          return res.status(404).json({error: 'Person Not Found'});
        }

        console.log('Data Updated');
        res.status(200).json(response);

    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
   
  })

  // Delete  a Record

  router.delete('/:id', async(req,res)=>{
    try{

      const personId = req.params.id;// Extract the person id
      const response = await Person.findByIdAndDelete(personId);
      
      
      if(!response){
        return res.status(404).json({error: 'Person Not Found'});
      }
      
      console.log('Person Deleted Successfully');
      res.status(200).json(response);

    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

module.exports = router;