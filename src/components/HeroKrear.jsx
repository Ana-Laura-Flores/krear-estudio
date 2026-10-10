import React from "react";
import logoKrear from "../assets/image/krear-logo-invertido.png";
import heroKrear from "../assets/image/hero-krear.png";

export default function HeroKrear() {
    return (
        <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-[#050508] text-white">

            {/* Imagen de fondo */}
            <img
                src={heroKrear}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Contenido */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20 pb-20">

                <div className="max-w-7xl mx-auto w-full">

                    <div className="max-w-3xl">

                        {/* Categorías */}
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-white/55 mb-6">
                            Diseño gráfico <span className="text-fuchsia-500">·</span>{" "}
                            Identidad <span className="text-fuchsia-500">·</span>{" "}
                            Desarrollo web
                        </p>

                        {/* Logo */}
                        <img
                            src={logoKrear}
                            alt="KREAR — Diseño que conecta"
                            className="h-9 md:h-12 w-auto mb-8"
                        />

                        {/* Título */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.055em] leading-[0.86] uppercase">
                            Diseño
                            <br />
                            <span className="text-fuchsia-500">
                                que conecta.
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="mt-7 max-w-xl text-base md:text-lg text-white/65 font-light leading-relaxed">
                            Diseño gráfico, identidad y desarrollo web para marcas
                            que necesitan comunicar mejor, construir confianza y crecer.
                        </p>

                        {/* Botones */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">

                            <a
                                href="#proyectos"
                                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
                            >
                                Ver proyectos
                            </a>

                            <a
                                href="#contactowa.me/5491149468032"
                                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/30 text-white text-[11px] font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300"
                            >
                                Hablemos
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            {/* Información inferior */}
            <div className="absolute z-20 bottom-5 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20">

                <div className="pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 text-[9px] font-mono uppercase tracking-[0.2em] text-white/45">

                    <span>
                        Ana Laura Flores
                    </span>

                    <span>
                        Diseñadora Gráfica UBA <span className="text-fuchsia-500">·</span> Frontend
                    </span>

                    <span>
                        Buenos Aires <span className="text-fuchsia-500">·</span> 2026
                    </span>

                </div>

            </div>

        </section>
    );
}