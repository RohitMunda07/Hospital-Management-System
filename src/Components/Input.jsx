import React, { useId } from 'react'

const Input = React.forwardRef(function Input({ label, type = 'text', className = '', ...props }, ref) {
    const id = useId();
    return (
        <div className='flex flex-col mt-2'>
            {label &&
                <label className="text-xl text-start mb-2" htmlFor={id}>{label}</label>
            }


            <input
                type={type}
                ref={ref}
                className={`text-black border-2 border-black outline-2 ${className}`}
                style={{ width: "18rem", height: "3.5rem" }}
                {...props}
            >

            </input>
        </div>
    )
})

export default Input
