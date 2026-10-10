import React from "react";

const services = [
    {
        number: "01",
        title: "Identidad visual",
        text: "Sistemas visuales que construyen personalidad, coherencia y reconocimiento para una marca.",
        accent: "fuchsia",
    },
    {
        number: "02",
        title: "Diseño gráfico",
        text: "Piezas y recursos visuales pensados para comunicar productos, servicios e ideas con claridad.",
        accent: "fuchsia",
    },
    {
        number: "03",
        title: "Desarrollo web",
        text: "Sitios donde diseño, contenido y tecnología trabajan juntos para darle presencia a tu negocio.",
        accent: "cyan",
    },
    {
        number: "04",
        title: "Proyectos integrales",
        text: "Cuando el proyecto necesita conectar identidad, diseño y desarrollo en una misma dirección.",
        accent: "cyan",
    },
];

export default function Services() {
    return (
        <section
            id="servicios"
            className="bg-[#050508] text-white px-6 md:px-12 lg:px-20 py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto">

                {/* Encabezado */}
                <div className="grid md:grid-cols-[0.65fr_1.35fr] gap-8 md:gap-16 items-start mb-10 md:mb-12">

                    {/* Etiqueta */}
                    <div className="flex items-start gap-4">

                        <span className="w-2 h-2 mt-2 rounded-full bg-fuchsia-500 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />

                        <div>
                            <p className="text-base md:text-xl font-mono uppercase tracking-[0.3em] text-white/60">
                                Qué hacemos
                            </p>

                            <div className="mt-3 w-12 h-px bg-fuchsia-500/60" />
                        </div>

                    </div>

                    {/* Descripción */}
                    <div className="max-w-2xl">
                        <p className="text-base md:text-lg text-white/55 leading-relaxed">
                            Identidad, diseño gráfico y desarrollo web.
                            <p><span className="text-white/80">
                                {" "}Cada proyecto necesita una forma distinta de abordarlo.
                            </span>
                            </p>
                        </p>
                    </div>

                </div>

                {/* Servicios 2 × 2 */}
                <div className="grid md:grid-cols-2 gap-px bg-white/10">

                    {services.map((service) => {

                        const isFuchsia = service.accent === "fuchsia";

                        return (
                            <article
                                key={service.number}
                                className="
                                    group
                                    relative
                                    min-h-[260px]
                                    md:min-h-[290px]
                                    bg-[#08080d]
                                    p-7
                                    md:p-9
                                    lg:p-10
                                    overflow-hidden
                                    transition-all
                                    duration-500
                                    hover:bg-[#0c0c13]
                                "
                            >

                                {/* Línea de color */}
                                <div
                                    className={`
                                        absolute
                                        top-0
                                        left-0
                                        h-[2px]
                                        w-0
                                        group-hover:w-full
                                        transition-all
                                        duration-500
                                        ${
                                            isFuchsia
                                                ? "bg-fuchsia-500 shadow-[0_0_18px_rgba(217,70,239,0.7)]"
                                                : "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
                                        }
                                    `}
                                />

                                {/* Número + flecha */}
                                <div className="flex items-start justify-between">

                                    <span
                                        className={`
                                            text-2xl
                                            md:text-3xl
                                            font-black
                                            leading-none
                                            tracking-[-0.04em]
                                            ${
                                                isFuchsia
                                                    ? "text-fuchsia-500"
                                                    : "text-cyan-400"
                                            }
                                        `}
                                    >
                                        {service.number}
                                    </span>

                                    <span
                                        className="
                                            text-xl
                                            text-white/20
                                            group-hover:text-white/70
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        ↗
                                    </span>

                                </div>

                                {/* Contenido */}
                                <div className="mt-14 md:mt-16">

                                    <h3 className="
                                        text-2xl
                                        md:text-3xl
                                        lg:text-4xl
                                        font-black
                                        uppercase
                                        tracking-[-0.035em]
                                        leading-none
                                    ">
                                        {service.title}
                                    </h3>

                                    <p className="mt-5 max-w-md text-sm text-white/40 leading-relaxed">
                                        {service.text}
                                    </p>

                                </div>

                                {/* Detalle decorativo */}
                                <div
                                    className={`
                                        absolute
                                        -bottom-12
                                        -right-12
                                        w-32
                                        h-32
                                        rounded-full
                                        blur-3xl
                                        opacity-0
                                        group-hover:opacity-20
                                        transition-opacity
                                        duration-700
                                        ${
                                            isFuchsia
                                                ? "bg-fuchsia-500"
                                                : "bg-cyan-400"
                                        }
                                    `}
                                />

                            </article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

