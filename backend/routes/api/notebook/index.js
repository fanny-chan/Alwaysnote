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
notebook_router.delete("/:notebookId(\\d+)",requireAuth, asyncHandler(async(req,res)=> {
    const {notebookId} = req.params;
    const notebook = await Notebook.findByPk(notebookId);

    notebook.destroy();

    
    await notebook.destroy();

    // console.log("I AM HERE")
    // console.log(notebook)
    // console.log(notebookId)
    await notebook.destroy();

    res.send(200);
})
);

module.exports = notebook_router;