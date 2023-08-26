import { RiArrowUpLine } from "react-icons/ri";
const fondo =
  "https://c1.wallpaperflare.com/preview/957/995/578/woman-office-workspace-workplace.jpg";

const Course = () => {
  return (
    <div>
      <div className="mb-6" id="?">
        <img src={fondo} alt="fondo" />
        <h1 className="absolute top-28 px-4 text-gray-200 text-xl">
          Course home
        </h1>
        <a
          href="#?"
          className="w-9 h-9 fixed bottom-4 right-4 p-1.5 bg-gray-100/50 shadow border-2 rounded-full"
        >
          <h1 className="text-gray-600 text-xl ">
            <RiArrowUpLine />
          </h1>
        </a>
      </div>

      <div className="px-4 text-gray-700">
        <h1 className="text-xl font-semibold mb-6">
          Cursos en casa es un nuevo proyecto de CSTEL.
        </h1>
        <p className="mb-3 text-justify">
          Nuestra historia Informatica nació en 1999 y los cursos siempre han
          sido una parte importante de nuestro negocio. La organización, la
          clientela y las muchas horas de docencia nos han llevado a comprender
          cómo gestionar mejor estas actividades.
        </p>
        <p className="mb-3 text-justify">
          Nada que no se haya hecho ya. ¡Nada de métodos “revolucionarios”!
          Nuestro trabajo hecho de la mejor manera, o al menos, eso es lo que
          pretendemos hacer. El objetivo es satisfacer las solicitudes del
          cliente. Las muestras de cariño de nuestros "alumnos" informatizados
          son siempre una gran satisfacción.
        </p>
        <h1 className="font-semibold">
          ¡Ponnos a prueba! <br /> CONTACTOS DIRECTOS
        </h1>
      </div>

      <div className="py-20 text-center">footer</div>
    </div>
  );
};

export default Course;
