import React from 'react'

function Logo({ width = "100px" }) {

    return (
        <div>
            <img src="/logo1.png" alt="logo" width={width} />
        </div>
    )
}

export default Logo
