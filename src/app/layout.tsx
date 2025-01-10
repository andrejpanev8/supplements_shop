import { ReactNode } from 'react';
import './globals.css';
import Link from 'next/link';
import { HiShoppingCart } from 'react-icons/hi'; // Heroicons shopping cart icon

export const metadata = {
  title: "ActiveEssentials - Shopping Cart",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-green-500 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-2xl font-bold">ActiveEssentials</div>
              <nav className="flex space-x-8 text-lg">
                <Link href="/" className="hover:bg-green-600 px-4 py-2 rounded-lg">
                  Home
                </Link>
                <Link href="/store" className="hover:bg-green-600 px-4 py-2 rounded-lg">
                  Store
                </Link>
                <Link href="/brands" className="hover:bg-green-600 px-4 py-2 rounded-lg">
                  Brands
                </Link>
                <Link href="/promotions" className="hover:bg-green-600 px-4 py-2 rounded-lg">
                  Promotions
                </Link>
              </nav>

              {/* Profile and Cart */}
              <div className="flex items-center space-x-6">
                {/* Shopping Cart Icon */}
                <Link href="/cart" className="relative cursor-pointer hover:bg-green-600 p-2 rounded-lg">
                  <HiShoppingCart className="w-6 h-6 text-white" />
                </Link>

                {/* Profile Section */}
                <Link href="/profile" className="flex items-center space-x-4 cursor-pointer hover:bg-green-600 p-2 rounded-lg">
                  <img
                    src="/img/me.jpg" // Replace with the actual image URL
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Andrej Panev</span>
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow container mx-auto py-8">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-gray-300 py-4">
            <div className="container mx-auto text-center">
              &copy; 2015 - 2025 ActiveEssentials. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
