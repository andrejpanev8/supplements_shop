'use client'
import { useState, useEffect } from "react";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    discountPrice?: number;
};

type ShoppingCartProps = {
    cartItems: CartItem[];
    updateTotal: (total: number) => void;
};

const ShoppingCart = ({ cartItems: parentCartItems, updateTotal }: ShoppingCartProps) => {
    const initialCartItems: CartItem[] = [
        {
            id: 7,
            name: "Gold Standard - Whey 100% Protein",
            price: 19.99,
            quantity: 2,
            image: "/img/whey.webp",
        },
        {
            id: 8,
            name: "PROSOURCE - Creatine Monohydrate",
            price: 13.00,
            quantity: 1,
            discountPrice: 9.10,
            image: "/img/creatine.webp",
        },
    ];

    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

    useEffect(() => {
        // Merge initialCartItems with parentCartItems, avoiding duplicates
        const mergedCartItems = [...cartItems, ...parentCartItems.filter(item => !cartItems.some(cartItem => cartItem.id === item.id))];
        setCartItems(mergedCartItems);
    }, [parentCartItems]);

    useEffect(() => {
        // Calculate total whenever cartItems change
        const total = cartItems.reduce(
            (acc, item) =>
                acc + (item.discountPrice || item.price) * item.quantity,
            0
        );
        updateTotal(total);
    }, [cartItems, updateTotal]);

    const [discountCode, setDiscountCode] = useState("");
    const [discountApplied, setDiscountApplied] = useState(false);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [discountError, setDiscountError] = useState("");

    const [timeLeft, setTimeLeft] = useState(5 * 60 * 60 + 15 * 60); // 5 hours 15 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, []);

    const handleQuantityChange = (id: number, delta: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + delta),
                    }
                    : item
            )
        );
        if (discountApplied) {
            recalculateDiscount(); // Recalculate the discount after quantity change
        }
    };

    const handleRemoveItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
        if (discountApplied) {
            recalculateDiscount(); // Recalculate the discount after item removal
        }
    };

    const recalculateDiscount = () => {
        const total = calculateTotal();
        const discount = total * 0.1; // 10% discount
        setTotalDiscount(discount);
    };

    const calculateTotal = () => {
        const total = cartItems.reduce(
            (acc, item) =>
                acc + (item.discountPrice || item.price) * item.quantity,
            0
        );
        const totalWithDiscount = total - totalDiscount;
        return totalWithDiscount; // Subtract discount once
    };

    const calculateSavings = () => {
        return cartItems.reduce(
            (acc, item) =>
                acc +
                (item.discountPrice
                    ? (item.price - item.discountPrice) * item.quantity
                    : 0),
            0
        );
    };

    const handleApplyDiscount = () => {
        if (discountCode === "FREE25" && !discountApplied && cartItems.length > 0) {
            recalculateDiscount();
            setDiscountApplied(true);
            setDiscountError(""); // Clear any previous errors
        } else if (cartItems.length === 0) {
            setDiscountError("Your cart is empty, apply discount to items in cart.");
        } else {
            setDiscountError("Discount code not found");
        }
    };

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}hrs ${mins}min ${secs < 10 ? "0" + secs : secs}sec`;
    };

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4 text-black">Shopping Cart</h2>

            {/* Free Shipping Section */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fill="none"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="font-semibold text-black">Free Shipping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                />
                            </svg>
                        </div>
                        <span className="text-red-500 font-semibold">Limited time:</span>
                        <span className="text-red-500 font-semibold">
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b py-4"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-contain rounded-md"
                                />
                                <div>
                                    <h3 className="font-semibold text-black">{item.name}</h3>
                                    <p className="text-sm text-gray-500 text-black">
                                        {item.discountPrice ? (
                                            <>
                                                <span className="line-through">
                                                    ${item.price.toFixed(2)}
                                                </span>{" "}
                                                <span className="text-red-500 font-bold">
                                                    ${item.discountPrice.toFixed(2)}
                                                </span>
                                            </>
                                        ) : (
                                            `$${item.price.toFixed(2)}`
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 text-black">
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={() => handleQuantityChange(item.id, -1)}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    onClick={() => handleQuantityChange(item.id, 1)}
                                >
                                    +
                                </button>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-black">
                                    ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <div className="ml-4">
                                <button
                                    className="text-red-500"
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter discount code"
                            className="border rounded-md p-2 w-full text-black"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <button
                            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                            onClick={handleApplyDiscount}
                            disabled={discountApplied}
                        >
                            {discountApplied ? "Discount Applied" : "Apply Discount"}
                        </button>
                        {discountApplied && (
                            <p className="mt-2 text-green-500 text-sm">
                                Discount applied successfully!
                            </p>
                        )}
                        {discountError && (
                            <p className="mt-2 text-red-500 text-sm">{discountError}</p>
                        )}
                    </div>
                    <div className="flex justify-between items-top text-lg font-semibold text-black">
                        <span>You save:</span>
                        <span className="text-green-500">
                            -${calculateSavings().toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between items-top text-lg font-semibold text-black">
                        <span>Total:</span>
                        <span>
                            ${calculateTotal().toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;