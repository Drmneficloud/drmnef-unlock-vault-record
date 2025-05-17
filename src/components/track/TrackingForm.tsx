
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const formSchema = z.object({
  orderId: z.string().min(5, {
    message: "Order ID must be at least 5 characters",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface TrackingFormProps {
  onTrackOrder: (orderId: string) => void;
}

const TrackingForm = ({ onTrackOrder }: TrackingFormProps) => {
  const [searchParams] = useSearchParams();
  const orderIdParam = searchParams.get('orderId');
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderId: orderIdParam || "",
    },
  });

  const onSubmit = (data: FormValues) => {
    onTrackOrder(data.orderId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="orderId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order ID</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Enter your order ID" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-brand hover:bg-brand-accent"
          >
            Track Order
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TrackingForm;
