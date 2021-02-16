import React, { useState, useEffect } from 'react';
import {Modal,Button} from 'react-bootstrap';



const AddMovie = ({addMovie}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Title, setTitle] = useState('');
    const [Year, setYear] = useState('');
    const [Rate, setRate] = useState(0);
    const [Type, setType] = useState(0);
    const [Poster, setPoster] = useState('');

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="bamovie">
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} className="mamovie">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movies</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="column">
                        <div className="row">
                            <span>Title</span>
                            <input type="text"
                                onChange={(e)=>setTitle(e.target.value)}
                                placeholder="Plz enter the movie Title" />
                        </div>
                        <div className="row">
                            <span>Year</span>
                            <input type="text"
                                onChange={(e)=>setYear(e.target.value)}
                                placeholder="Plz enter the movie year" />
                        </div>
                        <div className="row">
                            <span>Rate</span>
                            <input type="number"
                                onChange={(e)=>setRate(e.target.value)}
                                placeholder="Plz enter the movie Rate" />
                        </div>
                        <div className="row">
                            <span>Type</span>
                            <input type="text"
                                onChange={(e)=>setType(e.target.value)}
                                placeholder="Plz enter the movie type" />
                        </div>
                        <div className="row">
                            <span>Poster</span>
                            <input type="text"
                                onChange={(e)=>setPoster(e.target.value)}
                                placeholder="Plz enter the movie Poster" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{addMovie(Title,Year,Rate,Type,Poster);setShow(false)}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie
