import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { useTrackerContext } from '../TrackerContext.js';

const AddCandidate = () => {
    const history = useHistory();
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: '',
        registrationStatus: ''
    });

    const { updatePendingCount } = useTrackerContext();
    const onSubmitClick = async () => {
        candidate.registrationStatus = "pending";
        await axios.post('/api/home/addcandidate', candidate);
        updatePendingCount();
        history.push('/');

    };
    const onTextChange = e => {
        setCandidate({
            ...candidate,
            [e.target.name]: e.target.value
        }
        );
    };



    return (
        <div className='container'>

            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card-body'>
                        <h4>Add Candidate</h4>

                        <input type="text" placeholder='First Name' className='form-control mt-2' onChange={onTextChange} name="firstName"></input>
                        <input type="text" placeholder='Last Name' className='form-control mt-2' onChange={onTextChange} name="lastName"></input>
                        <input type="text" placeholder='Email' className='form-control mt-2' onChange={onTextChange} name="email"></input>
                        <input type="text" placeholder='Phone Number' className='form-control mt-2' onChange={onTextChange} name="phoneNumber"></input>
                        <textarea rows="5" className="form-control mt-2" name="notes" onChange={onTextChange}></textarea>
                        <button className='btn btn-block btn-primary btn-lg mt-3' onClick={onSubmitClick}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default AddCandidate;