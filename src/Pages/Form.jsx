import React from 'react'
import { Input, Button } from '../Components/index'
import { useForm } from 'react-hook-form'
import Upload from '../Components/Upload';
import { useDispatch, useSelector } from 'react-redux'
import { createClaimDocument, uploadReceipt } from '../Components/index';
import { useRef } from 'react';
import { setClaim as setClaimStatus } from '../store/authSlice';

function Form() {
        const { register, handleSubmit } = useForm();
        const authStatus = useSelector((state) => state.auth.status);
        const claim = useSelector((state) => state.auth.claim);
        const dispatch = useDispatch();
        const fileRef = useRef(null); // Ref for the Upload input

        const onSubmit = async (data) => {
            console.log(data);

            try {
                const file = fileRef.current?.files[0];
                let receiptFileId = '';

                if (file) {
                    const uploaded = await uploadReceipt(file);
                    receiptFileId = uploaded;
                }

                const claimData = {
                    name: data.name,
                    empId: data.employeeId,
                    department: data.department,
                    dateOfExpense: data.expenseDate,
                    claimedAmount: data.amount,
                    reason: data.reason,
                    bankAccount: data.accountNumber,
                    ifscCode: data.ifsc,
                    contact: data.phone,
                    email: data.email,
                    receiptFileId: receiptFileId
                };

                const response = await createClaimDocument(claimData);
                console.log("Claim submitted:", response);
                alert("Submitted Successfully!");

            } catch (err) {
                console.error("Submission failed:", err);
                alert("Failed to submit. Check console for details.");
            }

            dispatch(setClaimStatus(true))
        }

        return (

            authStatus ? (
                <div className='min-h- flex items-center justify-center py-10' >
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-6xl bg-white text-black p-10 rounded-xl shadow-md'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6'>
                            <Input
                                label="Name"
                                type="text"
                                placeholder="Enter your full name"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("name", { required: true })}
                            />

                            <Input
                                label="Employee ID"
                                type="text"
                                placeholder="Enter your employee ID"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("employeeId", { required: true })}
                            />

                            <Input
                                label="Department"
                                type="text"
                                placeholder="Enter your department (e.g., HR, IT)"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("department", { required: true })}
                            />

                            <Input
                                label="Date of Expense"
                                type="date"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("expenseDate", { required: true })}
                            />

                            <Input
                                label="Amount Claimed"
                                type="number"
                                placeholder="Enter the amount in ₹ (INR)"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("amount", { required: true, min: 1 })}
                            />

                            <Input
                                label="Reason for Claim"
                                type="text"
                                placeholder="E.g., doctor consultation, lab test, medicines"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("reason", { required: true })}
                            />

                            <Input
                                label="Bank Account No."
                                type="text"
                                placeholder="Enter your bank account number"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("accountNumber", { required: true })}
                            />

                            <Input
                                label="IFSC Code"
                                type="text"
                                placeholder="Enter your bank’s IFSC code"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("ifsc", { required: true })}
                            />

                            <Input
                                label="Contact Number"
                                type="tel"
                                placeholder="Enter your 10-digit mobile number"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("phone", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Invalid phone number",
                                    },
                                })}
                            />

                            <Input
                                label="Email Address"
                                type="email"
                                placeholder="Enter your official email address"
                                className="bg-white text-black rounded-lg text-xl px-3 py-1"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email",
                                    },
                                })}
                            />
                        </div>

                        <div className='mt-10'>
                            <Upload className="w-full" />
                        </div>

                        <div className='mt-8 flex justify-center'>
                            <Button type='submit'>Submit</Button>
                        </div>
                    </form>
                </div>
            ) : "Please Login"
        )
    }

export default Form
