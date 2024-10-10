import React from "react";
// import "./HomePage.css";

function HomePage() {
  return (
    <div className="bg-odioGreen text-odioWhite h-auto w-full flex items-center justify-center p-4 h-auto overflow-auto">
      <h4 className="text-start text-[22px] font-robotoMono font-light leading-[1.2]">
        ¡Hola! Soy Javier Guajardo, un desarrollador web full-stack de la Ciudad
        de México, y estoy detrás de <b>Odio los Carros.</b> Este proyecto busca
        cuestionar cómo usamos la tecnología en nuestras vidas. Creo firmemente
        que la tecnología no solo debe servir a los humanos, sino que también
        está presente en la naturaleza, desde sistemas agrícolas como la milpa
        hasta la colaboración entre líquenes. Para mí, la tecnología es un
        esfuerzo multi-especie que debe estar al servicio de toda la vida en
        nuestro planeta.
        <br />
        <br /> Me encanta crear aplicaciones web que utilizan datos para ayudar
        a los usuarios a obtener información valiosa y fomentar prácticas
        sostenibles. Hago de todo: desde tableros interactivos y mapas en tiempo
        real hasta soluciones a medida. Para mí, la tecnología es una
        herramienta para resolver problemas y hacer que nuestras vidas sean un
        poco mejores, reconociendo que somos parte de un ecosistema más amplio.
        Uso tecnologías como React, D3.js, Leaflet, Firebase y Supabase para
        ofrecer aplicaciones innovadoras que realmente importan. <br /> <br />{" "}
        Soy un apasionado del diseño centrado en el usuario y siempre busco cómo
        hacer que las cosas sean más amigables. Me gusta colaborar con personas
        que también creen en el poder de la tecnología para generar un cambio
        positivo. Si tienes una idea o un proyecto en mente y quieres explorar
        cómo podemos hacerlo realidad, no dudes en ponerte en contacto.
        <br />
        <br />
        ¡Hablemos y veamos qué podemos crear juntos!{" "}
        <a
          href="mailto:hola@odioloscarros.net"
          className="text-odioHover hover:text-odioHoveronHover font-bold underline"
        >
          ¡Escríbeme!
        </a>
      </h4>
    </div>
  );
}

export default HomePage;
