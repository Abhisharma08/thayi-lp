const advantages = [
  {
    number: "01",
    title: "Finger-Jointed, Edge-Laminated Core",
    description:
      "Every solid wood door is built up from finger-jointed sections and edge-laminated, so movement is engineered out. The shutter stays square, holds its hardware and takes a heavy handle without complaint.",
  },
  {
    number: "02",
    title: "A Choice of Timber Species",
    description:
      "Specify the species that suits the elevation and the budget. Grain, density and tone change with the choice, so the entrance matches the architecture rather than the catalogue.",
  },
  {
    number: "03",
    title: "Factory Finishing, Not Site Finishing",
    description:
      "Solid wood and veneer doors are finished in natural or solid hues before dispatch. Moulded skin doors arrive pre-primed and factory-finishable to any vibrant colour. Consistent sheen across every opening, and no polishing crew inside a finished interior.",
  },
  {
    number: "04",
    title: "Five Surface Systems Under One Roof",
    description:
      "Solid Wood for entrances, Veneer for natural warmth, High Pressure Laminate for scratch resistance, Melamine CPL for low maintenance and acoustic seals, and Moulded Skin for economy and light weight. One supplier, one standard, one schedule.",
  },
  {
    number: "05",
    title: "A Named Design Library of 44",
    description:
      "Every design carries a name chosen for its character — Ojas, Samarth, Zenith, Onyx — so drawings, BOQs and site instructions all point at the same shutter.",
  },
  {
    number: "06",
    title: "Backed by Fitoutz Group",
    description:
      "Manufacturing, finishing and supply are held by one team in Bengaluru, so accountability does not change hands between the drawing and the doorframe.",
  },
];

export default function Differentiators() {
  return (
    <section
      id="advantages"
      className="section-spacing bg-background"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-80 bg-accent" />
          </div>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Six Advantages That Set
            <br />
            <span className="text-accent">
              Thayi Doors Apart.
            </span>
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <div
              key={advantage.number}
              className="group border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-secondary/40 sm:p-10"
            >
              {/* Number and Line */}
              <div className="flex items-center justify-between">
                <span className="font-heading text-5xl leading-none text-accent/50">
                  {advantage.number}
                </span>

                <div className="h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
              </div>

              {/* Title */}
              <h3 className="mt-10 font-heading text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}