
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "../track/TrackingResult";

interface Order {
  id: string;
  customer: string;
  device: string;
  service: string;
  status: OrderStatus;
  date: string;
  serialNumber: string;
}

interface RecentOrdersProps {
  orders: Order[];
  onViewDetails: (orderId: string) => void;
}

const statusStyles = {
  pending: {
    variant: 'outline' as const,
    className: 'border-blue-500 text-blue-500',
  },
  processing: {
    variant: 'outline' as const,
    className: 'border-amber-500 text-amber-500',
  },
  completed: {
    variant: 'outline' as const,
    className: 'border-green-500 text-green-500',
  },
  failed: {
    variant: 'outline' as const,
    className: 'border-red-500 text-red-500',
  },
};

const RecentOrders = ({ orders, onViewDetails }: RecentOrdersProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Serial Number</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow 
              key={order.id} 
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => onViewDetails(order.id)}
            >
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.device}</TableCell>
              <TableCell className="font-mono text-xs">{order.serialNumber}</TableCell>
              <TableCell>{order.service}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Badge 
                  variant={statusStyles[order.status].variant}
                  className={statusStyles[order.status].className}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentOrders;
