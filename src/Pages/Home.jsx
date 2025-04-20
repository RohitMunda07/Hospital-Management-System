import React from 'react';
import Container from '../Components/Container';
import IdCard from '../Components/IdCard';
import { Button, Table } from '../Components/index';
import Upload from '../Components/Upload';
import Form from './Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate()
    console.log("Current AuthStatus: ", authStatus);  // Moved outside return

    const DashboardView = () => (
        <>
            <IdCard />
            <Table className='min-w-7xl' />
            <Button className='mt-2' onClick={() => navigate('/log')}>Show More</Button>
        </>
    );


    return (
        <div>
            <div className='bg-[#4DA8DA] min-h-screen min-w-full flex flex-col justify-center items-center'>
                {authStatus ? (
                    <DashboardView />
                ) : (
                    <div className="text-white text-2xl font-semibold">
                        Please Login!!
                    </div>
                )}

            </div>
        </div>
    );
}

export default Home;
