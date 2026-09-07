const projects = [
  {
    number: "01",
    title: "Independent Homes & Villas",
    description:
      "A statement solid wood entrance, matched interior doors throughout.",
  },
  {
    number: "02",
    title: "Apartment Projects",
    description:
      "Repeatable door schedules across flats, delivered floor by floor.",
  },
  {
    number: "03",
    title: "Interior Fit-Out Contractors",
    description:
      "Factory-finished shutters that arrive ready to hang.",
  },
  {
    number: "04",
    title: "Offices & Co-Working Spaces",
    description:
      "Veneer and laminate faces that hold up to constant use.",
  },
  {
    number: "05",
    title: "Hotels & Serviced Apartments",
    description:
      "Melamine CPL doors for low maintenance and acoustic seals.",
  },
  {
    number: "06",
    title: "Retail, Clinics & Showrooms",
    description:
      "Scratch-resistant HPL surfaces across a wide range of finishes.",
  },
];

export default function BuiltForProjectSection() {
  return (
    <section
      id="projects"
      className="section-spacing bg-background"
    >
      <div className="site-container">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-80 bg-accent" />
          </div>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Built for the Projects
            <br />
            We{" "}
            <span className="text-accent">
              Work On.
            </span>
          </h2>
        </div>

        {/* Project Types */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-x-16 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex gap-6 border-b border-border py-8 first:border-t md:nth-[2]:border-t"
            >
              {/* Number */}
              <span className="font-heading text-3xl text-accent/50">
                {project.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-heading text-xl font-medium leading-tight text-foreground sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}