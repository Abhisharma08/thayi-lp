import { Check } from "lucide-react";
import LeadForm from "./lead-form";

const benefits = [
  "A shortlist of designs matched to each opening, entrance to interiors",
  "The right collection and surface for each — Solid Wood, Veneer, Laminate, Melamine or Moulded Skin",
  "Timber species and finish options in natural or solid hues",
  "A quotation based on your sizes and quantities",
  "An indicative delivery and installation schedule",
];

export default function ClosingCtaSection() {
  return (
    <section
      id="lead-form"
      className="section-spacing bg-secondary/30"
    >
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <div className="h-px w-32 bg-accent" />
            </div>

            <h2 className="mt-5 font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Tell Us Your
              <br />
              Door{" "}
              <span className="text-accent">
                Requirement.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Send us the openings you need doors for, and our team will come
              back with:
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-accent">
                    <Check className="h-4 w-4 text-accent" />
                  </div>

                  <span className="text-sm leading-relaxed text-foreground sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Trust Statement */}
            <div className="mt-10 border-l-2 border-accent pl-6">
              <p className="font-heading text-2xl italic leading-tight text-foreground sm:text-3xl">
                Within 24 hours.
                <br />
                <span className="text-accent">
                  Zero obligation.
                </span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}