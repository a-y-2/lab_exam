const route = require("express").Router();

const Record = require("./model");

route.get("/",async (req, res) => {
  try {
    const found = await Record.find();
    res.json(found);
  } catch (err) {
    console.log(err)
  }

});

route.get("/records", async(req, res) =>{
  res.send("Hello")
  try {
    const found = await Record.find();
    res.json(found);
  } catch (err) {
    console.log(err)
  }
})

route.post("/", async (req, res) => {
  const username = req.body.username;
  const time = req.body.time;
  const date = req.body.date;
  const mood = req.body.mood;
  
        const item = new Record({
          username: username,
          time: time,
          date:date,
          mood:mood
        })
        try {
          const result = await item.save();
        } catch (err) {
          console.log(err);
        }
    
    
  
});



// route.delete("/:id",async (req, res) => {
//   const delID = req.params.id
//   try {
//     const deletedItem = await Feedback.deleteOne({_id: delID});
//     res.json(deletedItem);
//   } catch (err) {
//     console.log(err)
//   }
// });

module.exports = route;
