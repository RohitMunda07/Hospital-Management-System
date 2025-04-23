import React from 'react';

function HowItWorks() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-10 px-4 md:px-20 text-gray-800">
            <h1 className="text-4xl font-bold text-center mb-10 text-[#003366]">How It Works</h1>
            <div className='flex items-center justify-between flex-col'>
                {/* USER SECTION */}
                <div className="mb-14 backdrop-blur-lg shadow-2xl shadow-gray-600 duration-300 rounded-4xl">
                    <h2 className="text-2xl text-center font-semibold text-[#1B56FD] mb-4">For Users</h2>
                    <ul className=" pl-6 text-start px-3 py-4 space-y-3 text-lg">
                        <li><strong>Login:</strong> Users must log in to access the system.</li>
                        <li><strong>Dashboard Overview:</strong> View ID card, recent transactions, and claim status.</li>
                        <li><strong>Claim Submission:</strong> Fill out a simple form and upload a medical receipt to raise a claim.</li>
                        <li><strong>Transaction Logs:</strong> Track all past claim requests and view approved/pending status.</li>
                        <li><strong>Support:</strong> Get help and contact assistance via the support page.</li>
                    </ul>
                </div>

                {/* ADMIN SECTION */}
                <div className="mb-14 backdrop-blur-lg shadow-2xl shadow-gray-600 duration-300 rounded-4xl">
                    <h2 className="text-2xl font-semibold text-[#FF5733] mb-4">For Admin</h2>
                    <ul className="text-start px-6 py-6 pl-6 space-y-3 text-lg">
                        <li><strong>Admin Login:</strong> Admin logs in with special credentials.</li>
                        <li><strong>Manage Employees:</strong> Add new employees or update existing employee details.</li>
                        <li><strong>Claim Verification:</strong> Approve/reject user claims with comments and status indicators.</li>
                        <li><strong>Forward to Insurance:</strong> Once verified, forward approved claims to the insurance company.</li>
                        <li><strong>Dump Records:</strong> Download or store bulk claim history using the transaction dump feature.</li>
                    </ul>
                </div>

                {/* SYSTEM FLOW */}
                <div className="mb-10 backdrop-blur-lg shadow-2xl shadow-gray-600 duration-300 rounded-4xl">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">System Workflow</h2>
                    <ol className="text-start w-3xl px-6 py-6 pl-6 space-y-3 text-lg">
                        <li>User submits a claim with valid details and uploads receipt.</li>
                        <li>Admin reviews the request and verifies the information.</li>
                        <li>If verified, admin can forward it to the insurance company.</li>
                        <li>Claim status is updated and reflected on the user dashboard.</li>
                    </ol>
                </div>

                <p className="text-center text-gray-600 mt-6">For any queries, visit the <strong>Support</strong> page.</p>
            </div>
        </div>
    );
}

export default HowItWorks;
