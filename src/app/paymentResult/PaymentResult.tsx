import React from 'react';
import Link from 'next/link';

const PaymentSuccessful = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-lg">
                <div className="mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-16 h-16 text-green-500 mx-auto"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h2 className="text-3xl font-semibold text-green-600 mb-4">
                    Payment Successful
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Your payment has been processed successfully. Thank you for your purchase!
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        href="/"
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                    >
                        Go to Home
                    </Link>
                    <Link
                        href="/deliveryTracking"
                        className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                    >
                        View Orders
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessful;
