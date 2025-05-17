
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import { Smartphone, Mail, User } from 'lucide-react';

const formSchema = z.object({
  service: z.string({
    required_error: "Please select a service",
  }),
  deviceModel: z.string({
    required_error: "Please select your device model",
  }),
  serialNumber: z.string().min(5, {
    message: "Serial number must be at least 5 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      deviceModel: "",
      serialNumber: "",
      email: "",
      name: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, you'd submit to your backend here
      console.log("Form data submitted:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a mock order ID
      const orderId = `DRM${Math.floor(100000 + Math.random() * 900000)}`;
      
      toast.success("Order submitted successfully!", {
        description: `Your order ID is ${orderId}`,
      });
      
      // Navigate to a success page (or tracking page)
      navigate(`/track?orderId=${orderId}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was a problem submitting your order", {
        description: "Please try again later or contact support",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="network">Network Unlock</SelectItem>
                      <SelectItem value="icloud">iCloud Unlock</SelectItem>
                      <SelectItem value="carrier">Carrier Check</SelectItem>
                      <SelectItem value="blacklist">Blacklist Check</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="deviceModel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Device Model</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your iPhone model" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="iphone15">iPhone 15 Series</SelectItem>
                      <SelectItem value="iphone14">iPhone 14 Series</SelectItem>
                      <SelectItem value="iphone13">iPhone 13 Series</SelectItem>
                      <SelectItem value="iphone12">iPhone 12 Series</SelectItem>
                      <SelectItem value="iphoneSE">iPhone SE (2nd/3rd Gen)</SelectItem>
                      <SelectItem value="iphone11">iPhone 11 Series</SelectItem>
                      <SelectItem value="iphoneX">iPhone X/XR/XS Series</SelectItem>
                      <SelectItem value="iphone8">iPhone 8 Series</SelectItem>
                      <SelectItem value="older">Older Models</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="serialNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IMEI/Serial Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-9" placeholder="Enter your device serial number" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-9" placeholder="Your email address" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-9" placeholder="Your full name" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any specific details about your device or requirements"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brand hover:bg-brand-accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Submit Order"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
