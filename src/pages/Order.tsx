
import Layout from "@/components/Layout";
import OrderForm from "@/components/order/OrderForm";
import { Smartphone, ShieldCheck, CreditCard } from 'lucide-react';

const Order = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Place Your Order</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below with your device details and we'll process your unlock request immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <OrderForm />
          </div>
          
          <div>
            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h3 className="font-medium">Device Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Select your device model and provide the IMEI or serial number. You can find this in your iPhone's Settings &gt; General &gt; About.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h3 className="font-medium">Security Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      Your information is encrypted and never shared with third parties. We use industry-standard security protocols.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h3 className="font-medium">Payment Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      After submitting your order, you'll be directed to our secure payment page. We accept all major credit cards and PayPal.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our customer service team is available 24/7 to assist you with any questions.
                </p>
                <div className="text-sm">
                  <div className="font-medium">Email Support:</div>
                  <div className="text-muted-foreground mb-2">support@drmnef.com</div>
                  
                  <div className="font-medium">Phone Support:</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
