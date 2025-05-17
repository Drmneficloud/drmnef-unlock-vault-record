
import { CheckCircle2, Smartphone, ArrowRight, ListChecks } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="h-12 w-12 text-brand" />,
    title: 'Select Your Service',
    description: 'Choose the unlocking service that matches your needs and device model.'
  },
  {
    icon: <ListChecks className="h-12 w-12 text-brand" />,
    title: 'Submit Device Details',
    description: "Provide your iPhone's IMEI/Serial number and any other required information."
  },
  {
    icon: <ArrowRight className="h-12 w-12 text-brand" />,
    title: 'Process Unlock Request',
    description: 'Our system processes your request and works on unlocking your device remotely.'
  },
  {
    icon: <CheckCircle2 className="h-12 w-12 text-brand" />,
    title: 'Complete Unlock',
    description: 'Get confirmation when your device is successfully unlocked and ready to use.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Our streamlined process makes unlocking your iPhone simple and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-md hover-card-animation border-t-4 border-brand-accent">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand text-white h-8 w-8 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
