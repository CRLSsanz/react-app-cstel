import {
  LiaToolsSolid,
  LiaCheckCircle,
  LiaShoppingBagSolid,
  LiaPlusSquareSolid,
} from "react-icons/lia";
import { useAppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";

const Whatdo = () => {
  const { texts } = useAppContext();

  return (
    <div className="text-gray-600 text-base p-4">
      <div className="relative bg-gray-50/70 border-l-2  border-cyan-300 p-5 mb-10 shadow-lg">
        <LiaCheckCircle className="absolute top-4 left-4 text-cyan-400 text-4xl animate-pulse" />
        <h1 className="text-xl text-center py-4 ">{texts.whatDO_1Title}</h1>
        <p className="text-justify text-sm px-7 py-5">{texts.whatDO_1Text}</p>
        <Link
          to="/contact"
          className="flex justify-end py-2 text-gray-400 text-2xl"
        >
          <LiaPlusSquareSolid />
        </Link>
      </div>

      <div className="relative bg-gray-50/70 border-l-2 border-red-200 p-5 mb-10 shadow-lg">
        <LiaToolsSolid className="absolute top-4 left-4 text-red-300 text-4xl animate-pulse" />
        <h1 className="text-xl text-center py-4 ">{texts.whatDO_2Title}</h1>
        <p className="text-justify text-sm px-7 py-5">{texts.whatDO_2Text}</p>
        <Link
          to="/contact"
          className="flex justify-end py-2 text-gray-400 text-2xl"
        >
          <LiaPlusSquareSolid />
        </Link>
      </div>
      <img
        src="https://img.freepik.com/vector-gratis/ilustracion-moderna-concepto-computadora-escritorio_114360-11616.jpg?w=740&t=st=1692996463~exp=1692997063~hmac=e3a186ce03e1d7370feadd72e0d4c5c1fbd148b9bcfb39a49d395aab01bd047e"
        alt="Computer"
        className="hidden"
      />

      <div className="relative bg-gray-50/70 border-l-2 border-green-300 p-5 mb-10 shadow-lg">
        <LiaShoppingBagSolid className="absolute top-4 left-4 text-green-400 text-4xl animate-pulse" />
        <h1 className="text-xl text-center py-4">{texts.whatDO_3Title}</h1>
        <p className="text-justify text-sm px-7 py-5">{texts.whatDO_3Text}</p>
        <Link
          to="/contact"
          className="flex justify-end py-2 text-gray-400 text-2xl"
        >
          <LiaPlusSquareSolid />
        </Link>
      </div>
    </div>
  );
};

export default Whatdo;
