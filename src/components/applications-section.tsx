const applications = [
  {
    number: "01",
    title: "Main Entrances",
    description:
      "24 Solid Wood designs suited to entrance doors — Ojas, Tejas, Drishti, Veer, Prabha, Dhira, Uttam, Vibhu, Aloka, Samarth, Nishtha, Ananta, Akshaya, Vijay, Divyansh. Raised panels, carved profiles and flush contemporary lines in natural or solid hues.",
  },
  {
    number: "02",
    title: "Double-Leaf & Feature Entrances",
    description:
      "Wide openings and villa porches take Shreyas with its arched centre panelling, Vistaar in six-panel symmetry, louvred Aditya, and Utsav with flanking glazed side panels.",
  },
  {
    number: "03",
    title: "Glazed & Ventilated Openings",
    description:
      "Where an entrance needs daylight or a service door needs air — Mahima and Bhavya with panelled glazing, Gaurav for utility entries, Sthira and Uday with divided top lights.",
  },
  {
    number: "04",
    title: "Bedrooms, Kitchens & Everyday Interiors",
    description:
      "8 Moulded Skin designs — Aarav, Veyra, Myra, Kiaan, Anvi, Reyansh, Ishaan, Aadhira. Lighter in weight, dimensionally stable through seasoned internal frame components, pre-primed and finishable to any vibrant colour.",
  },
  {
    number: "05",
    title: "Modern Apartments & Offices",
    description:
      "4 Veneer designs — Zenith, Aurum, Lumina, Vantage. A thin slice of natural or reconstituted veneer over plywood or MDF core panels gives the warmth and character of real grain.",
  },
  {
    number: "06",
    title: "High-Traffic & Low-Maintenance Interiors",
    description:
      "4 Laminate designs — Solace, Nova, Ember, Onyx — in High Pressure Laminate for strong bonding and scratch-resistant surfaces. 4 Melamine designs — Terra, Vogue, Element, Essence — in Continuously Pressed Laminate for low maintenance, environmental resistance and brilliant acoustic seals.",
  },
];

export default function ApplicationsSection() {
  return (
    <section
      id="applications"
      className="section-spacing bg-secondary/30"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-80 bg-accent" />
          </div>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Which Thayi Door
            <br />
            Goes{" "}
            <span className="text-accent">
              Where?
            </span>
          </h2>
        </div>

        {/* Applications Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <div
              key={application.number}
              className="group flex min-h-[380px] flex-col border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-background sm:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-heading text-5xl leading-none text-accent/50">
                  {application.number}
                </span>

                <div className="h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
              </div>

              {/* Title */}
              <h3 className="mt-10 font-heading text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                {application.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {application.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}