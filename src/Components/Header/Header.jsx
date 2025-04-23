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
    const admin = useSelector((state) => state.auth.admin); // ✅ get admin
    const isLoggedIn = authStatus || admin; // ✅ universal check

    const navItems = [
        {
            name: "Home",
            path: "/",
            active: isLoggedIn,
        },
        {
            name: "Transaction",
            path: "/log",
            active: isLoggedIn,
        },
        {
            name: "Claim Request",
            path: "/form",
            active: isLoggedIn,
        },
        {
            name: "Login",
            path: "/login",
            active: !isLoggedIn,
        },
        {
            name: "Support",
            path: "/support",
            active: isLoggedIn
        }
    ];

    return (
        <header className='bg-[#003366]'>
            <Container>
                <nav className='flex justify-around items-center max-w-7xl mx-auto'>
                    {/* Logo */}
                    <div>
                        <Button onClick={() => navigate('/')} style={{ border: "0" }}>
                            <Logo />
                        </Button>
                    </div>

                    {/* Nav items */}
                    <ul className='flex gap-x-4 text-xl items-center text-white'>
                        {
                            navItems.map(item => (
                                item.active && (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.path)}
                                            className='hover:underline'
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                )
                            ))
                        }

                        {/* ✅ Show Logout if user or admin is logged in */}
                        {isLoggedIn && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                    {/* User Avatar */}
                    <div>
                        <button className='rounded-full p-1 bg-white flex justify-center items-center' style={{ width: "3rem", height: "3rem" }}>
                            <PersonIcon className='text-blue-600 text-xl' />
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
