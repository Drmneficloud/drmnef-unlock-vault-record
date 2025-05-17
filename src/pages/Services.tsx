
import { Smartphone, Lock, Shield, BarChart } from 'lucide-react';
import Layout from "@/components/Layout";
import ServiceCard from "@/components/services/ServiceCard";

const Services = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our iPhone Unlocking Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right iPhone unlocking solution for your specific needs. All services come with our money-back guarantee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={Smartphone}
            title="Network Unlock"
            description="Remove carrier restrictions from your iPhone"
            price={29.99}
            timeframe="24-48 hours"
            benefits={[
              "Use any carrier worldwide",
              "No technical knowledge required",
              "Permanent unlock solution",
              "Official unlock method",
              "Full customer support"
            ]}
            popular={true}
          />
          
          <ServiceCard
            icon={Lock}
            title="iCloud Unlock"
            description="Remove iCloud activation lock from your device"
            price={49.99}
            timeframe="2-5 days"
            benefits={[
              "Bypass activation lock",
              "Use with a new Apple ID",
              "Full device functionality",
              "Works with all iOS versions",
              "24/7 technical support"
            ]}
          />
          
          <ServiceCard
            icon={Shield}
            title="Blacklist Check"
            description="Verify if your iPhone is blacklisted or clean"
            price={9.99}
            timeframe="1-2 hours"
            benefits={[
              "Check IMEI status instantly",
              "Detailed report provided",
              "Verify before purchase",
              "Check theft/loss status",
              "International database check"
            ]}
          />
          
          <ServiceCard
            icon={BarChart}
            title="Carrier Check"
            description="Check your iPhone's original carrier and lock status"
            price={7.99}
            timeframe="1 hour"
            benefits={[
              "Verify original carrier",
              "Check contract status",
              "Detailed IMEI report",
              "Check warranty status",
              "Purchase verification"
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
