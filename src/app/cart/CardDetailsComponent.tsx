'use client'
import React, { useState } from "react";
import { CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CardDetailsProps {
  total: number;
}

const CardDetails = ({ total }: CardDetailsProps) => {
  const [selectedCard, setSelectedCard] = useState<string>("");

  const handleCardClick = (cardType: string) => {
    setSelectedCard(cardType);
  };

  return (
    <div className="bg-indigo-600 rounded-lg p-6 text-white">
      <div className="flex gap-2 mb-1 justify-between">
        <h2 className="text-xl font-semibold mb-6">Card Details</h2>
        <div className="flex items-center space-x-4">
          <img
            src="/img/me.jpg"
            alt="User Profile"
            className="w-16 h-16 rectangle-full"
          />
        </div>
      </div>

      {/* Card Types */}
      <div className="mb-6">
        <p className="text-sm mb-2">Card type</p>
        <div className="flex gap-2 mb-1 items-center">
          <div
            className={`bg-white bg-opacity-50 p-2 rounded w-16 h-10 flex items-center justify-center cursor-pointer transition-transform transform ${selectedCard === "mastercard" ? "scale-110" : ""
              } hover:scale-110`}
            onClick={() => handleCardClick("mastercard")}
          >
            <img
              src="/img/mastercard.png"
              alt="Mastercard"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className={`bg-white bg-opacity-50 p-2 rounded w-16 h-10 flex items-center justify-center cursor-pointer transition-transform transform ${selectedCard === "visa" ? "scale-110" : ""
              } hover:scale-110`}
            onClick={() => handleCardClick("visa")}
          >
            <img
              src="/img/visa.png"
              alt="Visa"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className={`bg-white bg-opacity-50 p-2 rounded w-16 h-10 flex items-center justify-center cursor-pointer transition-transform transform ${selectedCard === "stripe" ? "scale-110" : ""
              } hover:scale-110`}
            onClick={() => handleCardClick("stripe")}
          >
            <img
              src="/img/stripe.png"
              alt="Stripe"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className={`p-2 rounded w-20 h-18 cursor-pointer ${selectedCard === "seeAll" ? "scale-110" : ""
              } hover:scale-110`}
            onClick={() => handleCardClick("seeAll")}
          >
            <img src="/img/seeAll.png" alt="See All" />
          </div>
        </div>
      </div>

      {/* Card Input Fields */}
      <div className="space-y-4">
        <div>
          <label className="text-sm mb-1 block">Name on card</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-indigo-500/50 border border-indigo-400 text-white placeholder-indigo-300"
            placeholder="Name"
          />
        </div>

        <div>
          <label className="text-sm mb-1 block">Card Number</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-indigo-500/50 border border-indigo-400 text-white placeholder-indigo-300"
            placeholder="**** **** **** ****"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm mb-1 block">Expiration date</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-indigo-500/50 border border-indigo-400 text-white placeholder-indigo-300"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block">CVV</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-indigo-500/50 border border-indigo-400 text-white placeholder-indigo-300"
              placeholder="***"
            />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-white/80">Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/80">Shipping</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-sm border-t border-indigo-500 pt-2 mt-2">
          <span className="text-white/80">Total (Tax incl.)</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link href="/payment">
        <button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded flex items-center justify-between">
          <span className="font-medium">${total.toFixed(2)}</span>
          <div className="flex items-center">
            <span className="mr-2">Checkout</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default CardDetails;
