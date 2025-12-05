import { CheckCircle2, Lightbulb, Users, Zap, HeartHandshake, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovative Strategies",
    description: "We don't follow trends—we create them. Our creative approaches set you apart from competitors."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work with experienced professionals who are passionate about your success."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "Every decision is backed by analytics and metrics that matter to your business."
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "We move quickly without compromising quality. Your time to market matters."
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description: "We're not just vendors—we're your growth partners, invested in your long-term success."
  },
  {
    icon: CheckCircle2,
    title: "Transparent Communication",
    description: "Regular updates, clear reporting, and honest conversations. No surprises."
  }
];

export function AgencyWhyUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-bold inline-block px-4 py-2 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-4">
            Why Choose Us
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Your Success Is <span className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">Our Mission</span>
          </h2>
          <p className="font-medium text-gray-600 max-w-2xl mx-auto text-lg">
            We combine creativity, technology, and strategy to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className=" relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#3B9B8E]" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">{reason.title}</h3>
                  <p className="font-medium text-gray-600">{reason.description}</p>
                </div> 
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}