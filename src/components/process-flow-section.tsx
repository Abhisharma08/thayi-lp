const steps = [
  {
    number: "01",
    title: "Share Your Door Schedule",
    description:
      "Tell us the openings, sizes and quantities — a floor plan, a BOQ or a photograph of the site is enough to start.",
  },
  {
    number: "02",
    title: "Select Your Designs",
    description:
      "We shortlist from the 44 designs, matching each opening to the right collection.",
  },
  {
    number: "03",
    title: "Specify Timber & Finish",
    description:
      "Choose the timber species, then the natural or solid hue — or a primed shutter to be finished in your project colour.",
  },
  {
    number: "04",
    title: "Manufacture & Factory Finish",
    description:
      "Doors are built up finger-jointed and edge-laminated, then surfaced and finished under factory conditions.",
  },
  {
    number: "05",
    title: "Delivery & Installation",
    description:
      "Finished doors reach site ready to hang, sequenced to your handover dates.",
  },
];

export default function ProcessFlowSection() {
  return (
    <section
      id="process"
      className="section-spacing bg-secondary/30"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-80 bg-accent" />
          </div>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Process Flow —
            <span className="text-accent"> Step by Step</span>
          </h2>
        </div>

        {/* Process Flow */}
        <div className="relative mx-auto mt-20 max-w-7xl">
          
          {/* Desktop Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-border lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-background">
                  <span className="font-heading text-lg text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="mt-8">
                  <h3 className="font-heading text-xl font-medium leading-tight text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}