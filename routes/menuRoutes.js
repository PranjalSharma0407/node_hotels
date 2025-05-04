const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');


// Get Method for Menu

router.get('/', async(req,res)=>{
    try{
      const menuData = await MenuItem.find();
      console.log('Data Fetched Successfully');
      res.status(200).json(menuData);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })
  
  // Post Method for menu
  
  router.post('/', async(req,res)=>{
    try{
      const menuData = req.body;
      // create new menu document using mongoose model
  
      const newMenu = new MenuItem(menuData);
      // Save the new menu tot he database
  
      const response = await newMenu.save();
      console.log("Data Saved");
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  //GET METHOD OF SPECIFIC DATA FROM THE MENU

  router.get('/:taste',async(req,res)=>{
    try{
      const tasteType = req.params.taste;
      if(tasteType == 'Sweet'|| tasteType == 'Sour' || tasteType == 'Spicy')
      {
        const response = await MenuItem.find({taste: tasteType});
        console.log('response fetched');
        res.status(200).json(response);
      }

    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  //Update a Record

  router.put('/:id', async(req,res)=>{
    try{

      const menuID = req.params.id; // extract id from the url
      const updatedMenuData = req.body;

      const response  = await MenuItem.findByIdAndUpdate(menuID, updatedMenuData,{
        new: true,
        runValidators: true
      })

      if(!response){
        return res.status(404).json({error:'menu item not found'});
      }
      console.log('data updated successfully');
      res.status(200).json(response);

    }
    catch(err){

      console.log(err);
      res.status(500).json({error:'internal server error'});      

    }
  })

  // Delete a Record

  router.delete('/:id', async(req,res)=>{
    try{
      const menuID = req.params.id; // extract id from the url
      const response = await MenuItem.findByIdAndDelete(menuID);

      if(!response){
        return res.status(404).json({error:'Item Not Found'});
      }
      console.log('Item Deleted Successfully');
      res.status(200).json(response);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:"Internal Server Error"});
    }
  })
  

  module.exports = router;