import logoKrear from "../assets/image/krear-logo-invertido.png";
import heroKrear from "../assets/image/hero-krear.png";

export default function HeroKrear() {
    return (
        <section 
            className=" relative h-[100svh] min-h-[600px] overflow-hidden bg-[#050508] text-white"
            id="inicio"
            aria-labelledby="hero-title"
        >
            {/* Imagen de fondo */}
            <img
                src={heroKrear}
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Contenido principal */}
            <div className="relative z-10 flex h-full items-center px-6 pb-20 md:px-12 lg:px-20">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="max-w-3xl">

                        {/* Servicios principales */}
                        <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.35em] text-white/70 md:text-xs">
                            Diseño gráfico{" "}
                            <span className="text-fuchsia-500">·</span>{" "}
                            Branding{" "}
                            <span className="text-fuchsia-500">·</span>{" "}
                            Desarrollo web
                        </p>

                        {/* Identidad de marca */}
                        <img
                            src={logoKrear}
                            alt="KREAR, estudio de diseño gráfico y desarrollo frontend"
                            decoding="async"
                            className="mb-8 h-9 w-auto md:h-12"
                        />

                        {/* Título principal */}
                        <h1
                            id="hero-title"
                            className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl lg:text-8xl"
                        >
                            Diseño
                            <br />
                            <span className="text-fuchsia-500">
                                que conecta.
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/75 md:text-lg">
                            Diseño gráfico, identidad visual, branding y
                            desarrollo web para marcas, empresas y
                            emprendimientos que buscan comunicar mejor,
                            construir confianza y crecer.
                        </p>

                        {/* Acciones */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#proyectos"
                                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-fuchsia-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-500"
                            >
                                Ver proyectos
                            </a>

                            <a
                                href="https://wa.me/5491149468032"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contactar a KREAR por WhatsApp"
                                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-500"
                            >
                                Hablemos
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Información de la diseñadora */}
            <div className="absolute bottom-5 left-6 right-6 z-20 md:left-12 md:right-12 lg:left-20 lg:right-20">
                <div className="flex flex-col items-start justify-between gap-2 border-t border-white/20 pt-4 text-[9px] font-mono uppercase tracking-[0.2em] text-white/60 md:flex-row md:items-center md:gap-4">
                    <span>Ana Laura Flores</span>

                    <span>
                        Diseñadora Gráfica UBA{" "}
                        <span className="text-fuchsia-500">·</span>{" "}
                        Frontend
                    </span>

                    <span>
                        Buenos Aires
                    </span>
                </div>
            </div>
        </section>
    );
}
