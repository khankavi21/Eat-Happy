const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://khankavi:kavikhan@cluster0.5xq9zrm.mongodb.net/foodapp?retryWrites=true&w=majority";

const connectToMongo = async ()=>{
    try{
        const res = await mongoose.connect(mongoURI,{useNewUrlParser:true});
        if(res){
            console.log("Database Connected Successfully");
            let fetched_data = mongoose.connection.db.collection("food_items");
            let data=await fetched_data.find({}).toArray() 
            let foodCategory= mongoose.connection.db.collection("foodCategory");
            const catData = await foodCategory.find({}).toArray()
            global.food_items = data;
            global.foodCategory = catData;
          }
    } catch(error){
        console.log(error);
    }
}

module.exports = connectToMongo;
