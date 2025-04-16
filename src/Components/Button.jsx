import React from 'react'

function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = '#F5F5F5',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`${bgColor} ${textColor} ${className}`}
            {...props}>
            {children}
            
        </button>
    )
}

export default Button
