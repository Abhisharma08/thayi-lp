const reasons = [
  {
    number: "01",
    title: "Every Opening, One Catalogue",
    description:
      "44 designs across five collections cover the entrance, the premium interiors and the everyday interiors of the same building — one order, one finish standard, one delivery schedule.",
  },
  {
    number: "02",
    title: "Stability Engineered In, Not Applied On",
    description:
      "Finger-jointed, edge-laminated construction in solid wood and seasoned internal frames in moulded skin doors. Stability is a construction decision here, and it shows up years later.",
  },
  {
    number: "03",
    title: "Finish Matched Across the Project",
    description:
      "Because the doors are finished in the factory, the sheen and shade on the bedroom door match the entrance. Site polishing cannot promise that.",
  },
  {
    number: "04",
    title: "Named Designs Make Specification Simple",
    description:
      "Drawings, BOQs and site instructions reference the same names, which removes guesswork between the architect, the contractor and the carpenter.",
  },
  {
    number: "05",
    title: "Premium Interiors Without Solid-Wood Budgets",
    description:
      "Veneer, Laminate and Melamine deliver the look and surface performance interiors need, at a cost base that works for apartment projects and offices at scale.",
  },
  {
    number: "06",
    title: "One Point of Accountability",
    description:
      "Design selection, timber specification, manufacture, finishing and delivery all sit with Fitoutz Group — one team to call, before and after installation.",
  },
];

export default function WhyBuyersChooseUsSection() {
  return (
    <section
      id="why-thayi"
      className="section-spacing bg-secondary/30"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-80 bg-accent" />
          </div>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Why Architects, Builders
            <br />
            & Homeowners Choose{" "}
            <span className="text-accent">
              Thayi.
            </span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent sm:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-heading text-5xl leading-none text-accent/50">
                  {reason.number}
                </span>

                <div className="h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
              </div>

              {/* Title */}
              <h3 className="mt-10 font-heading text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}