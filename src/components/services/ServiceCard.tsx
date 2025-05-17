
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Clock, CheckCircle, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: number;
  timeframe: string;
  benefits: string[];
  popular?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  price,
  timeframe,
  benefits,
  popular = false,
}: ServiceCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all ${
      popular ? 'border-brand-highlight shadow-lg' : 'hover:border-brand'
    } hover-card-animation`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-brand-highlight text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
        </div>
      )}
      <CardHeader>
        <div className="mb-4">
          <Icon className={`h-12 w-12 ${popular ? 'text-brand-highlight' : 'text-brand'}`} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-muted-foreground ml-1">/ device</span>
          </div>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{timeframe}</span>
          </div>
        </div>

        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link to="/order" className="w-full">
          <Button className={`w-full ${
            popular ? 'bg-brand-highlight hover:bg-brand-accent' : 'bg-brand hover:bg-brand-accent'
          }`}>
            Choose Plan
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
