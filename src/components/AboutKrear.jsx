
import React from "react";

const principles = [
    {
        number: "01",
        title: "Entender",
        text: "Conocer el contexto, las necesidades y los objetivos antes de definir una solución.",
        accent: "fuchsia",
    },
    {
        number: "02",
        title: "Conectar",
        text: "Integrar identidad, comunicación y experiencia en lugar de resolver cada parte por separado.",
        accent: "fuchsia",
    },
    {
        number: "03",
        title: "Resolver",
        text: "Transformar esa dirección en una propuesta visual y digital coherente con cada proyecto.",
        accent: "cyan",
    },
];

export default function AboutKrear() {
    return (
        <section
            id="estudio"
            className="relative overflow-hidden bg-[#08080d] px-6 py-16 text-white md:px-12 md:py-20 lg:px-20"
        >
            {/* Iluminación ambiental */}
            <div
                className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-fuchsia-500/[0.07] blur-[120px]"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-[120px]"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Encabezado editorial */}
                <div className="mb-10 flex items-center gap-3 md:mb-14">
                    <span className="h-2 w-2 rounded-full bg-fuchsia-500" />

                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50 md:text-xs">
                        El enfoque KREAR
                    </p>

                    <span className="h-px max-w-24 flex-1 bg-white/15" />
                </div>

                {/* Idea principal */}
                <div className="grid items-start gap-7 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-4xl font-black uppercase leading-[0.94] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                            Una misma
                            <br />
                            <span className="text-white/35">
                                mirada.
                            </span>
                        </h2>

                        <div className="mt-7 h-[2px] w-14 bg-fuchsia-500" />

                        <p className="mt-5 max-w-lg text-xl font-semibold leading-snug tracking-tight text-white/90 md:text-2xl">
                            Diseño y tecnología, con una dirección en común.
                        </p>
                    </div>

                    <div className="max-w-xl md:pt-2">
                        <p className="text-sm leading-7 text-white/60 md:text-base md:leading-8">
                            Cada proyecto necesita algo distinto. Antes de
                            diseñar o desarrollar, busco entender qué necesita
                            comunicar una marca, qué quiere resolver y cómo
                            puede hacerlo de forma coherente.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-white/60 md:text-base md:leading-8">
                            Integro estrategia, diseño visual y desarrollo
                            frontend para que las decisiones no queden
                            aisladas, sino que respondan a un mismo propósito.
                        </p>
                    </div>
                </div>

                {/* Principios del enfoque */}
                <div className="mt-12 grid gap-7 border-t border-white/15 pt-7 md:mt-16 md:grid-cols-3 md:gap-0 md:pt-8">
                    {principles.map((principle, index) => {
                        const isCyan = principle.accent === "cyan";

                        return (
                            <article
                                key={principle.number}
                                className={`${
                                    index > 0
                                        ? "md:border-l md:border-white/10 md:pl-7 lg:pl-10"
                                        : ""
                                } ${
                                    index < 2
                                        ? "md:pr-7 lg:pr-10"
                                        : ""
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`font-mono text-xs ${
                                            isCyan
                                                ? "text-cyan-400"
                                                : "text-fuchsia-500"
                                        }`}
                                    >
                                        {principle.number}
                                    </span>

                                    <span className="h-px w-7 bg-white/20" />
                                </div>

                                <h3 className="mt-5 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
                                    {principle.title}
                                </h3>

                                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
                                    {principle.text}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
