import React from 'react'
import Table from './Table'
import Stepper from '../Components/Stepper/Stepper'
import { useSelector } from 'react-redux';

function Transaction() {
    const authStatus = useSelector((state) => state.auth.status);
    return (
        <div>
            {authStatus ? (
                < Table />,
                <Stepper />
            ) : "Please Login"}

        </div>
    )
}

export default Transaction
