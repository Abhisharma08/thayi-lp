const collections = [
  {
    number: "01",
    title: "Solid Wood",
    subtitle: "24 designs · Entrance",
    designs: [
      "Ojas",
      "Tejas",
      "Drishti",
      "Veer",
      "Prabha",
      "Sthira",
      "Dhira",
      "Uttam",
      "Mahima",
      "Vibhu",
      "Aloka",
      "Samarth",
      "Nishtha",
      "Ananta",
      "Akshaya",
      "Bhavya",
      "Gaurav",
      "Uday",
      "Vijay",
      "Utsav",
      "Shreyas",
      "Vistaar",
      "Aditya",
      "Divyansh",
    ],
  },
  {
    number: "02",
    title: "Moulded Skin",
    subtitle: "8 designs · Everyday Interiors",
    designs: [
      "Aarav",
      "Veyra",
      "Myra",
      "Kiaan",
      "Anvi",
      "Reyansh",
      "Ishaan",
      "Aadhira",
    ],
  },
  {
    number: "03",
    title: "Veneer",
    subtitle: "4 designs · Premium Interiors",
    designs: ["Zenith", "Aurum", "Lumina", "Vantage"],
  },
  {
    number: "04",
    title: "Laminate",
    subtitle: "4 designs · Premium Interiors",
    designs: ["Solace", "Nova", "Ember", "Onyx"],
  },
  {
    number: "05",
    title: "Melamine",
    subtitle: "4 designs · Premium Interiors",
    designs: ["Terra", "Vogue", "Element", "Essence"],
  },
];

export default function DesignIndexSection() {
  return (
    <section
      id="design-index"
      className="section-spacing bg-secondary/30"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-80 bg-accent" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Design Collections
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Explore the
            <br />
            <span className="text-accent">Design Index.</span>
          </h2>
        </div>

        {/* Collections */}
        <div className="mx-auto mt-16 max-w-6xl space-y-5">
          {collections.map((collection) => (
            <div
              key={collection.number}
              className="group border border-border bg-background p-6 transition-all duration-300 hover:border-accent sm:p-8 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[180px_1fr]">
                
                {/* Collection Information */}
                <div>
                  <span className="font-heading text-4xl leading-none text-accent/50">
                    {collection.number}
                  </span>

                  <h3 className="mt-5 font-heading text-2xl font-medium text-foreground sm:text-3xl">
                    {collection.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    {collection.subtitle}
                  </p>
                </div>

                {/* Design Names */}
                <div className="flex flex-wrap content-center gap-x-3 gap-y-3 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  {collection.designs.map((design) => (
                    <span
                      key={design}
                      className="font-heading text-lg text-foreground transition-colors duration-200 hover:text-accent sm:text-xl"
                    >
                      {design}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}