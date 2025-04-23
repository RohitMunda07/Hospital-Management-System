import React from 'react';
import Table from './Table';
import Stepper from '../Components/Stepper/Stepper';
import { useSelector } from 'react-redux';

function Transaction() {
    const authStatus = useSelector((state) => state.auth.status);
    const claim = useSelector((state) => state.auth.claim);

    const allClaims = [
        { claimed: '₹1,000', passed: '₹900', month: 'January', year: '2025', remarks: 'Dental Checkup' },
        { claimed: '₹3,000', passed: '₹2,500', month: 'March', year: '2025', remarks: 'Body Checkup' },
        { claimed: '₹2,000', passed: '₹2,000', month: 'February', year: '2025', remarks: 'Eye Specialist Consultation' },
        { claimed: '₹1,500', passed: '₹1,200', month: 'April', year: '2025', remarks: 'Lab Test' },
        { claimed: '₹4,000', passed: '₹3,800', month: 'May', year: '2025', remarks: 'Medicines Purchase' },
        { claimed: '₹2,500', passed: '₹2,000', month: 'June', year: '2025', remarks: 'X-Ray & Ultrasound' },
        { claimed: '₹3,500', passed: '₹3,000', month: 'July', year: '2025', remarks: 'ENT Consultation' },
        { claimed: '₹1,800', passed: '₹1,500', month: 'August', year: '2025', remarks: 'Skin Allergy Treatment' },
    ];

    return (
        <div>
            {authStatus ? (
                <>
                    {claim && <Stepper />}
                    <Table data={allClaims} />
                </>
            ) : (
                <div className="text-center text-red-500 mt-10">Please Login</div>
            )}
        </div>
    );
}

export default Transaction;
