import React from 'react'
import { Link } from 'react-router-dom';

const TableRow = ({ candidate, isPending }) => {
    const { firstName, lastName, email, phoneNumber, notes, id } = candidate;
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{notes}</td>
            {isPending &&
                <td>
                    <Link to={`/Details/${id}`}>
                        Details
                    </Link>
                </td>}
        </tr>
    )

}
export default TableRow;