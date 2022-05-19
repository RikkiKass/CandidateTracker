import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableRow from '../Components/TableRow';


const Confirmed = () => {

    const [confirmedCandidates, setConfirmedCandidates] = useState([]);

    useEffect(() => {
        const getConfirmedCandidates = async () => {
            const { data } = await axios.get('/api/home/getconfirmedcandidates');
            setConfirmedCandidates(data);
        }
        getConfirmedCandidates();
    }, []);


    return (
        <div className='container'>
            <table className='table table-bordered table-hover table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {confirmedCandidates.map(c =>
                        <TableRow
                            candidate={c}
                            key={c.id}
                            isPending={false}
                        />
                    )}
                </tbody>
            </table>
        </div>

    )
}
export default Confirmed;