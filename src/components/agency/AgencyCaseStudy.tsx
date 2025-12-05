import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Avanti from "../../public/Avanti.png";

// --- MOCK UI COMPONENTS ---
// (Simulating your local imports for this standalone demo)

// interface ButtonProps {
//   children: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
// }

interface FeatureItemProps {
  title: string;
  description: string;
}

interface ResultStatProps {
  value: string;
  label: string;
}

// const Button1 = ({ children, className = '', onClick }:ButtonProps) => (
//     <button
//         onClick={onClick}
//         className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
//     >
//         {children}
//     </button>
// );

// --- MAIN COMPONENT ---

export function AgencyCaseStudy() {
    
    // FIX: Define a proper function to handle the click
    const handleNavigation = () => {
        // Opens the link in a new tab
        window.open('https://pizza-avanti-dortmund.de/', '_blank');
        
        // OR: use this if you want to open in the same tab:
        // window.location.href = 'https://pizza-avanti-dortmund.de/';
    };

    return (
        <section id="work" className="py-24 bg-gray-50 font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="inline-block text-3xl md:text-4xl px-4 py-2 bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent font-bold mb-4">
                        Success Story
                    </div>
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-extrabold">
                       We Can Help you to be like <span className="bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">Pizza Avanti</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From zero digital presence to a thriving online business
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Card className="overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            
                            {/* Image Section */}
                            <div className="p-6 lg:p-10 bg-gray-100 flex items-center justify-center">
                                <img
                                    // Using a placeholder since local 'Avanti.png' isn't available here
                                    src={Avanti}
                                    alt="Pizza Avanti Dortmund"
                                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <CardContent className="p-8 lg:p-12 space-y-8 bg-white">
                                <div>
                                    <h3 className="text-3xl text-gray-900 font-bold mb-4">
                                        Pizza Avanti Dortmund
                                    </h3>
                                    <p className="text-gray-600">
                                        A local restaurant with no online presence wanted to expand their reach and compete with major dining spots. We built a complete digital presence from the ground up.
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4">
                                    <FeatureItem 
                                        title="Custom E-commerce Website" 
                                        description="Built a modern, mobile-responsive online store with seamless checkout" 
                                    />
                                    <FeatureItem 
                                        title="Brand Identity Redesign" 
                                        description="Created a premium logo and brand guidelines that resonate with customers" 
                                    />
                                    <FeatureItem 
                                        title="Social Media Launch" 
                                        description="Developed engaging content strategy across Instagram and Facebook" 
                                    />
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 p-6 bg-teal-50 rounded-xl border border-teal-100">
                                    <ResultStat value="250%" label="Revenue Growth" />
                                    <ResultStat value="10K+" label="New Customers" />
                                    <ResultStat value="3M" label="Social Reach" />
                                </div>

                                {/* FIX: Correct Button with onClick handler */}
                                <Button 
                                    onClick={handleNavigation}
                                    className="bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white w-full sm:w-auto shadow-md"
                                >
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

// --- HELPER COMPONENTS ---

const FeatureItem = ({ title, description }:FeatureItemProps) => (
    <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] flex items-center justify-center shrink-0 mt-1">
            <TrendingUp className="w-4 h-4 text-white" />
        </div>
        <div>
            <div className="text-gray-900 mb-1 font-semibold">{title}</div>
            <div className="text-gray-600 text-sm">{description}</div>
        </div>
    </div>
);

const ResultStat = ({ value, label }:ResultStatProps) => (
    <div className="text-center">
        <div className="text-2xl font-bold bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
            {value}
        </div>
        <div className="text-gray-600 text-xs font-medium uppercase tracking-wide">{label}</div>
    </div>
);

// --- APP ENTRY POINT ---
export default function App() {
    return <AgencyCaseStudy />;
}

// export function AgencyCaseStudy() {
//   const handleViewCaseStudy = () => {
//         // Correct way to navigate externally in React using a button click
//         window.open('https://pizza-avanti-dortmund.de/', '_blank');
//     };
//   return (
//     <section id="work" className="py-24 bg-linear-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-4">
//             Success Story
//           </div>
//           <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
//           Can Help you to be like <span className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">Pizza Avanti</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             From zero digital presence to a thriving online business
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <Card className="overflow-hidden border-2 border-gray-100 shadow-xl">
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//               {/* Image */}
//               <div className="p-6 lg:p-10 bg-gray-50 flex items-center justify-center ">
//                <img
//                   src={Avanti}
//                   alt="Pizza Avanti Dortmund"
//                   className="w-1100 h-100 max-w-100% object-fit: contain rounded-4xl "
//                 />

//               </div>

//               {/* Content */}
//               <CardContent className="p-8 lg:p-12">
//                 <h3 className="text-3xl text-gray-900 mb-4">
//                  Pizza Avanti Dortmund
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   A local restaurant with no online presence wanted to expand their reach and compete with major dining spots.
//                   and they built a complete digital presence from the ground up
//                 </p>

//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-start gap-3">
//                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] flex items-center justify-center shrink-0 mt-1">
//                       <TrendingUp className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-gray-900 mb-1">Custom E-commerce Website</div>
//                       <div className="text-gray-600 text-sm">Built a modern, mobile-responsive online store with seamless checkout</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] flex items-center justify-center shrink-0 mt-1">
//                       <TrendingUp className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-gray-900 mb-1">Brand Identity Redesign</div>
//                       <div className="text-gray-600 text-sm">Created a premium logo and brand guidelines that resonate with athletes</div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] flex items-center justify-center shrink-0 mt-1">
//                       <TrendingUp className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-gray-900 mb-1">Social Media Launch</div>
//                       <div className="text-gray-600 text-sm">Developed engaging content strategy across Instagram and Facebook</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Results */}
//                 <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl mb-6">
//                   <div className="text-center">
//                     <div className="text-2xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
//                       250%
//                     </div>
//                     <div className="text-gray-600 text-xs">Revenue Growth</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
//                       10K+
//                     </div>
//                     <div className="text-gray-600 text-xs">New Customers</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-1">
//                       3M
//                     </div>
//                     <div className="text-gray-600 text-xs">Social Reach</div>
//                   </div>
//                 </div>

//                 <Button className="bg-gradient-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white w-full sm:w-auto">
//                   View Full Case Study
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                   <link rel="stylesheet" href="https://pizza-avanti-dortmund.de/" />
//                 </Button>
//               </CardContent>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }