import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as noteActions from '../../store/note';
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  
  export default function UpdateNoteModal({noteTitle, noteContent, notebookId}) {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newContent ={
            notebookId,
            title,
            content
        };
        dispatch(noteActions.thunkUpdateNote(newContent))
        closeModal();
    }
      return (
        <div>
        <button onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}> Update Title </h2>
          <button onClick={closeModal}>close</button>
          <form onSubmit = {handleSubmit}>
          <input 
              type="text"
              placeholder={noteTitle}
              value={title}
              onChange={updateTitle}
              required/> 
          <input
            type="text"
            placeholder={noteContent}
            value={content}
            onChange={updateContent}
            required/> 
            <button type="submit">Update Notebook</button>
          </form>
        </Modal>
      </div>
      )
  }
  