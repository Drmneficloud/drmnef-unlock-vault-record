
import { Shield, Zap, Clock, CheckSquare, Users, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-brand-highlight" />,
    title: 'Secure Process',
    description: 'Our unlocking process is completely secure and doesn't void your warranty or damage your device.'
  },
  {
    icon: <Zap className="h-10 w-10 text-brand-highlight" />,
    title: 'Fast Turnaround',
    description: 'Most unlocks are completed within 24-48 hours, with some services available in as little as 1 hour.'
  },
  {
    icon: <Clock className="h-10 w-10 text-brand-highlight" />,
    title: '24/7 Service',
    description: 'Our automated systems work around the clock, processing your unlock requests even during off-hours.'
  },
  {
    icon: <CheckSquare className="h-10 w-10 text-brand-highlight" />,
    title: 'Guaranteed Results',
    description: 'We offer a 100% money-back guarantee if we're unable to unlock your device successfully.'
  },
  {
    icon: <Users className="h-10 w-10 text-brand-highlight" />,
    title: 'Expert Support',
    description: 'Our team of iPhone specialists is available to answer your questions and provide guidance.'
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-brand-highlight" />,
    title: 'Customer Satisfaction',
    description: 'With thousands of satisfied customers, our service quality speaks for itself.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Drmnef?</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            We provide industry-leading iPhone unlocking services with a focus on security, speed, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 hover-card-animation hover:border-brand-accent"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
