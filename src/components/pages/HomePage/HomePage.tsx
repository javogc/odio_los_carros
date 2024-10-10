import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-odioGreen text-odioWhite h-auto w-full flex items-center justify-center p-4 h-auto overflow-auto">
      {/* <h4 className="text-start text-[22px] font-robotoMono font-light leading-[1.2]">
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
      </h4> */}
      <h4 className="text-start text-[22px] font-robotoMono font-light leading-[1.2]">
        Hello! I&apos;m Javier Guajardo, a full-stack web developer based in
        Mexico City, and I&apos;m the mind behind <b>Odio los Carros</b>. This
        project aims to question how we use technology in our lives. I firmly
        believe that technology is not just a human invention; it is inherent to
        nature itself. From the intricate systems of the{" "}
        <a
          href="https://www.biodiversidad.gob.mx/diversidad/sistemas-productivos/milpa"
          className="text-odioHover hover:text-odioHoveronHover font-bold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          milpa
        </a>{" "}
        to the remarkable collaboration found in{" "}
        <a
          href="https://www.youtube.com/watch?v=1OSvmje2MBo&ab_channel=UNDERSTORY"
          className="text-odioHover hover:text-odioHoveronHover font-bold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          lichens
        </a>
        , many sentient beings contribute to the tapestry of technology that
        surrounds us.
        <br />
        <br /> For me, technology is a multi-species effort that should serve
        all life on our planet. I love creating web applications that leverage
        data to help users gain valuable insights and promote sustainable
        practices. My{" "}
        <Link
          to="/projects"
          className="text-odioHover hover:text-odioHoveronHover font-bold underline"
        >
          work
        </Link>{" "}
        spans everything from interactive dashboards and real-time maps to
        custom solutions tailored to specific needs. I see technology as a tool
        to solve problems and enhance our lives, all while recognizing that we
        are part of a broader ecosystem. I use technologies like React, D3.js,
        Leaflet, Firebase, and Supabase to deliver innovative applications that
        truly matter.
        <br />
        <br /> I&apos;m passionate about user-centered design and always look
        for ways to make things more approachable. I enjoy collaborating with
        like-minded individuals who believe in the power of technology to bring
        about positive change. If you have an idea or project in mind and want
        to explore how we can turn it into reality, feel free to reach out.
        Let&apos;s chat and see what we can create together! <br />
        <br />{" "}
        <a
          href="mailto:hola@odioloscarros.net"
          className="text-odioHover hover:text-odioHoveronHover font-bold underline"
        >
          I’d love to hear from you!
        </a>
      </h4>
    </div>
  );
}

export default HomePage;
