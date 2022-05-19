import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableRow from '../Components/TableRow';


const Pending = () => {

    const [pendingCandidates, setPendingCandidates] = useState([]);

    useEffect(() => {
        const getPendingCandidates = async () => {
            const { data } = await axios.get('/api/home/getpendingcandidates');
            setPendingCandidates(data);
        }
        getPendingCandidates();
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
                    {pendingCandidates.map(c =>
                        <TableRow
                            candidate={c}
                            key={c.id}
                            isPending={true}
                        />
                    )}
                </tbody>
            </table>
        </div>

    )
}
export default Pending;