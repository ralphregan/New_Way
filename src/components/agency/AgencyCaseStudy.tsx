import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AgencyCaseStudy() {
  return (
    <section id="work" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-4">
            Success Story
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            How We Helped <span className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">Jons Body Shop</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From zero digital presence to a thriving online business
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 border-gray-100 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630344745991-fb948c5bf9d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYzNjUzOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business Growth"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl text-gray-900 mb-4">
                  Jons Body Shop
                </h3>
                <p className="text-gray-600 mb-6">
                  A local bodybuilding supplement store with no online presence wanted to expand their reach 
                  and compete with major brands. We built them a complete digital presence from the ground up.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] flex items-center justify-center shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">Custom E-commerce Website</div>
                      <div className="text-gray-600 text-sm">Built a modern, mobile-responsive online store with seamless checkout</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] flex items-center justify-center shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">Brand Identity Redesign</div>
                      <div className="text-gray-600 text-sm">Created a premium logo and brand guidelines that resonate with athletes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] flex items-center justify-center shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">Social Media Launch</div>
                      <div className="text-gray-600 text-sm">Developed engaging content strategy across Instagram and Facebook</div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-2xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                      250%
                    </div>
                    <div className="text-gray-600 text-xs">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                      10K+
                    </div>
                    <div className="text-gray-600 text-xs">New Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
                      3M
                    </div>
                    <div className="text-gray-600 text-xs">Social Reach</div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white w-full sm:w-auto">
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}