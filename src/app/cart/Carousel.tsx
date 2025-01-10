import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    discountPrice?: number;
  };
  
  type RecommendedProductsProps = {
    addItemToCart: (item: CartItem) => void;
  };

const RecommendedProducts = ({ addItemToCart }: RecommendedProductsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const products = [
    {
      id: 1,
      name: 'TREC - Mineral Tablets',
      price: 15.98,
      image: '/img/mineralsCapsules.jpg',
      quantity: 1
    },
    {
      id: 2,
      name: 'Creamy Peanut Butter',
      price: 5.45,
      image: '/img/peanutButter.png',
      quantity: 1,
    },
    {
      id: 3,
      name: 'TREC - Mineral Tablets',
      price: 15.98,
      image: '/img/mineralsCapsules.jpg',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Creamy Peanut Butter',
      price: 5.45,
      image: '/img/peanutButter.png',
      quantity: 1,
    },
    {
      id: 5,
      name: 'TREC - Mineral Tablets',
      price: 15.98,
      image: '/img/mineralsCapsules.jpg',
      quantity: 1,
    },
    {
      id: 6,
      name: 'Creamy Peanut Butter',
      price: 5.45,
      image: '/img/peanutButter.png',
      quantity: 1,
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 240; // Width of card (192px) + gap (16px)
      const currentScroll = container.scrollLeft;
      
      container.scrollTo({
        left: direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-black">Recommended products for you</h2>
      
      <div className="relative">
        {/* Previous Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-10 hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Products Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-4 p-1">
            {products.map((product) => (
              <div key={product.id} className="flex-none w-48 bg-white rounded-lg shadow-sm p-4 transition-transform hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain mb-3"
                  />
                  <button onClick={() => addItemToCart(product)} className="absolute top-2 right-2 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors">
                    <ShoppingCart className="w-4 h-4 text-purple-600" />
                  </button>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-black">
                    Price: ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-10 hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default RecommendedProducts;