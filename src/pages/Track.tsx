
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from "@/components/Layout";
import TrackingForm from "@/components/track/TrackingForm";
import TrackingResult, { OrderStatus } from "@/components/track/TrackingResult";

// Mock data for demonstration
const mockOrderData = {
  "DRM123456": {
    orderId: "DRM123456",
    status: "completed" as OrderStatus,
    device: "iPhone 13 Pro",
    service: "Network Unlock",
    created: "May 15, 2025, 10:23 AM",
    updated: "May 16, 2025, 2:45 PM",
    serialNumber: "C8PLJ4X7DTDD"
  },
  "DRM789012": {
    orderId: "DRM789012",
    status: "processing" as OrderStatus,
    device: "iPhone 12",
    service: "iCloud Unlock",
    created: "May 16, 2025, 3:12 PM",
    updated: "May 16, 2025, 5:30 PM",
    estimatedCompletion: "May 18, 2025",
    serialNumber: "F7NLK5S8ABCD"
  },
  "DRM345678": {
    orderId: "DRM345678",
    status: "pending" as OrderStatus,
    device: "iPhone 11",
    service: "Carrier Check",
    created: "May 17, 2025, 9:45 AM",
    updated: "May 17, 2025, 9:45 AM",
    estimatedCompletion: "May 17, 2025",
    serialNumber: "H9PLM7N2EFGH"
  }
};

const Track = () => {
  const [searchParams] = useSearchParams();
  const initialOrderId = searchParams.get('orderId') || '';
  const [trackedOrderId, setTrackedOrderId] = useState<string>(initialOrderId);
  const [notFound, setNotFound] = useState<boolean>(false);
  
  // If an orderId was provided in the URL and it exists in our mock data, show it immediately
  const initialOrderExists = initialOrderId && initialOrderId in mockOrderData;
  const [showResult, setShowResult] = useState<boolean>(initialOrderExists);
  
  const handleTrackOrder = (orderId: string) => {
    // In a real app, this would make an API call to fetch order details
    setTrackedOrderId(orderId);
    
    if (orderId in mockOrderData) {
      setShowResult(true);
      setNotFound(false);
    } else {
      setShowResult(false);
      setNotFound(true);
    }
  };
  
  // If there was an initialOrderId in the URL but it doesn't exist in our data, show not found
  useState(() => {
    if (initialOrderId && !initialOrderExists) {
      setNotFound(true);
    }
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your order ID below to check the status of your iPhone unlock request.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <TrackingForm onTrackOrder={handleTrackOrder} />
          
          {notFound && (
            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <h3 className="text-lg font-medium text-red-800">Order Not Found</h3>
              <p className="text-red-600">
                We couldn't find any order with ID "{trackedOrderId}". Please check your order ID and try again.
              </p>
            </div>
          )}
          
          {showResult && trackedOrderId in mockOrderData && (
            <div className="mt-8">
              <TrackingResult {...mockOrderData[trackedOrderId]} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Track;
