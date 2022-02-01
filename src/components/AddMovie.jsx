import React, { useState } from 'react';
import Modal from 'react-modal';
import StarRating from './StarRating';

const AddMovie = ({add}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(1);
  const [date, setDate] = useState("");

  const handelRating=(rate)=>{
    setRating(rate)
  }
  
  //Submit the newMovie
  const handelSubmit=(e)=>{
    e.preventDefault();
    const newMovieAdd={
      id:Math.random(),name,image,rating,date
    }
    add(newMovieAdd)
    setName("")
    setImage("")
    setDate('')
    closeModal()
  }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
  return <div className='addblock'>
<button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handelSubmit}>
        <label >Movie Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label >Movie Poster</label>
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
        <StarRating  rating={rating} handelRating={handelRating}/>
        <label >Movie Date</label>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
        <div>
          <button type='submit'>Confirm</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </form>
      </Modal>
      
  </div>;
};

export default AddMovie;
