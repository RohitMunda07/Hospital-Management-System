import React from 'react'
import Container from './Container'

function IdCard({ data }) {
    return (
        <div className='max-w-2xl mx-auto mt-20'>
            <div className='bg-[#F5F5F5] text-black text-start py-7 text-4xl rounded-4xl'>
                <h2 className='text-5xl text-center font-semibold'>Medical Card</h2>
                <div className='flex flex-col justify-evenly items-center'>
                    <div className='mt-3 flex items-center gap-x-36'>
                        <h2 className='font-Jost'>Jhon Doe</h2>
                        <div className=''>
                            <img src="./pic.png" alt=""/>
                        </div>

                    </div>

                    <div className='flex items-center mt-5'>
                        <h2 className='max-w-[20rem]'>(815) 436-6914
                            21949 W Renwick Rd
                            Plainfield, Illinois(IL), 60544
                        </h2>
                        <div>
                            <img src="./qr.png" alt="" className='w-32 h-32' />
                        </div>
                    </div>
                    <div className='mt-5 space-x-8'>
                        <span>ID:</span><span>ABC12XTY25</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IdCard
