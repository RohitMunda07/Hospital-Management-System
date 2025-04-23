import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Logo } from '../index'
import Container from '../Container'
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

function Header() {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const navItems = [
        {
            name: "Home",
            path: "/",
            active: authStatus,
        },
        {
            name: "Transaction",
            path: "/log",
            active: authStatus,
        },
        {
            name: "Claim Request",
            path: "/form",
            active: authStatus,
        },
        {
            name: "Login",
            path: "/login",
            active: !authStatus, // it means if not login then show login tab
        },
        {
            name: "Support",
            path: "/support",
            active: authStatus
        }

    ]
    return (
        <header className='bg-[#003366]' style={{ width: "full" }}>
            <Container>
                <nav className='flex justify-around items-center max-w-7xl mx-auto'>
                    <div>
                        <Button
                            onClick={() => navigate('/')}
                            style={{ border: "0" }}
                        >
                            <Logo />
                        </Button>

                    </div>
                    <ul className='flex gap-x-2 text-xl items-center'>
                        {console.log("Current AuthStatus: ", authStatus)}
                        {
                            navItems.map(item => (
                                (item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.path)}
                                            className='rounded-full'
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null)
                            ))
                        }


<LogoutBtn />
                        {authStatus && (
                            <li>
                            </li>
                        )}
                    </ul>
                    <div>
                        <div className='rounded-full '>
                            <button className='rounded-full p-1 flex justify-center items-center' style={{ borderRadius: "55%", background: "#F5F5F5", width: "3rem", height: "3rem" }}>
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
