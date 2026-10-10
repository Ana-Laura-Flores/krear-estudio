import React from "react";

import portadaBotto from "../assets/image/portada-grupoboto.jpg";
import csainHome from "../assets/image/portada-csain.jpg";
import vistemeLinda from "../assets/image/visteme-linda.jpg";

// Reemplazar por los nombres reales de tus imágenes
import ventek from "../assets/image/Ventek-paleta.jpg";
import metalAir from "../assets/image/portada-metalair.jpg";
import phantroVision from "../assets/image/phantro-tarjeta.png";

const projects = [
    {
        number: "01",
        name: "Grupo Botto",
        category: "Desarrollo web · Presentación comercial",
        description:
            "Nueva presencia digital para comunicar con claridad los servicios y la propuesta de la empresa.",
        image: portadaBotto,
        href: "/proyectos/grupo-botto",
        accent: "fuchsia",
        featured: true,
    },
    {
        number: "02",
        name: "Método CSain®",
        category: "Desarrollo web",
        description:
            "Actualización y reconstrucción de una presencia digital existente para acompañar la evolución del método.",
        image: csainHome,
        href: "/proyectos/metodo-csain",
        accent: "cyan",
    },
    {
        number: "03",
        name: "Vísteme Linda",
        category: "Rediseño de marca · E-commerce",
        description:
            "Rediseño de identidad y desarrollo inicial de la tienda online.",
        image: vistemeLinda,
        href: "/proyectos/visteme-linda",
        accent: "fuchsia",
    },
    {
        number: "04",
        name: "Ventek",
        category: "Identidad visual",
        description:
            "Desarrollo de identidad visual y aplicaciones para la marca.",
        image: ventek,
        href: "/proyectos/ventek",
        accent: "cyan",
    },
    {
        number: "05",
        name: "Metal Air",
        category: "Desarrollo web · Catálogo B2B",
        description:
            "Sitio institucional y catálogo de productos para comunicación comercial.",
        image: metalAir,
        href: "/proyectos/metal-air",
        accent: "fuchsia",
    },
    {
        number: "06",
        name: "Phantro Vision",
        category: "Identidad visual · Papelería",
        description:
            "Identidad visual y desarrollo de piezas gráficas para la marca.",
        image: phantroVision,
        href: "/proyectos/phantro-vision",
        accent: "cyan",
    },
];

export default function Projects() {
    return (
        <section
            id="proyectos"
            className="bg-[#050508] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto">

                {/* Encabezado */}
                <div className="
                    grid
                    md:grid-cols-[0.65fr_1.35fr]
                    gap-8
                    md:gap-16
                    items-start
                    mb-14
                    md:mb-20
                ">
                    <div className="flex items-start gap-4">
                        <span className="
                            w-2
                            h-2
                            mt-2
                            rounded-full
                            bg-fuchsia-500
                            shadow-[0_0_12px_rgba(217,70,239,0.8)]
                        " />

                        <div>
                            <p className="
                                text-xl
                                font-mono
                                uppercase
                                tracking-[0.3em]
                                text-white/60
                            ">
                                Proyectos
                            </p>

                            <div className="
                                mt-3
                                w-12
                                h-px
                                bg-fuchsia-500/60
                            " />
                        </div>
                    </div>

                    <div className="max-w-2xl">
                        <p className="
                            text-base
                            md:text-lg
                            text-white/55
                            leading-relaxed
                        ">
                            Una selección de proyectos donde diseño,
                            estrategia y desarrollo trabajan en conjunto.
                        </p>
                    </div>
                </div>


                {/* Proyecto destacado — Grupo Botto */}
                <article className="mb-20 md:mb-28">

                    <div className="flex items-end justify-between gap-6 mb-6">
                        <div>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="
                                    text-sm
                                    font-mono
                                    text-fuchsia-500
                                ">
                                    {projects[0].number}
                                </span>

                                <span className="
                                    text-[10px]
                                    font-mono
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/35
                                ">
                                    {projects[0].category}
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
                                {projects[0].name}
                            </h2>

                        </div>
                    </div>

                    <div className="
                        overflow-hidden
                        bg-[#0b0b10]
                    ">
                        <img
                            src={projects[0].image}
                            alt={`Proyecto ${projects[0].name}`}
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

                    <div className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        md:justify-between
                        gap-5
                        mt-6
                    ">
                        <p className="
                            max-w-xl
                            text-sm
                            md:text-base
                            text-white/45
                            leading-relaxed
                        ">
                            {projects[0].description}
                        </p>

                        <a
                            href={projects[0].href}
                            className="
                                inline-flex
                                items-center
                                gap-3
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-white
                                hover:text-fuchsia-500
                                transition-colors
                                shrink-0
                            "
                        >
                            Ver proyecto
                            <span className="text-lg">↗</span>
                        </a>
                    </div>

                </article>


                {/* Proyectos secundarios — CSain + Vísteme Linda */}
                <div className="
                    grid
                    md:grid-cols-2
                    gap-6
                    md:gap-8
                    mb-20
                    md:mb-24
                ">

                    {projects.slice(1, 3).map((project) => {

                        const isCyan = project.accent === "cyan";

                        return (
                            <article
                                key={project.number}
                                className="group"
                            >

                                <div className="
    relative
    overflow-hidden
    bg-[#101016]
    aspect-[4/3]
    flex
    items-center
    justify-center
    p-3
    md:p-4
">
                                    <img
                                        src={project.image}
                                        alt={`Proyecto ${project.name}`}
                                       className="
    w-full
    h-full
    object-contain
    transition-transform
    duration-500

                                            group-hover:scale-[1.02]
                                        "
                                    />
                                </div>

                                <div className="pt-5">

                                    <div className="flex items-center gap-3 mb-3">
                                        <span className={`
                                            text-xs
                                            font-mono
                                            ${isCyan
                                                ? "text-cyan-400"
                                                : "text-fuchsia-500"
                                            }
                                        `}>
                                            {project.number}
                                        </span>

                                        <span className="
                                            text-[9px]
                                            font-mono
                                            uppercase
                                            tracking-[0.22em]
                                            text-white/30
                                        ">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-5
                                    ">
                                        <div>

                                            <h3 className="
                                                text-2xl
                                                md:text-3xl
                                                font-black
                                                uppercase
                                                tracking-[-0.04em]
                                            ">
                                                {project.name}
                                            </h3>

                                            <p className="
                                                mt-3
                                                text-sm
                                                text-white/40
                                                leading-relaxed
                                                max-w-md
                                            ">
                                                {project.description}
                                            </p>

                                        </div>

                                        <a
                                            href={project.href}
                                            className="
                                                shrink-0
                                                w-10
                                                h-10
                                                rounded-full
                                                border
                                                border-white/15
                                                flex
                                                items-center
                                                justify-center
                                                text-white/50
                                                group-hover:border-white/40
                                                group-hover:text-white
                                                transition-all
                                            "
                                            aria-label={`Ver proyecto ${project.name}`}
                                        >
                                            ↗
                                        </a>

                                    </div>
                                </div>

                            </article>
                        );
                    })}

                </div>


                {/* Últimos 3 — proyectos más chicos */}
                <div className="
                    grid
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-5
                    md:gap-6
                ">

                    {projects.slice(3).map((project) => {

                        const isCyan = project.accent === "cyan";

                        return (
                            <article
                                key={project.number}
                                className="group"
                            >

                               <div className="
    relative
    overflow-hidden
    bg-[#101016]
    aspect-[4/3]
    flex
    items-center
    justify-center
    p-3
    md:p-4
">
                                    <img
                                        src={project.image}
                                        alt={`Proyecto ${project.name}`}
                                        className="
    w-full
    h-full
    object-contain
    transition-transform
    duration-500
    group-hover:scale-[1.02]
"
                                    />
                                </div>

                                <div className="pt-4">

                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`
                                            text-[11px]
                                            font-mono
                                            ${isCyan
                                                ? "text-cyan-400"
                                                : "text-fuchsia-500"
                                            }
                                        `}>
                                            {project.number}
                                        </span>

                                        <span className="
                                            text-[8px]
                                            font-mono
                                            uppercase
                                            tracking-[0.18em]
                                            text-white/30
                                            truncate
                                        ">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                    ">

                                        <h3 className="
                                            text-xl
                                            md:text-2xl
                                            font-black
                                            uppercase
                                            tracking-[-0.04em]
                                            leading-none
                                        ">
                                            {project.name}
                                        </h3>

                                        <a
                                            href={project.href}
                                            className="
                                                shrink-0
                                                w-8
                                                h-8
                                                rounded-full
                                                border
                                                border-white/15
                                                flex
                                                items-center
                                                justify-center
                                                text-white/40
                                                group-hover:border-white/40
                                                group-hover:text-white
                                                transition-all
                                            "
                                            aria-label={`Ver proyecto ${project.name}`}
                                        >
                                            ↗
                                        </a>

                                    </div>

                                </div>

                            </article>
                        );
                    })}

                </div>


                {/* Ver más */}
                <div className="
                    mt-16
                    md:mt-20
                    pt-6
                    border-t
                    border-white/10
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-4
                ">

                    <p className="
                        text-xs
                        text-white/35
                        font-mono
                        uppercase
                        tracking-[0.18em]
                    ">
                        Más proyectos y trabajos de diseño
                    </p>

                    <a
                        href="https://krear-portfolio.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-white
                            hover:text-fuchsia-500
                            transition-colors
                        "
                    >
                        Ver portfolio completo ↗
                    </a>

                </div>

            </div>
        </section>
    );
}