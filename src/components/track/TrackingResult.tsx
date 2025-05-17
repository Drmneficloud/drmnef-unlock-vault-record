
import { Progress } from "@/components/ui/progress";
import { 
  ClipboardEdit, 
  Hourglass, 
  CheckCircle2, 
  AlertTriangle,
  Smartphone,
  Clock,
  CalendarCheck,
} from 'lucide-react';

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'failed';

interface TrackingResultProps {
  orderId: string;
  status: OrderStatus;
  device: string;
  service: string;
  created: string;
  updated: string;
  estimatedCompletion?: string;
  serialNumber: string;
}

const getStatusDetails = (status: OrderStatus) => {
  switch (status) {
    case 'pending':
      return {
        icon: <ClipboardEdit className="h-8 w-8 text-blue-500" />,
        color: 'text-blue-500',
        bgColor: 'bg-blue-100',
        progressColor: 'bg-blue-500',
        progressValue: 25,
        message: 'Your order has been received and is awaiting processing.'
      };
    case 'processing':
      return {
        icon: <Hourglass className="h-8 w-8 text-amber-500" />,
        color: 'text-amber-500',
        bgColor: 'bg-amber-100',
        progressColor: 'bg-amber-500',
        progressValue: 50,
        message: 'We are currently processing your unlock request.'
      };
    case 'completed':
      return {
        icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
        color: 'text-green-500',
        bgColor: 'bg-green-100',
        progressColor: 'bg-green-500',
        progressValue: 100,
        message: 'Your iPhone has been successfully unlocked!'
      };
    case 'failed':
      return {
        icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
        color: 'text-red-500',
        bgColor: 'bg-red-100',
        progressColor: 'bg-red-500',
        progressValue: 100,
        message: 'There was an issue processing your unlock request. Please contact support.'
      };
    default:
      return {
        icon: <ClipboardEdit className="h-8 w-8 text-gray-500" />,
        color: 'text-gray-500',
        bgColor: 'bg-gray-100',
        progressColor: 'bg-gray-500',
        progressValue: 0,
        message: 'Status unknown'
      };
  }
};

const TrackingResult = ({
  orderId,
  status,
  device,
  service,
  created,
  updated,
  estimatedCompletion,
  serialNumber,
}: TrackingResultProps) => {
  const statusDetails = getStatusDetails(status);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className={`${statusDetails.bgColor} px-6 py-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {statusDetails.icon}
            <div>
              <h3 className={`font-semibold ${statusDetails.color}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </h3>
              <p className="text-sm text-gray-600">{statusDetails.message}</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-600">
            <div>Order ID:</div>
            <div className="font-medium text-gray-800">{orderId}</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{statusDetails.progressValue}%</span>
          </div>
          <Progress value={statusDetails.progressValue} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Smartphone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">Device</div>
                <div className="font-medium">{device}</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">Service</div>
                <div className="font-medium">{service}</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CalendarCheck className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">Serial Number</div>
                <div className="font-medium">{serialNumber}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Order Created</div>
              <div className="font-medium">{created}</div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">Last Updated</div>
              <div className="font-medium">{updated}</div>
            </div>

            {estimatedCompletion && (
              <div>
                <div className="text-sm text-muted-foreground">Estimated Completion</div>
                <div className="font-medium">{estimatedCompletion}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingResult;
