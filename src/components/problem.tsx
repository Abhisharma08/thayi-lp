import { TriangleAlert } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Doors That Move After Installation",
    description:
      "A shutter that warps, swells or drops out of square is not a snag — it is a re-fit. Frames get re-cut, hinges re-drilled, polish re-done, and the flat you were handing over next week is open again.",
  },
  {
    number: "02",
    title: "Five Vendors, Five Finish Standards",
    description:
      "The entrance comes from one supplier, the bedroom shutters from another, the laminate doors from a third. Grain, sheen and shade never quite agree — and when something fails, no one owns it.",
  },
  {
    number: "03",
    title: "Site Finishing That Never Ends",
    description:
      "Raw doors mean sanding, priming and polishing inside a finished interior — dust on new flooring, painters back on site, weeks added to a tight programme.",
  },
];

export default function Problem() {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-80 bg-accent" />
          </div>

          <div className="mb-5 flex items-center justify-center gap-2">
          </div>

          <h2 className="font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Is Your Door Schedule the Last Thing{" "}
            <span className="text-accent">
              Holding Up Handover?
            </span>
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="group border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              {/* Number */}
              <span className="font-heading text-5xl text-accent/50">
                {problem.number}
              </span>

              <div className="mt-10 h-px w-full bg-border transition-colors duration-300 group-hover:bg-accent" />

              {/* Title */}
              <h3 className="mt-8 font-heading text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}