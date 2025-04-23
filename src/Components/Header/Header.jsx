import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Logo } from '../index';
import Container from '../Container';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

function Header() {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status); // user
    const admin = useSelector((state) => state.auth.admin); // admin

    const isLoggedIn = authStatus || admin;

    // Build nav items based on role
    let navItems = [];

    if (authStatus) {
        // Normal user
        navItems = [
            { name: 'Home', path: '/' },
            { name: 'Transaction', path: '/log' },
            { name: 'Claim Request', path: '/form' },
            { name: 'Support', path: '/support' },
            { name: 'How it works', path: '/howItWork' },
        ];
    } else if (!isLoggedIn) {
        // Not logged in
        navItems = [
            { name: 'Login', path: '/login' },
        ];
    } else if (admin) {
        // Admin
        navItems = [
            // You can add { name: 'Dashboard', path: '/admin' },
        ];
    }

    return (
        <header className='bg-[#003366] w-full'>
            <Container>
                <nav className='flex justify-between items-center max-w-7xl mx-auto py-4 px-6'>
                    {/* Logo */}
                    <div>
                        <Button onClick={() => navigate('/')} style={{ border: "0" }}>
                            <Logo />
                        </Button>
                    </div>

                    {/* Navigation Items */}
                    <ul className='flex gap-x-5 text-xl items-center text-white'>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.path)}
                                    className='hover:underline'
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}

                        {/* Show logout only if logged in (user or admin) */}
                        {isLoggedIn && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                    {/* User Icon */}
                    {isLoggedIn && (
                        <div>
                            <button className='rounded-full p-1 bg-white flex justify-center items-center'
                                style={{ width: "3rem", height: "3rem" }}>
                                <PersonIcon className='text-blue-600 text-xl' />
                            </button>
                        </div>
                    )}
                </nav>
            </Container>
        </header>
    );
}

export default Header;
