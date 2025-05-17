
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-brand to-brand-accent rounded-3xl p-10 md:p-16 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Unlock Your iPhone?
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Join thousands of satisfied customers who have unlocked their devices with Drmnef. 
              Our process is fast, secure, and comes with a money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-brand hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
