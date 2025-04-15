import React from 'react'
import { Logo } from './index'
import Container from './Container'
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function Header() {
    // const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Transaction",
            path: "/transaction"
        }
    ]
    return (
        <header className='bg-[#003366]' style={{ width: "full" }}>
            <Container>
                <nav className='flex justify-around items-center max-w-7xl mx-auto'>
                    <div>
                        <Logo />
                    </div>
                    <ul className='flex gap-x-2 text-xl'>
                        {
                            navItems.map(item => (
                                <li key={item.name}>
                                    <button
                                    // onClick={() => navigate(item.path)}

                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <div className='rounded-full '>
                            <button className='rounded-full p-1 flex justify-center items-center' style={{borderRadius: "55%", background: "#F5F5F5", width: "3rem", height: "3rem"}}>
                                <PersonIcon className='text-blue-600 text-xl' />
                            </button>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
