import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Button } from '../Components/index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Admin() {
    const navigate = useNavigate();
    const isAdmin = useSelector((state) => state.auth.admin);

    return (
        <div className='flex items-center justify-center min-h-screen'>
            {isAdmin ? (
                <div className='flex items-center justify-evenly w-full'>
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
            ) : (
                <div className="text-2xl font-semibold text-red-500">
                    Please Login as Admin to access this page!
                </div>
            )}
        </div>
    );
}

export default Admin;
