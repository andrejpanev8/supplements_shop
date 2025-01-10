import React from 'react';
import { Card, CardContent } from '../../components/ui/card';

const DeliveryTrackingPage = () => {
  const orders = [
    { id: '#45219', date: '08.01.2025' },
    { id: '#45222', date: '10.01.2025' },
    { id: '#45266', date: '10.01.2025' },
  ];

  const trackingSteps = [
    {
      status: 'Shipped',
      description: 'Your package has been shipped to airport',
      completed: true
    },
    {
      status: 'Left Origin Airport',
      description: 'Your package has been loaded on a plane and is on the way.',
      completed: true
    },
    {
      status: 'Arrived at Destination Country',
      description: 'Your package has arrived at destination country airport',
      completed: true
    },
    {
      status: 'Local Post Dispatched',
      description: 'Your package has reached the local post and is on the way to your doorstep.',
      completed: true
    },
    {
      status: 'Delivered',
      description: '',
      completed: false
    }
  ];

  const products = [
    {
      name: 'Gold Standard - Whey 100% Protein',
      image: '/img/whey.webp',
      qty: 2,
      total: 39.98
    },
    {
      name: 'PROSOURCE - Creatine Monohydrate',
      image: '/img/creatine.webp',
      qty: 1,
      total: 9.10
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Delivery:</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Orders List */}
          <div className="md:col-span-3 bg-white rounded-lg p-4">
            <h2 className="font-bold mb-4">ORDERS</h2>
            <div className="space-y-2">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
                >
                  <span className="font-medium">{order.id}</span>
                  <span className="text-gray-600">{order.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="md:col-span-5 bg-white rounded-lg p-4">
            <h2 className="font-bold mb-4">Order | #45219</h2>
            <div className="relative">
              {trackingSteps.map((step, index) => (
                <div key={step.status} className="mb-8 relative">
                  <div className="flex items-start">
                    <div className="relative">
                      <div className={`w-4 h-4 rounded-full ${step.completed ? 'bg-purple-600' : 'bg-gray-300'
                        } absolute top-1 -left-2`} />
                      {index < trackingSteps.length - 1 && (
                        <div className={`w-0.5 h-16 ${step.completed ? 'bg-purple-600' : 'bg-gray-300'
                          } absolute top-5 left-0`} />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-medium ${step.completed ? 'text-purple-600' : 'text-gray-400'
                        }`}>
                        {step.status}
                      </h3>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div className="md:col-span-4 bg-white rounded-lg p-4">
            <h2 className="font-bold mb-4">Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Order date: 08.01.2025</p>
                <p className="text-gray-600">Time: 23:44:52</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Products:</h3>
                <div className="space-y-4">
                  {products.map((product) => (
                    <Card key={product.name}>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-contain rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{product.name}</h4>
                            <div className="flex justify-between mt-2">
                              <span className="text-gray-600">Qty {product.qty}</span>
                              <span className="font-medium">${product.total}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTrackingPage;