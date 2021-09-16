import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as notebookActions from '../../store/notebook';
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

export default function CreateModal({notebookTitle, id}) {

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

    const dispatch =useDispatch();
    const [title, setTitle]= useState('');

    const updateTitle = (e) => setTitle(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data ={
            title,
            id
        };
        dispatch(notebookActions.thunkUpdateNotebook(data));
        closeModal();
    }

    return (
         <div>
      <button onClick={openModal}>Open Modal</button>
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
            placeholder={notebookTitle}
            value={title}
            onChange={updateTitle}
            required/> 
          <button type="submit">Update Notebook</button>
        </form>
      </Modal>
    </div>
    )
}
