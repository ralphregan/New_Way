import { Button } from "../ui/button";
import {useState} from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Video from "../../public/Final Video.mp4"


export function AgencyHero() {
  const [playDemo, setPlayDemo] = useState(false);
function handlePlayDemo() {
  setPlayDemo(!playDemo);
// Reset after 3 seconds for demo purposes
    // Logic to open a modal or navigate to demo video
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden shadow-3xl rounded-4xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-50 via-cyan-50 to-emerald-50"></div>
      
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
              <span className="font-medium bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">
                Your New Way to Digital Success
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              <span className="font-bold block text-gray-900">Transform Your</span>
              <span className="font-bold block bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            
            <p className="font-medium text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
              We craft innovative digital marketing strategies that drive real results. 
              From stunning websites to powerful campaigns, we're your partner in growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="font-medium bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={handlePlayDemo} variant="outline" className="font-medium border-2 border-gray-300 hover:border-[#3B9B8E] hover:text-[#3B9B8E] px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                {playDemo ? "Stop Demo" : "Play Demo"}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="font-semibold flex items-center gap-8">
              <div>
                <div className="text-3xl bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                  50+
                </div>
                <div className="font-medium text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                  200%
                </div>
                <div className="font-medium text-gray-600 text-sm">Avg. Growth</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                  4.9/5
                </div>
                <div className="font-medium text-gray-600 text-sm">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] rounded-2xl blur-2xl opacity-20"></div>
             <video
             
                className="rounded-2xl shadow-xl w-full h-auto relative z-10"
                controls={playDemo ? true : false}
                autoPlay
                loop
                muted = {playDemo ? false : true}

                playsInline
              >
                <source src={Video} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">
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

