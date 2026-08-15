import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureStrip } from "@/components/FeatureStrip";
import { DiscoverSection } from "@/components/DiscoverSection";
import { HobbyScreen } from "@/components/HobbyScreen";
import { HowItWorks } from "@/components/HowItWorks";
import { LearnSection } from "@/components/LearnSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ProfilePreview } from "@/components/ProfilePreview";
import { PartnerSection } from "@/components/PartnerSection";
import { AppPreview } from "@/components/AppPreview";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <DiscoverSection />
        <HobbyScreen />
        <HowItWorks />
        <LearnSection />
        <CommunitySection />
        <ProfilePreview />
        <PartnerSection />
        <AppPreview />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
