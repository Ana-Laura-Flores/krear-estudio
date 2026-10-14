const services = [
    {
        number: "01",
        title: "Identidad visual",
        text: "Diseño de identidad visual y branding para construir marcas reconocibles, coherentes y con personalidad.",
        accent: "fuchsia",
    },
    {
        number: "02",
        title: "Diseño gráfico",
        text: "Diseño de piezas gráficas y comunicación visual para presentar productos, servicios e ideas con claridad.",
        accent: "fuchsia",
    },
    {
        number: "03",
        title: "Desarrollo web",
        text: "Diseño y desarrollo de sitios web, landing pages y catálogos digitales adaptados a las necesidades de cada negocio.",
        accent: "cyan",
    },
    {
        number: "04",
        title: "Proyectos integrales",
        text: "Soluciones que combinan identidad visual, diseño gráfico y desarrollo web para mantener una comunicación coherente.",
        accent: "cyan",
    },
];


const steps = [
    {
        number: "01",
        title: "Miramos",
        text: "Entendemos el contexto, las necesidades y los objetivos de cada proyecto.",
        accent: "fuchsia",
    },
    {
        number: "02",
        title: "Damos forma",
        text: "Definimos una dirección visual y funcional acorde a lo que cada proyecto necesita.",
        accent: "fuchsia",
    },
    {
        number: "03",
        title: "Lo hacemos real",
        text: "Diseñamos, desarrollamos e implementamos una solución coherente con esa dirección.",
        accent: "cyan",
    },
];

function SectionLabel({
    children,
    accent = "fuchsia",
    as: Tag = "p",
}) {
    const dotColor =
        accent === "cyan" ? "bg-cyan-400" : "bg-fuchsia-500";

    const lineColor =
        accent === "cyan" ? "bg-cyan-400/60" : "bg-fuchsia-500/60";

    return (
        <div className="flex items-start gap-4">
            <span
                aria-hidden="true"
                className={`mt-2 h-2 w-2 shrink-0 rounded-full ${dotColor}`}
            />

            <div>
                <Tag className="font-mono text-xs uppercase tracking-[0.28em] text-white/55 md:text-sm">
                    {children}
                </Tag>

                <div
                    aria-hidden="true"
                    className={`mt-3 h-px w-10 ${lineColor}`}
                />
            </div>
        </div>
    );
}
export default function Services() {
    return (
        <section
    id="servicios"
    className="relative overflow-hidden bg-[#050508] px-6 py-12 text-white md:px-12 md:py-16 lg:px-20"
>
            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Servicios */}
                <div className="grid items-start gap-7 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
                   <SectionLabel as="h2">Qué hacemos</SectionLabel>

                    <div className="max-w-2xl">
                       
<p className="text-base leading-relaxed text-white/60 md:text-lg">
    Diseño gráfico, identidad visual y desarrollo web.
    <span className="text-white/85">
        {" "}Unimos estrategia, diseño y tecnología para
        construir marcas y experiencias digitales coherentes.
    </span>
</p>

                    </div>
                </div>

               {/* Grilla de servicios */}
<div className="mt-8 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((service) => {
        const isFuchsia = service.accent === "fuchsia";

        return (
            <article
                key={service.number}
               className={`group relative flex aspect-square flex-col justify-between overflow-hidden bg-[#08080d] p-3 transition-colors duration-300 hover:bg-[#0c0c13] min-[400px]:p-4 sm:p-5 lg:p-4 xl:p-6 ${
    isFuchsia
        ? "hover:shadow-[inset_0_2px_0_rgba(217,70,239,0.8)]"
        : "hover:shadow-[inset_0_2px_0_rgba(34,211,238,0.8)]"
}`}
            >
                <div className="flex items-start justify-between">
                    <span
                        className={`text-2xl font-black leading-none tracking-[-0.04em] md:text-3xl ${
                            isFuchsia
                                ? "text-fuchsia-500"
                                : "text-cyan-400"
                        }`}
                    >
                        {service.number}
                    </span>

                    <span
                        className={`h-px w-7 transition-all duration-300 group-hover:w-12 ${
                            isFuchsia ? "bg-fuchsia-500" : "bg-cyan-400"
                        }`}
                    />
                </div>

                <div>
                    <h3 className="text-base font-black uppercase leading-tight tracking-[-0.035em] min-[400px]:text-lg sm:text-xl xl:text-2xl">
    {service.title}
</h3>

                  <p className="mt-2 text-[11px] leading-relaxed text-white/45 min-[400px]:text-xs sm:text-sm">
    {service.text}
</p>
                </div>
            </article>
        );
    })}
</div>

                {/* Transición al proceso */}
              <div
    id="proceso"
    className="mt-10 border-t border-white/10 pt-6 md:mt-12 md:pt-8"
>
                    <div className="grid items-start gap-6 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
                       <SectionLabel accent="cyan" as="h2">
    Cómo trabajamos
</SectionLabel>

                        <div className="max-w-2xl">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                                De la idea a una solución concreta.
                            </h2>

                            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
                                Cada etapa tiene un propósito. El proceso se
                                adapta a las necesidades de cada proyecto, sin
                                perder de vista el objetivo.
                            </p>
                        </div>
                    </div>

                    {/* Etapas */}
                    <div className="mt-8 grid gap-7 border-t border-white/10 pt-7 md:grid-cols-3 md:gap-8 md:pt-8">
                        {steps.map((step, index) => {
                            const isCyan = step.accent === "cyan";

                            return (
                                <article
                                    key={step.number}
                                    className={`relative ${
                                        index > 0
                                            ? "md:border-l md:border-white/10 md:pl-7"
                                            : ""
                                    }`}
                                >
                                    <span
                                        className={`font-black text-3xl leading-none tracking-[-0.05em] md:text-4xl ${
                                            isCyan
                                                ? "text-cyan-400"
                                                : "text-fuchsia-500"
                                        }`}
                                    >
                                        {step.number}
                                    </span>

                                    <h3 className="mt-5 text-lg font-black uppercase tracking-[-0.025em] md:text-xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
                                        {step.text}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
