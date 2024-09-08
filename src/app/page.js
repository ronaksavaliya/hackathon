import ExploreChallenges from "@/components/ExploreChallenges/ExploreChallenges";
import HeroSection from "@/components/HeroSection/HeroSection";
import WhyParticipateSection from "@/components/WhyParticipateSection/WhyParticipateSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyParticipateSection />
      <ExploreChallenges />
    </div>
  );
}
