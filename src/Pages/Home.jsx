import React from 'react'
import Container from '../Components/Container'
import IdCard from '../Components/IdCard'
import { Button } from '../Components/index'
function Home() {
    return (
        <div>

            <section className='bg-[#4DA8DA] mx-auto' style={{ height: "80vh" }}>
                <IdCard />
            <Button className='mt-5'>Claim Amount</Button>
            </section>

        </div>
    )
}

export default Home
