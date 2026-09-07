import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';
import AnimatedSection from '@/components/animated-section';
import StickyEnquireButton from '@/components/sticky-enquire-button';
import ValueProposition from '@/components/value-proposition';
import ProductTypesSection from '@/components/problem';
import Differentiators from '@/components/differentiators';
import FaqSection from '@/components/faq-section';
import ProcessFlowSection from '@/components/process-flow-section';
import ApplicationsSection from '@/components/applications-section';
import WhyBuyersChooseUsSection from '@/components/why-buyers-choose-us-section';
import BuiltForProjectSection from '@/components/built-for-project-section';
import ClosingCtaSection from '@/components/closing-cta-section';
import DesignIndexSection from "@/components/design-index-section";
import Problem from '@/components/problem';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />

        <AnimatedSection>
          <ValueProposition />
        </AnimatedSection>

        <AnimatedSection>
          <Problem />
        </AnimatedSection>

        <AnimatedSection>
          <Differentiators />
        </AnimatedSection>

        <AnimatedSection>
          <ProcessFlowSection />
        </AnimatedSection>

        <AnimatedSection>
          <ApplicationsSection />
        </AnimatedSection>

        <AnimatedSection>
          <WhyBuyersChooseUsSection />
        </AnimatedSection>

        <AnimatedSection>
          <BuiltForProjectSection />
        </AnimatedSection>

        <AnimatedSection>
          <ClosingCtaSection />
        </AnimatedSection>
        
        {/* <AnimatedSection>
          <DesignIndexSection />
        </AnimatedSection> */}

      </main>
      <Footer />
      <StickyEnquireButton />
    </div>
  );
}
