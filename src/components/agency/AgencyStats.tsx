import { Target, Users, Rocket, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Satisfied Clients",
    description: "Businesses we've helped grow"
  },
  {
    icon: Rocket,
    value: "200%",
    label: "Average Growth",
    description: "Client revenue increase"
  },
  {
    icon: Target,
    value: "98%",
    label: "Success Rate",
    description: "Projects delivered on time"
  },
  {
    icon: Award,
    value: "15+",
    label: "Industry Awards",
    description: "Recognition for excellence"
  }
];

export function AgencyStats() {
  return (
    <section className="rounded-3xl shadow-2xl shadow-emerald-200 py-24 bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
            Proven Track Record
          </h2>
          <p className="font-medium text-white/90 max-w-2xl mx-auto text-lg">
            Numbers that speak louder than words
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-5xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-xl text-white mb-2">
                  {stat.label}
                </div>
                <div className="font-medium text-white/80 text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}