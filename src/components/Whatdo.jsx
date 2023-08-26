import {
  LiaToolsSolid,
  LiaCheckCircle,
  LiaShoppingBagSolid,
} from "react-icons/lia";

const Whatdo = () => {
  return (
    <div className="text-gray-600 text-base p-4">
      <div className="relative bg-gray-50/70 border-b-2  border-purple-500 p-5 mb-5">
        <LiaCheckCircle className="absolute top-6 right-4 text-cyan-400 text-4xl animate-pulse" />
        <h1 className="text-xl py-4 ">PREVENCION</h1>
        <p className="text-justify text-sm mb-5">
          El nuevo servicio de CSTEL. Realizamos una serie de comprobaciones del
          estado de sus ordenadores preveniendo cualquier problema informático y
          de red y solucionarlo directamente. <br />
          ¡Más vale prevenir que reparar!
        </p>
      </div>

      <div className="relative bg-gray-50/70 border-b-2 border-purple-500 p-5 mb-5">
        <LiaToolsSolid className="absolute top-6 right-4 text-red-400 text-4xl animate-pulse" />
        <h1 className="text-xl py-4 ">ASISTENCIA</h1>
        <p className="text-justify text-sm mb-5">
          Asistencia y reparaciones, configuraciones y mantenimiento de redes de
          dominio, respaldo y seguridad, mantenimiento de hardware y software
          (reparaciones de escritorio, notebook, Windows, Linux, Mac OS, redes,
          servidores, clientes). Cableado de red y mas.
        </p>
      </div>
      <img
        src="https://img.freepik.com/vector-gratis/ilustracion-moderna-concepto-computadora-escritorio_114360-11616.jpg?w=740&t=st=1692996463~exp=1692997063~hmac=e3a186ce03e1d7370feadd72e0d4c5c1fbd148b9bcfb39a49d395aab01bd047e"
        alt="Computer"
        className="hidden"
      />

      <div className="relative bg-gray-50/70 border-b-2 border-purple-500 p-5 mb-5">
        <LiaShoppingBagSolid className="absoluteX top-6 right-4 text-green-400 text-4xl animate-pulse" />
        <h1 className="text-xl py-4">RENOVAR</h1>
        <p className="text-justify text-sm mb-5">
          Le ofrecemos una amplia gama de soluciones y ofertas para todas sus
          necesidades de TI. Las computadoras portátiles y de escritorio, todo
          tipo de accesorios y la asistencia completa previa y posterior a la
          venta le permitirán finalmente tener la computadora que mejor se
          adapte a sus gustos y necesidades.
        </p>
      </div>
    </div>
  );
};

export default Whatdo;
