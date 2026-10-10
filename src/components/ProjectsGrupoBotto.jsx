import React from "react";

import portadaBotto from "../assets/image/portada-grupoboto.jpg";
import mobileBotto from "../assets/image/grupoBoto-mobile.jpeg";
import nosotrosBotto from "../assets/image/grupoBotto-sobreNosotros.jpg";
import presentacionBotto from "../assets/image/grupoBoto-presentacion.png";
import presentacionBotto02 from "../assets/image/grupoBoto-presentacion02.png";

export default function ProjectsGrupoBotto() {
    return (
        <section
            id="proyectos"
            className="bg-[#050508] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto">

                {/* Encabezado */}
                <div className="grid md:grid-cols-[0.65fr_1.35fr] gap-8 md:gap-16 items-start mb-14 md:mb-20">

                    <div className="flex items-start gap-4">
                        <span className="w-2 h-2 mt-2 rounded-full bg-fuchsia-500 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />

                        <div>
                            <p className="text-xl font-mono uppercase tracking-[0.3em] text-white/60">
                                Proyectos
                            </p>

                            <div className="mt-3 w-12 h-px bg-fuchsia-500/60" />
                        </div>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-base md:text-lg text-white/55 leading-relaxed">
                            Diseño, desarrollo y soluciones pensadas
                            para cada negocio.
                        </p>
                    </div>

                </div>


                {/* =========================
                    PROYECTO 01 — GRUPO BOTTO
                ========================== */}

                <article>

                    {/* Cabecera */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">

                        <div>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-sm font-mono text-fuchsia-500">
                                    01
                                </span>

                                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35">
                                    Desarrollo web · Presentación comercial
                                </span>
                            </div>

                            <h2 className="
                                text-4xl
                                md:text-6xl
                                font-black
                                uppercase
                                tracking-[-0.05em]
                                leading-none
                            ">
                                Grupo Botto
                            </h2>

                        </div>

                    </div>


                    {/* Imagen principal */}
                    <div className="relative overflow-hidden bg-[#0b0b10]">
                        <img
                            src={portadaBotto}
                            alt="Sitio web de Grupo Botto"
                            className="
                                w-full
                                h-auto
                                block
                                transition-transform
                                duration-700
                                hover:scale-[1.015]
                            "
                        />
                    </div>


                    {/* Información */}
                    <div className="
                        grid
                        md:grid-cols-[0.7fr_1.3fr]
                        gap-8
                        md:gap-16
                        mt-10
                        md:mt-14
                        mb-14
                        md:mb-20
                    ">

                        {/* Descripción */}
                        <div>

                            <p className="
                                text-[10px]
                                font-mono
                                uppercase
                                tracking-[0.25em]
                                text-white/35
                                mb-3
                            ">
                                Desarrollo web
                            </p>

                            <p className="
                                text-sm
                                md:text-base
                                text-white/65
                                leading-relaxed
                                max-w-md
                            ">
                                Una nueva presencia digital para comunicar
                                con claridad los servicios y la propuesta
                                de Grupo Botto.
                            </p>

                        </div>


                        {/* Desafío + solución */}
                        <div className="grid sm:grid-cols-2 gap-8">

                            <div>

                                <p className="
                                    text-[10px]
                                    font-mono
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/35
                                    mb-3
                                ">
                                    El desafío
                                </p>

                                <p className="
                                    text-sm
                                    text-white/45
                                    leading-relaxed
                                ">
                                    Organizar la información y construir una
                                    presencia digital clara, profesional y
                                    alineada con la empresa.
                                </p>

                            </div>


                            <div>

                                <p className="
                                    text-[10px]
                                    font-mono
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/35
                                    mb-3
                                ">
                                    Lo que hicimos
                                </p>

                                <p className="
                                    text-sm
                                    text-white/45
                                    leading-relaxed
                                ">
                                    Desarrollo de la web institucional y diseño
                                    de una presentación comercial en PDF.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Otras vistas del sitio */}
                    <div className="
                        grid
                        md:grid-cols-[1.35fr_0.65fr]
                        gap-5
                        md:gap-6
                        items-start
                    ">

                        {/* Nosotros */}
                        <div>

                            <div className="overflow-hidden bg-[#0b0b10]">
                                <img
                                    src={nosotrosBotto}
                                    alt="Sección Nosotros del sitio web de Grupo Botto"
                                    className="w-full h-auto block"
                                />
                            </div>

                            <p className="
                                mt-3
                                text-[9px]
                                font-mono
                                uppercase
                                tracking-[0.2em]
                                text-white/30
                            ">
                                Sitio web · Sección Nosotros
                            </p>

                        </div>


                        {/* Mobile */}
                        <div>

                            <div className="overflow-hidden bg-[#0b0b10]">
                                <img
                                    src={mobileBotto}
                                    alt="Versión mobile del sitio web de Grupo Botto"
                                    className="w-full h-auto block"
                                />
                            </div>

                            <p className="
                                mt-3
                                text-[9px]
                                font-mono
                                uppercase
                                tracking-[0.2em]
                                text-white/30
                            ">
                                Sitio web · Versión mobile
                            </p>

                        </div>

                    </div>


                    {/* Presentación comercial */}
                    <div className="mt-20 md:mt-28">

                        <div className="mb-8">

                            <p className="
                                text-[10px]
                                font-mono
                                uppercase
                                tracking-[0.25em]
                                text-cyan-400
                                mb-3
                            ">
                                Diseño gráfico
                            </p>

                            <h3 className="
                                text-2xl
                                md:text-3xl
                                font-black
                                uppercase
                                tracking-[-0.035em]
                            ">
                                Presentación comercial
                            </h3>

                        </div>


                        <div className="grid md:grid-cols-2 gap-5">

                            <div className="overflow-hidden bg-[#0b0b10]">
                                <img
                                    src={presentacionBotto}
                                    alt="Primera página de la presentación comercial de Grupo Botto"
                                    className="w-full h-auto block"
                                />
                            </div>

                            <div className="overflow-hidden bg-[#0b0b10]">
                                <img
                                    src={presentacionBotto02}
                                    alt="Segunda página de la presentación comercial de Grupo Botto"
                                    className="w-full h-auto block"
                                />
                            </div>

                        </div>

                    </div>

                </article>

            </div>
        </section>
    );
}