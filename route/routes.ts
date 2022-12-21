const router = require('express').Router()
const Recipe = require("../models/recipeModel");


router.get('/recipes', (req: any, res: { json: (arg0: any) => void; }) => {
    Recipe.find()
    .then((FoundRecipe: any) => {
        res.json(FoundRecipe)
        
    })
    .catch((err: any) => {
        console.log("err")
    })
})

router.get('/recipes/:id', (req: { params: { id: number; }; }, res: { json: (arg0: any) => void; }) => {
    Recipe.findById(req.params.id)
    .then((FoundRecipe: any) => {
        res.json(FoundRecipe)
    })
})


//

router.route("/recipes/new").post((req: { body: { name: string; picture: string; instructions: string; type: string; }; }, res: any)=>{
    const name = req.body.name;
    const pic = req.body.picture;
    const instructions = req.body.instructions;
    const type = req.body.type;
    const newRecipe = new Recipe({
        name,
        pic,
        instructions,
        type,
    });
    newRecipe.save();
})

router.put('/recipes/:id/edit', (req: { params: { id: number; }; body: { name: string; pic: string; instructions: string; type: string; }; }, res: { send: (arg0: string) => void; }) => {
    const id = req.params.id;
    const newName = req.body.name;
    const newPic = req.body.pic;
    const newInstructions = req.body.instructions;
    const newType = req.body.type
    Recipe.findById(id, (error: any, updateRecipe: { name: string; pic: string; instructions: string; type: string; save: () => void; }) =>{
       updateRecipe.name = newName;
       updateRecipe.pic = newPic;
       updateRecipe.instructions = newInstructions;
       updateRecipe.type = newType;
        updateRecipe.save()
    });
    res.send('well done')
}) 

router.delete('/recipes/:id', (req: { params: { id: number; }; }, res: any) => {
    const deleteId = (req.params.id)
    Recipe.findByIdAndDelete(deleteId).exec()
})
    module.exports = router;
