import React from 'react'
import Container from '../Components/Container'
import IdCard from '../Components/IdCard'
import { Button } from '../Components/index'
import Upload from '../Components/Upload'
import Form from './Form'
import { useSelector } from 'react-redux'

function Home() {
    
    const authStatus = useSelector((state) => state.auth.status);

    return (
        <div>

            <section className='bg-[#4DA8DA] mx-auto'>
            {console.log("Current AuthStatus: ", authStatus)}
                {authStatus ? (<IdCard />) : "Please Login!!"}

            </section>

        </div>
    )
}

export default Home
