import { Megaphone, Globe, TrendingUp, Palette, Mail, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications that convert visitors into customers. Modern, responsive, and optimized for performance."
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engaging social media campaigns that build your brand and connect with your audience across all platforms."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Get found on Google. Our SEO strategies improve your search rankings and drive organic traffic to your site."
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create a memorable brand that stands out. From logos to complete brand guidelines, we've got you covered."
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Data-driven strategies to accelerate your business growth. We focus on metrics that matter to your bottom line."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture leads and drive conversions. Build lasting relationships with your customers."
  }
];

export function AgencyServices() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-4">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Services That <span className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">Drive Growth</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From strategy to execution, we provide end-to-end digital marketing solutions tailored to your business goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-100 to-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#3B9B8E]" />
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}