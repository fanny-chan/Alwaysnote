const express = require('express')
const { Notebook } = require('../../../db/models')
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../../utils/auth')


const notebook_router = express.Router();


// Get a notebook
notebook_router.get('/',requireAuth, asyncHandler(async(req,res)=> {
    const notebook = await Notebook.findAll();
    res.json(notebook);
    // res.send("hello world")
}));

// Get specific notebook
notebook_router.get("/:id(\\d+)/",requireAuth, asyncHandler(async(req,res)=> {
    const id = parseInt(req.params.id, 10);
    const notebook = await Notebook.findByPk(id);
<<<<<<< Updated upstream
=======
   
>>>>>>> Stashed changes
    res.json(notebook);
}));

// create a notebook
notebook_router.post('/',requireAuth, asyncHandler(async(req,res)=> {
    const {userId , title} = req.body;
    const newNotebook = await Notebook.create({
        userId: userId,
        title: title,
    });
    res.json(newNotebook);
}));

// // Edit a notebook
notebook_router.patch('/:id',requireAuth, asyncHandler(async(req,res)=> {
    const notebookId = req.params.id;
    const {title} = req.body;
    const notebook = await Notebook.findByPk(notebookId);
    await notebook.update({
        title: title,
    })
    res.json(notebook);
}));

//delete a notebook
notebook_router.delete("/:id",requireAuth, asyncHandler(async(req,res)=> {
    const notebookId = req.params.id;
    const notebook = await Notebook.findByPk(notebookId);
<<<<<<< Updated upstream
    notebook.destroy();
=======
    
    await notebook.destroy();
>>>>>>> Stashed changes
    res.send(200);
})
);

module.exports = notebook_router;