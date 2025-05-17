
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield, Unlock, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-muted text-white">
      {/* Background pattern/effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-highlight rounded-full filter blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-brand-accent rounded-full filter blur-3xl animate-pulse-subtle delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium flex items-center">
                <Shield size={16} className="mr-2" />
                Trusted by 50,000+ customers
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Unlock Your iPhone's <span className="gradient-text">Full Potential</span>
            </h1>
            
            <p className="text-lg text-gray-200 max-w-lg">
              Professional iPhone unlocking service that frees your device from carrier restrictions and iCloud locks. Fast, secure, and guaranteed results.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-brand-highlight hover:bg-brand-accent text-white">
                  Get Started
                </Button>
              </Link>
              <Link to="/track">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Track Your Order
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-highlight" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-highlight" />
                <span className="text-sm">100% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-highlight" />
                <span className="text-sm">Money Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-highlight" />
                <span className="text-sm">Fast Turnaround</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-72 h-[500px] md:w-80 md:h-[550px] bg-gradient-to-b from-brand-accent to-brand-muted p-4 rounded-[3rem] shadow-xl border-8 border-gray-800 overflow-hidden animate-float">
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-purple-500">
                  <div className="flex flex-col h-full justify-center items-center">
                    <Unlock className="h-24 w-24 text-white/90 mb-4" />
                    <div className="text-center text-white px-6">
                      <h3 className="text-2xl font-bold mb-2">iPhone Unlocked</h3>
                      <p className="text-sm">Your device is now free from restrictions</p>
                      <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">Status:</span>
                          <span className="text-xs font-semibold">Complete</span>
                        </div>
                        <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full bg-green-400 w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Phone details */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-b-xl z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
