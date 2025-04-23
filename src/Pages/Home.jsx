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

    const DashboardView = () => (
        <>
            <IdCard />
            <Table data={homeClaims} className='' style={{width: "100%"}} />
            <Button className='mt-2' onClick={() => navigate('/log')}>Show More</Button>
        </>
    );

    return (
        <div>
            <div className='bg-[#4DA8DA] min-h-screen min-w-full flex flex-col justify-center items-center'>
                {authStatus ? (
                    <div className='mt-5'>
                        <div className='flex justify-evenly items-center'>
                            <div className='bg-[#1B56FD] flex flex-col items-center justify-center max-w-xl p-5 w-[17rem] h-[15rem] rounded-4xl font- text-3xl shadow-lg shadow-gray-700'>
                                <p className='font-sans'>Total amount</p>
                                <p>₹50,000</p>
                            </div>

                            <div className='bg-[#03A791] flex flex-col items-center justify-center max-w-xl p-5 w-[17rem] h-[15rem] rounded-4xl font- text-3xl shadow-lg shadow-gray-700'>
                                <p className='font-sans'>Passed Amount</p>
                                <p>₹15,000</p>
                            </div>
                        </div>

                        <DashboardView />
                    </div>
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
