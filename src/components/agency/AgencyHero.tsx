import { Button } from "../ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AgencyHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#3B9B8E]" />
              <span className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">
                Your New Way to Digital Success
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              <span className="block text-gray-900">Transform Your</span>
              <span className="block bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
              We craft innovative digital marketing strategies that drive real results. 
              From stunning websites to powerful campaigns, we're your partner in growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 hover:border-[#3B9B8E] hover:text-[#3B9B8E] px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                  50+
                </div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                  200%
                </div>
                <div className="text-gray-600 text-sm">Avg. Growth</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                  4.9/5
                </div>
                <div className="text-gray-600 text-sm">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] rounded-2xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjM2NDE4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Marketing Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}