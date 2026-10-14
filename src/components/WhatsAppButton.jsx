import React from "react";
import simboloKrear from "../assets/image/simbolo-krear.png";

export default function WhatsAppButton() {
    const phone = "5491149468032";
    const message = encodeURIComponent(
        "¡Hola! Llegué a través de la web de KREAR y quisiera hacer una consulta sobre sus servicios."
    );

    return (
        <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a KREAR por WhatsApp"
            title="Hablemos de tu proyecto"
           className="group fixed bottom-6 right-6 z-50
    flex h-14 w-14 items-center justify-center
    rounded-full bg-[#08080D]
    shadow-lg shadow-black/30
    transition-all duration-300
    hover:scale-105 hover:bg-fuchsia-500
    focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-fuchsia-500"
        >
            {/* Aro exterior fucsia */}
            <span
                aria-hidden="true"
                className="absolute -inset-[5px] rounded-full
                    border border-fuchsia-500
                    transition-all duration-300
                    group-hover:-inset-[6px]
                    group-hover:border-fuchsia-400"
            />

            {/* Símbolo de KREAR */}
            <img
                src={simboloKrear}
                alt=""
                aria-hidden="true"
                className="h-8 w-8 object-contain
                    transition-transform duration-300
                    group-hover:scale-110"
            />
        </a>
    );
}