function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/65">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#c8a45a]/40"
      />
    </div>
  );
}

export default function Home() {
  const products = [
    {
      name: "GP Series",
      subtitle: "Gloss Paint Protection Film",
      description:
        "High-clarity gloss film designed to preserve the original paint finish while delivering a deep, showroom-level appearance.",
      features: [
        "High optical clarity",
        "Ceramic top coat",
        "Self-healing surface",
        "10-year durability",
      ],
      sizes: [`60" × 50'`, `36" × 50'`, `30" × 50'`, `24" × 50'`, `18" × 50'`],
    },
    {
      name: "SP Series",
      subtitle: "Satin Paint Protection Film",
      description:
        "A refined satin finish that transforms paint with a smooth, modern look while maintaining premium protection and durability.",
      features: [
        "Uniform satin finish",
        "Ceramic top coat",
        "Self-healing surface",
        "10-year durability",
      ],
      sizes: [`60" × 50'`, `36" × 50'`, `30" × 50'`, `24" × 50'`, `18" × 50'`],
    },
  ];

  const tech = [
    {
      title: "Ceramic Top Coat",
      text: "A factory-integrated top layer engineered for slickness, easier maintenance, and a premium surface feel.",
    },
    {
      title: "Self-Healing Surface",
      text: "Minor wash marks and light surface imperfections can diminish with heat, helping the film maintain a refined finish.",
    },
    {
      title: "Optical Clarity",
      text: "Built to complement the original paint finish with clean transparency, strong gloss retention, and a luxury appearance.",
    },
    {
      title: "Long-Term Durability",
      text: "Engineered for daily driving conditions and backed by a 10-year protection standard across the lineup.",
    },
  ];

  const dealerBenefits = [
    "Competitive dealer pricing",
    "Consistent installation performance",
    "Canada-wide distribution",
    "Technical support and installation guidance",
    "Sample and demonstration opportunities",
  ];

  const nav = [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Dealers", href: "#dealers" },
    { label: "Support", href: "#support" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-xl font-semibold tracking-[0.3em] text-[#c8a45a]">
            INVINX
          </a>

          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#dealers"
            className="rounded-full border border-[#c8a45a]/50 bg-[#c8a45a] px-5 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Become a Dealer
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,164,90,0.22),_transparent_40%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#c8a45a]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#c8a45a]">
                Paint Protection Film • Canada-Wide
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">
                Luxury finish. <span className="text-[#c8a45a]">Professional protection.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                INVINX Paint Protection Film is engineered for dealerships, installers, and
                drivers who demand premium clarity, self-healing performance, and long-term
                durability.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-[#c8a45a] px-6 py-3 font-medium text-black transition hover:opacity-90"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Request Sample / Demo
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {["10-Year Protection", "Ceramic Top Coat", "Self-Healing Surface"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/85"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="w-full max-w-xl rounded-[2rem] border border-[#c8a45a]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.24em] text-white/45">
                      Series Lineup
                    </span>
                    <span className="text-sm text-[#c8a45a]">Premium Surface Protection</span>
                  </div>

                  <div className="space-y-6">
                    {products.map((product) => (
                      <div
                        key={product.name}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-semibold">{product.name}</h3>
                            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#c8a45a]">
                              {product.subtitle}
                            </p>
                          </div>
                          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                            10-Year
                          </span>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-white/65">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0c0c0c]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
            {[
              [
                "Built for dealerships",
                "A premium lineup designed to support cleaner installs, stronger presentation, and confident customer delivery.",
              ],
              [
                "Installer-informed",
                "Developed with real installation experience in mind for smooth handling and professional consistency.",
              ],
              [
                "Available across Canada",
                "A dealer-focused supply model with responsive support and scalable product access.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a45a]">Products</p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Two finishes. One premium standard.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                INVINX offers a focused lineup of luxury paint protection films designed to
                deliver visual clarity, long-term durability, and consistent installation
                performance.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-semibold">{product.name}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#c8a45a]">
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="rounded-full border border-[#c8a45a]/30 px-4 py-2 text-sm text-[#c8a45a]">
                      10-Year Durability
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-white/70">{product.description}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-white/45">
                        Key Features
                      </h4>
                      <ul className="mt-4 space-y-3 text-white/80">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c8a45a]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-white/45">
                        Available Roll Sizes
                      </h4>
                      <ul className="mt-4 space-y-3 text-white/80">
                        {product.sizes.map((size) => (
                          <li
                            key={size}
                            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                          >
                            {size}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="rounded-full bg-[#c8a45a] px-5 py-3 font-medium text-black"
                    >
                      Request Sample
                    </a>
                    <a
                      href="#support"
                      className="rounded-full border border-white/15 px-5 py-3 font-medium text-white/90"
                    >
                      Download Spec Sheet
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="border-b border-white/10 bg-[#0c0c0c]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a45a]">Technology</p>
                <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                  Engineered for a premium finish.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  INVINX films combine protective performance with a luxury visual standard through
                  layered construction built for clarity, durability, and everyday drivability.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#c8a45a]/10 to-transparent p-8">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">Core Standards</p>
                  <div className="mt-8 space-y-5">
                    {[
                      "Premium clarity",
                      "Smooth installation characteristics",
                      "Luxury gloss or satin finish",
                      "Dealer and installer support",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-white/85">
                        <span className="h-2 w-2 rounded-full bg-[#c8a45a]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {tech.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8"
                >
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="dealers" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a45a]">Dealers</p>
                <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                  Become an INVINX dealer.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  Partner with INVINX to offer a premium paint protection solution backed by
                  responsive support, Canada-wide supply, and installer-informed product
                  performance.
                </p>

                <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                  <h3 className="text-xl font-semibold">Dealer advantages</h3>
                  <ul className="mt-5 space-y-4 text-white/80">
                    {dealerBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c8a45a]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8">
                <h3 className="text-2xl font-semibold">Dealer inquiry</h3>
                <p className="mt-3 text-white/65">
                  Submit your business information and our team will follow up with product and
                  dealer details.
                </p>

                <form className="mt-8 grid gap-5 md:grid-cols-2">
                  <Input label="Business Name" placeholder="Your dealership or shop" />
                  <Input label="City / Province" placeholder="Calgary, Alberta" />
                  <Input label="Contact Name" placeholder="Full name" />
                  <Input label="Email Address" placeholder="name@business.com" type="email" />
                  <Input label="Phone Number" placeholder="(000) 000-0000" />
                  <Input label="Monthly Film Usage" placeholder="Approximate volume" />

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm text-white/65">Message</label>
                    <textarea
                      placeholder="Tell us about your business, current film usage, or what you're looking for."
                      className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#c8a45a]/40"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="button"
                      className="rounded-full bg-[#c8a45a] px-6 py-3 font-medium text-black transition hover:opacity-90"
                    >
                      Submit Dealer Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="border-b border-white/10 bg-[#0c0c0c]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a45a]">Support</p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Product support and resources.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Resources for installers, dealerships, and vehicle owners to help maintain product
                appearance and get the most out of every installation.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-xl font-semibold">Care & Maintenance</h3>
                <p className="mt-4 leading-8 text-white/65">
                  Hand washing is recommended. Avoid abrasive cleaners and aggressive polishing
                  compounds to preserve finish and clarity.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-xl font-semibold">Downloads</h3>
                <div className="mt-5 space-y-3 text-white/80">
                  <a
                    href="#"
                    className="block rounded-xl border border-white/10 px-4 py-3 transition hover:border-[#c8a45a]/40 hover:bg-white/[0.03]"
                  >
                    GP Series Spec Sheet
                  </a>
                  <a
                    href="#"
                    className="block rounded-xl border border-white/10 px-4 py-3 transition hover:border-[#c8a45a]/40 hover:bg-white/[0.03]"
                  >
                    SP Series Spec Sheet
                  </a>
                  <a
                    href="#"
                    className="block rounded-xl border border-white/10 px-4 py-3 transition hover:border-[#c8a45a]/40 hover:bg-white/[0.03]"
                  >
                    Warranty Information
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-xl font-semibold">Technical Support</h3>
                <p className="mt-4 leading-8 text-white/65">
                  For product guidance, installation questions, or dealer support, contact the
                  INVINX team directly.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block rounded-full border border-white/15 px-5 py-3 font-medium text-white/90"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a45a]">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Connect with INVINX.</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  For product inquiries, sample requests, dealer opportunities, or general support,
                  send us a message and our team will get back to you.
                </p>

                <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 text-white/75">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">Service Area</p>
                  <p className="mt-3 text-lg">
                    Canada-wide availability for dealerships, installers, and retail consumers.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8">
                <form
                  action="https://formspree.io/f/xwvrkenr"
                  method="POST"
                  className="grid gap-5"
                >
       <div>
  <label className="mb-2 block text-sm text-white/65">Name</label>
  <input
    name="name"
    type="text"
    placeholder="Your name"
    required
    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#c8a45a]/40"
  />
</div>

<div>
  <label className="mb-2 block text-sm text-white/65">Email</label>
  <input
    name="email"
    type="email"
    placeholder="name@email.com"
    required
    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#c8a45a]/40"
  />
</div>

<div>
  <label className="mb-2 block text-sm text-white/65">Phone</label>
  <input
    name="phone"
    type="tel"
    placeholder="(000) 000-0000"
    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#c8a45a]/40"
  />
</div>

<div>
  <label className="mb-2 block text-sm text-white/65">Company (optional)</label>
  <input
    name="company"
    type="text"
    placeholder="Business name"
    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#c8a45a]/40"
  />
</div>           

                  <div>
                    <label className="mb-2 block text-sm text-white/65">Message</label>
                    <textarea
                      placeholder="Tell us what you're looking for."
                      className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#c8a45a]/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-fit rounded-full bg-[#c8a45a] px-6 py-3 font-medium text-black transition hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-[0.3em] text-[#c8a45a]">INVINX</div>
            <p className="mt-3 text-sm text-white/50">Premium automotive surface protection.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-sm text-white/40">© INVINX</div>
        </div>
      </footer>
    </div>
  );
}