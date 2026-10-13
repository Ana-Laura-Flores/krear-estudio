
import React from "react";

export default function ContactCTA() {
    return (
        <section
            id="contacto"
            className="relative overflow-hidden bg-[#050508] px-6 py-14 text-white md:px-12 md:py-20 lg:px-20"
        >
            {/* Iluminación de fondo */}
            <div
                className="
                    pointer-events-none absolute
                    top-0 right-0
                    h-[350px] w-[450px]
                    rounded-full bg-fuchsia-500/10
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    bottom-0 left-0
                    h-[300px] w-[400px]
                    rounded-full bg-cyan-400/10
                    blur-[130px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Encabezado */}
                <div className="mb-8 flex items-start gap-4 md:mb-10">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                    <div>
                        <p className="font-mono text-base uppercase tracking-[0.3em] text-white/60 md:text-xl">
                            Contacto
                        </p>

                        <div className="mt-3 h-px w-12 bg-cyan-400/60" />
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="grid items-end gap-8 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
                    <div>
                        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                            ¿Tenés un proyecto en mente?
                        </p>

                        <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                            Hagamos algo
                            <br />
                            <span className="text-fuchsia-500">
                                que conecte.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50 md:mt-7 md:text-base">
                            Contame qué necesitás para tu marca o tu negocio.
                            Podemos trabajar una idea puntual o desarrollar una
                            solución que integre diseño y tecnología.
                        </p>
                    </div>

                    {/* Acción */}
                    <div className="w-full md:max-w-xs md:justify-self-end">
                        <div className="border-t border-white/15 pt-5">
                            <p className="mb-5 text-sm leading-relaxed text-white/40">
                                Cada proyecto empieza con una conversación.
                                El próximo puede ser el tuyo.
                            </p>

                            <a
                                href="https://wa.me/5491149468032"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex w-full items-center justify-center
                                    rounded-full bg-white px-6 py-4
                                    text-xs font-bold uppercase tracking-widest
                                    text-black transition-colors duration-300
                                    hover:bg-fuchsia-500 hover:text-white
                                "
                            >
                                Hablemos de tu proyecto
                            </a>
                        </div>
                    </div>
                </div>

                {/* Cierre */}
                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-5 md:mt-[4.5rem] md:flex-row md:items-center md:gap-6">
                    <div>
                        <p className="text-lg font-black tracking-[0.12em]">
                            KREAR<span className="text-fuchsia-500">.</span>
                        </p>

                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                            Diseño que conecta
                        </p>
                    </div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                        Diseño gráfico · Identidad · Desarrollo web
                    </p>

                    <a
                        href="#inicio"
                        className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-cyan-400"
                    >
                        Volver arriba ↑
                    </a>
                </div>
            </div>
        </section>
    );
}
