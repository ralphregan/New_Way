import { AgencyHeader } from "./components/agency/AgencyHeader";
import { AgencyHero } from "./components/agency/AgencyHero";
import { AgencyServices } from "./components/agency/AgencyServices";
import { AgencyCaseStudy } from "./components/agency/AgencyCaseStudy";
import { AgencyStats } from "./components/agency/AgencyStats";
import { AgencyWhyUs } from "./components/agency/AgencyWhyUs";
import { AgencyContact } from "./components/agency/AgencyContact";
import { AgencyFooter } from "./components/agency/AgencyFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AgencyHeader />
      <AgencyHero />
      <AgencyServices />
      <AgencyCaseStudy />
      <AgencyStats />
      <AgencyWhyUs />
      <AgencyContact />
      <AgencyFooter />
    </div>
  );
}
