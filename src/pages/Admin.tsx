
import { useState } from 'react';
import Layout from "@/components/Layout";
import StatsCard from "@/components/admin/StatsCard";
import RecentOrders from "@/components/admin/RecentOrders";
import { 
  Users, 
  Smartphone, 
  DollarSign, 
  Activity,
  LineChart,
  Search,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OrderStatus } from '@/components/track/TrackingResult';
import { toast } from '@/components/ui/sonner';

// Mock data for the charts
const weeklyUnlocksData = [
  { name: 'Mon', unlocks: 32 },
  { name: 'Tue', unlocks: 40 },
  { name: 'Wed', unlocks: 28 },
  { name: 'Thu', unlocks: 45 },
  { name: 'Fri', unlocks: 52 },
  { name: 'Sat', unlocks: 37 },
  { name: 'Sun', unlocks: 25 },
];

// Mock data for recent orders
const recentOrders = [
  {
    id: "DRM123456",
    customer: "Sarah Johnson",
    device: "iPhone 13 Pro",
    service: "Network Unlock",
    status: "completed" as OrderStatus,
    date: "May 16, 2025",
    serialNumber: "C8PLJ4X7DTDD"
  },
  {
    id: "DRM789012",
    customer: "Michael Chen",
    device: "iPhone 12",
    service: "iCloud Unlock",
    status: "processing" as OrderStatus,
    date: "May 16, 2025",
    serialNumber: "F7NLK5S8ABCD"
  },
  {
    id: "DRM345678",
    customer: "Emily Rodriguez",
    device: "iPhone 11",
    service: "Carrier Check",
    status: "pending" as OrderStatus,
    date: "May 17, 2025",
    serialNumber: "H9PLM7N2EFGH"
  },
  {
    id: "DRM901234",
    customer: "John Smith",
    device: "iPhone XS",
    service: "Network Unlock",
    status: "completed" as OrderStatus,
    date: "May 15, 2025",
    serialNumber: "K2NMP9R7IJKL"
  },
  {
    id: "DRM567890",
    customer: "Lisa Wang",
    device: "iPhone SE",
    service: "Blacklist Check",
    status: "failed" as OrderStatus,
    date: "May 14, 2025",
    serialNumber: "P5QRS9T1MNOP"
  }
];

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleOrderDetails = (orderId: string) => {
    // In a real app, this would navigate to an order details page or show a modal
    toast.info(`Viewing details for order: ${orderId}`);
    console.log(`View details for order: ${orderId}`);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard 
            title="Total Customers"
            value="2,834"
            description="Total customers this month"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
          />
          
          <StatsCard 
            title="Total Orders"
            value="432"
            description="Total orders this month"
            icon={Smartphone}
            trend={{ value: 8, isPositive: true }}
          />
          
          <StatsCard 
            title="Revenue"
            value="$14,532"
            description="Total revenue this month"
            icon={DollarSign}
            trend={{ value: 5, isPositive: true }}
          />
          
          <StatsCard 
            title="Success Rate"
            value="98.6%"
            description="Order success rate"
            icon={Activity}
            trend={{ value: 1.2, isPositive: false }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Weekly Unlocks</span>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyUnlocksData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="unlocks" fill="#3282B8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Service Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Network Unlock</div>
                    <div className="text-sm text-muted-foreground">52%</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-brand rounded-full" style={{ width: '52%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">iCloud Unlock</div>
                    <div className="text-sm text-muted-foreground">28%</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-brand-accent rounded-full" style={{ width: '28%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Carrier Check</div>
                    <div className="text-sm text-muted-foreground">12%</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-brand-highlight rounded-full" style={{ width: '12%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Blacklist Check</div>
                    <div className="text-sm text-muted-foreground">8%</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '8%' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  className="pl-9"
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </div>
          
          <RecentOrders 
            orders={recentOrders} 
            onViewDetails={handleOrderDetails}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
