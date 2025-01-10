'use client'
import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const PaymentComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-center py-6 border-b bg-white">
        <div className="flex items-center justify-center space-x-2">
          <LockClosedIcon className="h-4 w-4 text-gray-600" />
          <span className="text-gray-800 font-medium">ActiveEssentials LTD</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {/* Left Column - Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center space-x-4">
                  <img src="/img/whey.webp" alt="Gold Standard Whey" className="w-16 h-16 rounded-md object-contain" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Gold Standard Whey 100% Protein</p>
                    <p className="text-sm text-gray-500">Quantity: 2</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">$39.98</span>
              </div>

              <div className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center space-x-4">
                  <img src="/img/creatine.webp" alt="PROSOURCE Creatine" className="w-16 h-16 rounded-md object-contain" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">PROSOURCE Creatine Monohydrate</p>
                    <p className="text-sm text-gray-500">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">$9.10</span>
              </div>

              <div className="pt-4">
                <div className="flex justify-between py-2">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium text-gray-900">$49.08</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="text-sm font-medium text-gray-900">Free</span>
                </div>
                <div className="flex justify-between py-2 border-t mt-2">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-base font-medium text-gray-900">$49.08</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-black">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Payment Information</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Card Information</label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="1234 1234 1234 1234"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="MM / YY"
                    />
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full name"
                />
              </div>

                <Link href="/paymentResult">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Pay $49.08
                </button>
                </Link>

              <p className="text-xs text-gray-500 text-center mt-4">
                By confirming your payment, you allow ActiveEssentials LTD to charge your card for this payment and future payments in accordance with their terms.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;