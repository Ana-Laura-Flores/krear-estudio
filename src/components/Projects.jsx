import React from "react";

import portadaBotto from "../assets/image/portada-grupoboto.jpg";
import csainHome from "../assets/image/portada-csain.jpg";
import vistemeLinda from "../assets/image/visteme-linda.jpg";
import ventek from "../assets/image/Ventek-paleta.jpg";
import metalAir from "../assets/image/portada-metalair.jpg";
import phantroVision from "../assets/image/phantro-tarjeta.png";

const projects = [
    {
        number: "01",
        name: "Grupo Botto",
        alt: "Sitio web institucional de Grupo Botto, diseñado y desarrollado por KREAR",
        category: "Desarrollo web · Presentación comercial",
        challenge:
            "La empresa necesitaba construir su presencia digital desde cero y contar con un espacio para presentar sus servicios de manera clara y profesional.",
        work:
            "Diseñé y desarrollé el sitio web institucional, trabajando en la estructura de contenidos, la navegación y la presentación visual. También diseñé una presentación comercial en PDF.",
        solution:
            "Una propuesta de comunicación que integra los canales digital e institucional bajo un mismo lenguaje visual.",
        image: portadaBotto,
        href: "https://grupoboto.com.ar/",
        accent: "cyan",
        external: true,
    },
    {
        number: "02",
        name: "Método CSain®",
         alt: "Sitio web del Método CSain®, con información sobre clases y formación profesional",
        category: "Rediseño y desarrollo web",
        challenge:
            "El sitio existente necesitaba renovarse para acompañar la evolución del método y comunicar mejor sus distintas propuestas: clases regulares, formación profesional y entrenamiento integral.",
        work:
            "Rediseñé y desarrollé la web, reorganizando los contenidos, la jerarquía visual y la experiencia de navegación para presentar la información de manera más clara y actual.",
        solution:
            "Un espacio digital alineado con la identidad del Método CSain® y preparado para comunicar sus diferentes propuestas.",
        image: csainHome,
        href: "https://csain.com.ar/",
        accent: "cyan",
        external: true,
    },
    {
        number: "03",
        name: "Vísteme Linda",
           alt: "Identidad visual y tienda online de la marca Vísteme Linda",
        category: "Rediseño de identidad · E-commerce",
        challenge:
            "La marca necesitaba renovar su identidad visual y trasladar esa nueva imagen a su tienda online, logrando una comunicación coherente entre la marca y la experiencia de compra.",
        work:
            "Trabajé en el rediseño de la identidad visual y en el desarrollo de la tienda en Tiendanube, integrando los recursos gráficos con la organización y presentación de los productos.",
        solution:
            "Una identidad renovada y aplicada al entorno digital para dar mayor coherencia a la presentación de la marca.",
        image: vistemeLinda,
        accent: "magenta",
    },
    {
        number: "04",
        name: "Ventek",
         alt: "Paleta y sistema de identidad visual de la marca Ventek",
        category: "Identidad visual",
        challenge:
            "El proyecto necesitaba una identidad visual propia que permitiera reconocer la marca y establecer una base gráfica para su comunicación.",
        work:
            "Desarrollé la identidad visual desde cero, definiendo un lenguaje gráfico y sus aplicaciones para mantener consistencia en la presentación de la marca.",
        solution:
            "Un sistema visual propio que aporta unidad y reconocimiento a sus diferentes piezas de comunicación.",
        image: ventek,
        accent: "magenta",
    },
    {
        number: "05",
        name: "Metal Air",
          alt: "Sitio web y catálogo digital de productos industriales de Metal Air",
        category: "Desarrollo web · Catálogo B2B",
        challenge:
            "La empresa necesitaba su primera web institucional y una herramienta digital para presentar su oferta de productos técnicos a clientes comerciales.",
        work:
            "Diseñé y desarrollé el sitio web, organizando la información institucional y un catálogo de productos B2B con una estructura pensada para facilitar la consulta.",
        solution:
            "Una plataforma que combina la presentación de la empresa con un catálogo digital orientado a su comunicación comercial.",
        image: metalAir,
        href: "https://metalair.com.ar/",
        accent: "cyan",
        external: true,
    },
    {
        number: "06",
        name: "Phantro Vision",
         alt: "Aplicación de identidad visual y papelería de Phantro Vision",
        category: "Identidad visual · Papelería",
        challenge:
            "La marca necesitaba construir su identidad visual desde cero y definir una imagen consistente para sus materiales de comunicación.",
        work:
            "Desarrollé la identidad de marca y sus aplicaciones en papelería, trabajando en la relación entre los elementos gráficos y su implementación en diferentes soportes.",
        solution:
            "Una base visual propia para presentar la marca de forma reconocible y coherente.",
        image: phantroVision,
        accent: "magenta",
    },
];

function ProjectLink({ href, external, accent, children }) {
    const color =
        accent === "cyan" ? "bg-cyan-400" : "bg-fuchsia-500";

    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group/link inline-flex flex-col items-start gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
        >
            <span>{children}</span>

            <span className="h-px w-8 overflow-hidden bg-white/25 transition-all duration-300 group-hover/link:w-full">
                <span
                    className={`block h-full w-full origin-left scale-x-0 ${color} transition-transform duration-300 group-hover/link:scale-x-100`}
                />
            </span>
        </a>
    );
}

export default function Projects() {
    return (
        <section
            id="proyectos"
            className="relative overflow-hidden bg-[#050508] px-6 py-12 text-white md:px-12 md:py-16 lg:px-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* Encabezado */}
               <div className="mb-10 md:mb-14">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-fuchsia-500" />

                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                            Proyectos seleccionados
                        </span>

                        <span className="h-px max-w-24 flex-1 bg-white/15" />
                    </div>

                    <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
                        <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
                            Diseño que
                            <br />
                            <span className="text-white/35">
                                toma forma.
                            </span>
                        </h2>

                        <p className="max-w-xl text-sm leading-relaxed text-white/55 md:justify-self-end md:text-base">
                            Cada proyecto parte de una necesidad diferente.
                            Diseño y desarrollo se combinan para encontrar
                            soluciones visuales y digitales coherentes con
                            cada marca.
                        </p>
                    </div>
                </div>

                {/* Proyectos */}
                <div className="space-y-16 md:space-y-24">
                    {projects.map((project, index) => {
                        const isCyan = project.accent === "cyan";

                        const accentText = isCyan
                            ? "text-cyan-400"
                            : "text-fuchsia-500";

                        const accentLine = isCyan
                            ? "bg-cyan-400"
                            : "bg-fuchsia-500";

                        return (
                            <article
                                key={project.number}
                                className="group grid items-center gap-7 md:grid-cols-2 md:gap-12 lg:gap-20"
                            >
                                {/* Imagen */}
                                <div
                                    className={`relative ${
                                        index % 2 === 1
                                            ? "md:order-2"
                                            : "md:order-1"
                                    }`}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#0b0b10]">
                                        <img
                                            src={project.image}
                                           alt={project.alt}
                                            loading="lazy"
                                            className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.025] md:p-5"
                                        />

                                        <span
                                            className={`absolute bottom-0 left-0 h-[2px] w-12 ${accentLine} transition-all duration-500 group-hover:w-24`}
                                        />
                                    </div>
                                </div>

                                {/* Información */}
                                <div
                                    className={`flex flex-col items-start ${
                                        index % 2 === 1
                                            ? "md:order-1"
                                            : "md:order-2"
                                    }`}
                                >
                                    {/* Número y categoría */}
                                    <div className="mb-5 flex flex-wrap items-center gap-3">
                                        <span
                                            className={`text-xs font-mono ${accentText}`}
                                        >
                                            {project.number}
                                        </span>

                                        <span className="h-px w-8 bg-white/20" />

                                        <span className="text-[9px] font-mono uppercase leading-relaxed tracking-[0.16em] text-white/45 md:text-[10px]">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Nombre */}
                                    <h3 className="mb-7 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                        {project.name}
                                    </h3>

                                    {/* Descripción con jerarquía */}
                                    <div className="max-w-lg space-y-6">
                                        {/* El desafío */}
                                        <div>
                                            <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-white/40">
                                                El desafío
                                            </p>

                                            <p className="text-sm leading-7 text-white/65 md:text-base">
                                                {project.challenge}
                                            </p>
                                        </div>

                                        {/* Mi trabajo */}
                                        <div>
                                            <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-white/40">
                                                Mi trabajo
                                            </p>

                                            <p className="text-sm leading-7 text-white/65 md:text-base">
                                                {project.work}
                                            </p>
                                        </div>

                                        {/* La solución */}
                                        <div
                                            className={`border-l-2 ${
                                                isCyan
                                                    ? "border-cyan-400/60"
                                                    : "border-fuchsia-500/60"
                                            } pl-4`}
                                        >
                                            <p
                                                className={`mb-2 text-[10px] font-mono uppercase tracking-[0.18em] ${accentText}`}
                                            >
                                                La solución
                                            </p>

                                            <p className="text-sm leading-7 text-white/80 md:text-base">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Enlace al proyecto */}
                                    {project.href && (
                                        <div className="mt-8">
                                            <ProjectLink
                                                href={project.href}
                                                external={project.external}
                                                accent={project.accent}
                                            >
                                                {project.external
                                                    ? "Ver sitio"
                                                    : "Ver proyecto"}
                                            </ProjectLink>
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Portfolio completo */}
                <div className="mt-12 border-t border-white/15 pt-6 md:mt-16 md:flex md:items-center md:justify-between md:gap-8">
                    <div className="mb-6 md:mb-0">
                        <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                            Más trabajos
                        </p>

                        <p className="text-lg text-white/80">
                            Explorá el portfolio completo.
                        </p>
                    </div>

                    <a
                        href="https://krear-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col items-start gap-2 text-sm font-medium text-white transition-colors hover:text-white/80"
                    >
                        <span>Ver portfolio completo</span>

                        <span className="h-px w-10 overflow-hidden bg-white/25 transition-all duration-300 group-hover:w-full">
                            <span className="block h-full w-full origin-left scale-x-0 bg-fuchsia-500 transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}