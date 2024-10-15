import express from "express";
import Weather from '../models/weatherModel.js'
import { ObjectId } from 'mongodb';

const router = express.Router();

//get route for weather
router.get('/', async (req, res) => {
    const results = await Weather.find({}).limit(10);
    res.send(results).status(200);
});

//pout route for weather
router.post("/", async (req,res) => {
    try {
        const result = await Weather.create({
            city:req.body.city,
            country:req.body.country,
            temperature:req.body.temperature,
            description: req.body.description,
            icon:req.body.icon
        })
    console.log(result);
    res.send(result);
    } catch(e) {
        console.log(e);
    }
});
//delete route for weather
router.delete("/:id", async(req,res) =>{
    try {
       const query = { _id: new ObjectId(req.params.id)}
       let result = await Weather.deleteOne(query) ;
       res.send(result).status(200);
    } catch (e) {
      console.log(e);
      res.send(e).status(404);
    }
});

export default router;