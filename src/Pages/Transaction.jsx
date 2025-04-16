import React from 'react';
import Table from './Table';
import Stepper from '../Components/Stepper/Stepper';
import { useSelector } from 'react-redux';

function Transaction() {
    const authStatus = useSelector((state) => state.auth.status);

    return (
        <div>
            {authStatus ? (
                <>
                    <Table />
                    <Stepper />
                </>
            ) : (
                <div className="text-center text-red-500 mt-10">Please Login</div>
            )}
        </div>
    );
}

export default Transaction;
