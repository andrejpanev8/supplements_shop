import Link from 'next/link';
import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <img
            src="/img/me.jpg" // Add a default profile picture or placeholder image
            alt="Profile Picture"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Andrej Panev</h1>
            <p className="text-lg text-gray-600">Full Name</p>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="space-y-6">
          <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-600">andrej.panev@example.com</span>
          </div>
          <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
            <span className="font-semibold text-gray-700">Phone:</span>
            <span className="text-gray-600">(123) 456-7890</span>
          </div>
          <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
            <span className="font-semibold text-gray-700">Address:</span>
            <span className="text-gray-600">123 Main St, City, Country</span>
          </div>
        </div>

        {/* My Orders Button */}
        <div className="mt-8 text-center">
          <Link href="/deliveryTracking">
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              My Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
