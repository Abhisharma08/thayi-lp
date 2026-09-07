import Image from "next/image";
import { Button } from "./ui/button";
import LeadForm from "./lead-form";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-primary"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/ddqqlfsjp/image/upload/q_auto/f_auto/v1775728668/Modern_brushed_aluminum_skirting_detail_c6maok.png"
          alt="Premium door interior"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />

        {/* Dark espresso overlay */}
        <div className="absolute inset-0 bg-primary/80" />
      </div>

          <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="max-w-2xl text-primary-foreground text-center lg:text-left">

            {/* Eyebrow */}
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Thayi by Fitoutz Group · Bengaluru
            </p>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              44 Door Designs.
              <br />
              Solid Wood Entrances to Everyday Interiors.
              <br />
              <span className="text-accent">
                One Factory in Bengaluru.
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 font-heading text-xl italic text-primary-foreground sm:text-2xl">
              Crafted with precision. Engineered to perform.
            </p>

            {/* Features */}
            <ul className="mt-10 space-y-4 text-left">
              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <p className="text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                  44 designs across 5 collections — entrance, premium
                  interior and everyday interior doors in one catalogue
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <p className="text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                  Finger-jointed, edge-laminated construction for
                  dimensional stability and strength
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <p className="text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                  Factory-finished in natural or solid hues; moulded skin
                  doors pre-primed for any colour
                </p>
              </li>

              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <p className="text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                  Manufactured and supplied in Bengaluru by Fitoutz Group
                </p>
              </li>
            </ul>
          </div>

          {/* Lead Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}