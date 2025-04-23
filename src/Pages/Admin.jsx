import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Button, Table } from '../Components/index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminClaimTable from './AdminClaimTable';

function Admin() {
    const navigate = useNavigate();
    const isAdmin = useSelector((state) => state.auth.admin);

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

    const homeClaims = allClaims.slice(0, 4);

    return (
        <div className='flex items-center justify-center min-h-screen'>
            {isAdmin ? (
                <div className='flex flex-col items-center justify-evenly w-full'>
                    <div className='space-x-25'>
                        <Button className='h-[12rem] w-[13.5rem] rounded-4xl hover:shadow-2xl duration-300' style={{ backgroundColor: '#f96d00' }}
                            onClick={() => navigate('/updEmp')}
                        >
                            <ArrowUpwardIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
                            <p>Update Details</p>
                        </Button>
                        <Button className='h-[12rem] w-[13.5rem] rounded-4xl hover:shadow-2xl duration-300' style={{ backgroundColor: '#ffa323' }}
                            onClick={() => navigate('/dump')}
                        >
                            <ArrowCircleDownIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
                            <p>Transaction Dump</p>
                        </Button>
                        <Button className='h-[12rem] w-[13.5rem] rounded-4xl hover:shadow-2xl duration-300' style={{ backgroundColor: '#0b8457' }}
                            onClick={() => navigate('/addEmp')}
                        >
                            <AddIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
                            <p>Add Employee</p>
                        </Button>
                    </div>
                    <div>
                        <AdminClaimTable claims={homeClaims} />
                    </div>
                </div>
            ) : (
                <div className="text-2xl font-semibold text-red-500">
                    Please Login as Admin to access this page!
                </div>
            )}
        </div>
    );
}

export default Admin;
