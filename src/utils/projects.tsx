export type ProjectType = {
  id: string;
  title: string;
  stack: string[];
  company: string;
  description: string;
  year: number;
  link?: string;
  type: string;
  images?: string[];
  development?: boolean;
  active?: boolean;
  private?: boolean;
};

export const projects: ProjectType[] = [
  {
    title: "Plan Querétaro 2050",
    stack: ["react", "firebase", "css", "materialUI", "typescript"],
    type: "Fullstack",
    company: "Freelance",
    year: 2024,
    description:
      "For this project, I developed a landing page and form for the Plataforma de Partipación Ciudadana (Civic Participation Platform) for the mexican state of Queretaro. For the frontend I used React with Typescript, Material UI and also Formik and Yup to create and validate the form. For the backend, I used firebase, which challenged me to ensure the security was tight to protect the comments receieved from citizens. To achieve this, I harnessed tools like AppCheck, Firestore Security Rules and Annonymous Authentication to ensure that the application was safe from attacks. This project also allowed me to further my understanding of the different security headers that exist,  and that led to this app getting an A+ rating from https://securityheaders.com/",
    link: "https://www.queretaro2050.mx/",
    images: ["home_qto", "form_qto", "seccion2_qto"],
    id: "qto-2050",
    active: true,
    private: false,
    development: false,
  },
  {
    title: "Red Río Vivo",
    stack: [
      "react",
      "supabase",
      "css",
      "materialUI",
      "leaflet",
      "javascript",
      "Postgres",
      "PostGIS",
    ],
    type: "Fullstack",
    company: "Freelance",
    year: 2024,
    description:
      "This is an ongoing project. It consists of two parts: a landing page and an interactive page. The landing page is live and was developed using plain HTML + CSS. The interactive map is still in development; it's a React app communicating with a Supabase backend using PostGIS to query geographical data and then displaying it leveraging the Leaflet library. ",
    link: "https://riovivo.red/",
    images: ["rv1", "rv2"],
    id: "red-rio-vivo",
    active: true,
    private: false,
    development: true,
  },
  {
    title: "Odio los Carros",
    stack: ["react", "firebase", "css", "typescript"],
    type: "Fullstack",
    company: "Freelance",
    year: 2024,
    description:
      "Odios los carros is my personal portfolio. I built this app as one of my early React projects. Since then, it has gone through several versions, all documented in its GitHub repository. The latest updates included cleaning up the project, upgrading to TypeScript, and adding a new projects section. This is an active project that will evolve over time. My intention with it is to use my personal portfolio as a playground to showcase technologies I'm interested in.",
    link: "https://odioloscarros.net/",
    id: "odio-los-carros",
    active: true,
    private: false,
    development: true,
  },
  {
    title: "Distrito Valle Oriente",
    stack: ["html", "wordpress", "css", "javascript"],
    company: "Freelance",
    type: "Frontend",
    year: 2023,
    description: "",
    link: "https://patronatodistritovalleoriente.mx/",
    id: "distrito-vo",
    active: false,
    private: false,
    development: false,
  },
  {
    title: "Red de Información de Violencia Contra las Mujeres",
    stack: ["agile", "javascript", "php", "laravel", "javascript"],
    type: "Project Managment - Fullstack",
    company: "Gobierno CDMX",
    year: 2022,
    description: "",
    id: "rivcm",
    active: false,
    private: true,
    development: false,
  },
  {
    title: "Dashboard Público de Seguridad",
    stack: ["angular", "d3.js", "html", "typescript", "javascript"],
    type: "Frontend",
    company: "Gobierno CDMX",
    year: 2019,
    id: "dashboard-publico-seguridad",
    description: "",
    link: "https://datosseguridad.cdmx.gob.mx/",
  },
  {
    title: "Modelo COVID19 - CDMX",
    stack: ["angular", "d3.js", "html", "typescript", "javascript"],
    company: "Gobierno CDMX",
    type: "Frontend",
    id: "modelo-covid",
    year: 2021,
    description: "",
    link: "https://modelo.covid19.cdmx.gob.mx/",
  },
  {
    title: "Dashboard COVID19 - CDMX",
    stack: ["angular", "d3.js", "html", "typescript", "javascript"],
    type: "Frontend",
    company: "Gobierno CDMX",
    year: 2020,
    id: "dashboard-covid",
    description: "",
  },
  {
    title: "Dashboard Gabinete de Seguridad - CDMX",
    stack: ["angular", "d3.js", "html", "typescript", "javascript"],
    type: "Frontend",
    company: "Gobierno CDMX",
    year: 2019,
    id: "dashboard-seguridad",
    description: "",
  },
];
