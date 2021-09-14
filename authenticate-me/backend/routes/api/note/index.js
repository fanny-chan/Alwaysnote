const express = require('express')
const { Note } = require('../../../db/models')
const asyncHandler = require('express-async-handler');

const note_router = express.Router();

// Get a note
note_router.get('/', asyncHandler(async(req,res) => {
    const note = await Note.findAll();
    res.json(note);
}))

// Get specific note
note_router.get('/:id(\\d+)/', asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id,10);
    const note = await Note.findByPk(id);
    res.json(note);
}));

// create a notebook
note_router.post('/', asyncHandler(async(req,res) => {
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
note_router.patch('/:noteId', asyncHandler(async(req,res)=> {
    const noteId = req.params.id;
    const {title, content} = req.body;
    const note = await Note.findByPk(noteId);
    await note.update({
        title: title,
        content:content,
    })
    res.json(note);
}));

// delete a note
note_router.delete("/:id", asyncHandler(async(req,res)=> {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    note.destroy();
    res.send(200);
})
);



module.exports = note_router;