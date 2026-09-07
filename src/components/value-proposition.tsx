export default function ValueProposition() {
  return (
    <section
      id="about"
      className="section-spacing bg-background"
    >
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">

          {/* Section Label */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-80 bg-accent" />
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            One Door Programme
            <br />
            for the{" "}
            <span className="text-accent">
              Entire Building.
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every opening in a project asks for something different.
              The main entrance has to carry weight, weather and first
              impressions. Bedrooms and utility rooms need doors that are
              light, quiet and easy to finish. Offices and apartments want
              clean grain and hard-wearing surfaces.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Thayi covers all of it from one catalogue —
            </p>
          </div>

        </div>

        {/* Statistics */}
        <div className="mx-auto my-14 grid max-w-5xl border-y border-border sm:grid-cols-3">

          <div className="border-b border-border px-6 py-6 text-center sm:border-b-0 sm:border-r">
            <span className="font-heading text-5xl text-primary sm:text-6xl">
              24
            </span>

            <p className="mx-auto mt-3 max-w-[180px] text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Solid Wood Entrance Designs
            </p>
          </div>

          <div className="border-b border-border px-6 py-10 text-center sm:border-b-0 sm:border-r">
            <span className="font-heading text-5xl text-primary sm:text-6xl">
              8
            </span>

            <p className="mx-auto mt-3 max-w-[180px] text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Moulded Skin Door Designs
            </p>
          </div>

          <div className="px-6 py-10 text-center">
            <span className="font-heading text-5xl text-primary sm:text-6xl">
              12
            </span>

            <p className="mx-auto mt-3 max-w-[180px] text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Premium Interior Designs
            </p>
          </div>

        </div>

        {/* Engineering Content */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="flex items-center justify-center gap-4">
          </div>

          <h3 className="mt-6 font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
            Engineering underneath.
            <br />
            Performance that lasts.
          </h3>

          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              The engineering underneath is what makes them last.
              Finger-jointed, edge-laminated construction holds the door
              dimensionally stable through the seasons, a choice of timber
              species lets you set the grain and tone you want, and doors
              leave the factory finished in a wide selection of natural or
              solid hues.
              <br />
              What arrives on site is ready to hang — not ready to sand.
            </p>
          </div>

        </div>

        {/* Brand Statement */}
        <div className="mx-auto mt-20 max-w-4xl border-y border-border py-8 text-center">
          <p className="font-heading text-3xl italic leading-tight text-primary sm:text-4xl md:text-3xl">
            “Crafted with precision.
            Engineered to perform.”
          </p>
        </div>

      </div>
    </section>
  );
}