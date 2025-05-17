
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'iPhone 13 Pro User',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    stars: 5,
    text: 'My carrier wanted to charge an outrageous fee to unlock my iPhone. Drmnef did it in less than 24 hours at a fraction of the cost. Highly recommend!'
  },
  {
    name: 'Michael Chen',
    role: 'iPhone 12 User',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    stars: 5,
    text: 'I was skeptical at first, but the process was incredibly simple. I submitted my IMEI, paid, and within a day my phone was unlocked and working with my new carrier.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'iPhone SE User',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    stars: 4,
    text: 'Great service! The customer support team was very helpful when I had questions about the unlocking process. Would use again.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-muted text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Join thousands of satisfied customers who have unlocked their iPhones with Drmnef.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover-card-animation"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-highlight text-brand-highlight" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-400" />
                ))}
              </div>
              
              <p className="mb-6 text-gray-300">{testimonial.text}</p>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
