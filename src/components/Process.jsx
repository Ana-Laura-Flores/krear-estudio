import React from "react";

const steps = [
    {
        number: "01",
        title: "Miramos",
        text: "Entendemos tu negocio, tu audiencia y la oportunidad que querés abrir.",
        accent: "fuchsia",
    },
    {
        number: "02",
        title: "Damos forma",
        text: "Convertimos la estrategia en decisiones visuales con sentido y personalidad.",
        accent: "mix",
    },
    {
        number: "03",
        title: "Lo hacemos real",
        text: "Diseñamos y desarrollamos soluciones para comunicar con coherencia en cada pantalla.",
        accent: "cyan",
    },
];

export default function Process() {
    return (
        <section
            id="proceso"
            className="relative overflow-hidden bg-[#08080d] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32"
        >

            {/* Iluminación de fondo */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-1/2
                    -translate-x-1/2
                    w-[600px]
                    h-[300px]
                    rounded-full
                    bg-cyan-400/10
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-32
                    w-[500px]
                    h-[350px]
                    rounded-full
                    bg-fuchsia-500/10
                    blur-[120px]
                "
            />

            {/* Contenido */}
            <div className="relative z-10 max-w-7xl mx-auto">
                  {/* Encabezado */}
                <div className="grid md:grid-cols-[0.65fr_1.35fr] gap-8 md:gap-16 items-start mb-10 md:mb-12">
{/* Etiqueta */}
                    <div className="flex items-start gap-4">

                        <span className="w-2 h-2 mt-2 rounded-full bg-fuchsia-500 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />

                        <div>
                            <p className="text-base md:text-xl font-mono uppercase tracking-[0.3em] text-white/60">
                                Cómo trabajamos
                            </p>

                            <div className="mt-3 w-12 h-px bg-fuchsia-500/60" />
                        </div>

                    </div>

                    {/* Descripción */}
                    <div className="max-w-2xl">
                        <p className="text-base md:text-lg text-white/55 leading-relaxed">
                            Del primer planteo a una solución que funciona.
                           
                        </p>
                    </div>
                    </div>

                {/* Pasos */}
                <div className="grid md:grid-cols-3">

                    {steps.map((step, index) => {

                        const isFuchsia = step.accent === "fuchsia";
                        const isCyan = step.accent === "cyan";

                        return (
                            <article
                                key={step.number}
                                className={`
                                    relative
                                    py-8
                                    md:py-0
                                    md:px-8
                                    lg:px-10
                                    ${
                                        index !== 0
                                            ? "border-t md:border-t-0 md:border-l border-white/10"
                                            : ""
                                    }
                                `}
                            >

                                {/* Número */}
                                <div
    className={`
        text-4xl
        md:text-5xl
        font-black
        tracking-[-0.05em]
        leading-none
        mb-8
        ${
            isFuchsia
                ? "text-fuchsia-500"
                : isCyan
                ? "text-cyan-400"
                : "bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-cyan-600 bg-clip-text text-transparent"
        }
    `}
>
  
                                    {step.number}
                                </div>

                                {/* Línea */}
                                <div
                                    className={`
                                        w-12
                                        h-px
                                        mb-6
                                        ${
                                            isFuchsia
                                                ? "bg-fuchsia-500"
                                                : isCyan
                                                ? "bg-cyan-400"
                                                : "bg-white/40"
                                        }
                                    `}
                                />

                                {/* Título */}
                                <h3 className="
                                    text-2xl
                                    md:text-3xl
                                    font-black
                                    uppercase
                                    tracking-[-0.035em]
                                    leading-none
                                ">
                                    {step.title}
                                </h3>

                                {/* Texto */}
                                <p className="
                                    mt-5
                                    max-w-sm
                                    text-sm
                                    md:text-[15px]
                                    text-white/40
                                    leading-relaxed
                                ">
                                    {step.text}
                                </p>

                            </article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}