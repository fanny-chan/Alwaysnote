const express = require('express')
const { Note } = require('../../../db/models')
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../../utils/auth')
const note_router = express.Router();

// Get all notes
note_router.get('/',requireAuth,asyncHandler(async(req,res) => {
    const note = await Note.findAll();
    res.json(note);
}))

// Get specific note
note_router.get('/:id(\\d+)/',requireAuth, asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id,10);
    const note = await Note.findByPk(id);
    res.json(note);
}));

// create a note
note_router.post('/',requireAuth, asyncHandler(async(req,res) => {
    const {userId, notebookId, title, content} = req.body;
    const newNote = await Note.create({
        userId: userId,
        notebookId: notebookId,
        title: title,
        content: content,
    })
    res.json(newNote);
}));

// Edit a note
note_router.post('/:id', requireAuth,asyncHandler(async(req,res)=> {
    const noteId = req.params.id;
    const {userId, notebookId,title, content} = req.body;
    const note = await Note.findByPk(noteId);
    await note.update({
        userId: userId,
        notebookId: notebookId,
        title: title,
        content:content,
    })
    res.json(note);
}));

// delete a note
note_router.delete("/:noteId(\\d+)",requireAuth, asyncHandler(async(req,res)=> {
    const{ noteId }= req.params;
    const note = await Note.findByPk(noteId);
    console.log(note)
    console.log(noteId)
    note.destroy();
    res.send(200);

})
);



module.exports = note_router;