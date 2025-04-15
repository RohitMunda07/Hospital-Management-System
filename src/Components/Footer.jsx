import React from 'react';

function Footer() {
    const footerItems = [
        {
            name: "Company",
            datas: ['Features', 'Pricing', 'Affiliate Program', 'Press Kit'],
        },
        {
            name: "Support",
            datas: ['Account', 'Help', 'Contact Us', 'Customer Support'],
        },
        {
            name: "Legals",
            datas: ['Terms & Conditions', 'Privacy Policy', 'Licensing'],
        },
    ];

    return (
        <footer className="bg-[#003366] text-white py-10 px-5 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerItems.map((item, index) => (
                    <div key={index}>
                        <h2 className="text-lg font-bold mb-4">{item.name}</h2>
                        <ul>
                            {item.datas.map((data, idx) => (
                                <li key={idx} className="mb-2 hover:underline cursor-pointer">
                                    {data}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            <p className='text-center mt-4'>
                &copy; Copyright 2025. Team Code Crusaders.
            </p>

        </footer>
    );
}

export default Footer;
