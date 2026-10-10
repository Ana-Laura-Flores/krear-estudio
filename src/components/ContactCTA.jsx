import React from "react";

export default function ContactCTA() {
return ( <section
         id="contacto"
         className="relative overflow-hidden bg-[#050508] text-white px-6 md:px-12 lg:px-20 py-24 md:py-32"
     >
{/* Iluminación de fondo */} <div
             className="
                 pointer-events-none
                 absolute
                 top-0
                 right-0
                 w-[450px]
                 h-[350px]
                 rounded-full
                 bg-fuchsia-500/10
                 blur-[130px]
             "
         />

```
        <div
            className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                w-[400px]
                h-[300px]
                rounded-full
                bg-cyan-400/10
                blur-[130px]
            "
        />

        <div className="relative z-10 max-w-7xl mx-auto">

            {/* Encabezado */}
            <div className="flex items-start gap-4 mb-12">
                <span className="w-2 h-2 mt-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                <div>
                    <p className="text-base md:text-xl font-mono uppercase tracking-[0.3em] text-white/60">
                        Contacto
                    </p>

                    <div className="mt-3 w-12 h-px bg-cyan-400/60" />
                </div>
            </div>

            {/* Contenido principal */}
            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 md:gap-16 items-end">

                <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-6">
                        ¿Tenés un proyecto en mente?
                    </p>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.055em] leading-[0.92]">
                        Hagamos algo
                        <br />
                        <span className="text-fuchsia-500">
                            que conecte.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-xl text-sm md:text-base text-white/50 leading-relaxed">
                        Contame qué necesitás para tu marca o tu negocio.
                        Podemos trabajar una idea puntual o desarrollar una
                        solución que integre diseño y tecnología.
                    </p>
                </div>

                {/* Acción */}
                <div className="md:justify-self-end w-full md:max-w-xs">
                    <div className="border-t border-white/15 pt-6">
                        <p className="text-sm text-white/40 leading-relaxed mb-6">
                            Cada proyecto empieza con una conversación.
                            El próximo puede ser el tuyo.
                        </p>

                        <a
    href="https://wa.me/5491149468032"
    target="_blank"
    rel="noreferrer"
    className="
        inline-flex
        items-center
        justify-center
        w-full
        px-6
        py-5
        rounded-full
        bg-white
        text-black
        text-xs
        font-bold
        uppercase
        tracking-widest
        transition-colors
        duration-300
        hover:bg-fuchsia-500
        hover:text-white
    "
>
    Hablemos de tu proyecto
</a>
                    </div>
                </div>

            </div>

            {/* Cierre */}
            <div className="mt-20 md:mt-28 pt-5 border-t border-white/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                    <p className="text-lg font-black tracking-[0.12em]">
                        KREAR<span className="text-fuchsia-500">.</span>
                    </p>
                    <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-white/35">
                        Diseño que conecta
                    </p>
                </div>

                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/35">
                    Diseño gráfico · Identidad · Desarrollo web
                </p>

                <a
                    href="#inicio"
                    className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/45 hover:text-cyan-400 transition-colors"
                >
                    Volver arriba ↑
                </a>
            </div>

        </div>
    </section>
);


}
