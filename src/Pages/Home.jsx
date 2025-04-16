import React from 'react';
import Container from '../Components/Container';
import IdCard from '../Components/IdCard';
import { Button } from '../Components/index';
import Upload from '../Components/Upload';
import Form from './Form';
import { useSelector } from 'react-redux';

function Home() {
    const authStatus = useSelector((state) => state.auth.status);
    console.log("Current AuthStatus: ", authStatus);  // Moved outside return

    return (
        <div>
            <section className='bg-[#4DA8DA] mx-auto min-h-screen flex justify-center items-center'>
                {authStatus ? (
                    <IdCard />
                ) : (
                    <div className="text-white text-2xl font-semibold">
                        Please Login!!
                    </div>
                )}
            </section>
        </div>
    );
}

export default Home;
