import React, { useState } from 'react';
import Modal from 'react-modal';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StarRating from './StarRating';

const EditMovie = ({modify,edited}) => {
    
    const [newname, setNewname] = useState(modify.name);
    const [newimage, setNewimage] = useState(modify.image);
    const [newrating, setNewrating] = useState(modify.rating);
    const [newdate, setNewdate] = useState(modify.date);

    const handelRating=(rate)=>{
        setNewrating(rate)
      }

    const handelSubmit=(e)=>{
        e.preventDefault();
        const editedInput ={
            id:modify.id,image:newimage,rating:newrating,name:newname,date:newdate
        }
 edited(editedInput)
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
  return <div className='choice'>
      <PlayCircleOutlineIcon style={{marginRight:'10px',marginTop:'7px'}}> </PlayCircleOutlineIcon>
      <SettingsSuggestIcon onClick={openModal}></SettingsSuggestIcon>
 <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <form onSubmit={handelSubmit}>
        <label >Movie Name</label>
        <input type="text" value={newname}  onChange={(e) => setNewname(e.target.value)} />
        <label >Movie Poster</label>
        <input type="text" value={newimage} onChange={(e) => setNewimage(e.target.value)}/>
        <StarRating  rating={newrating} handelRating={handelRating} />
        <label >Movie Date</label>
        <input type="date" value={newdate} onChange={(e) => setNewdate(e.target.value)} />
        <div>
          <button type='submit'>Confirm</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </form>
      </Modal>

  </div>;
};

export default EditMovie;
