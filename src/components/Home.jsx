import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-between px-12">
      <div className="my-auto">
        <div className="w-full text-center bg-gray-300/20 border-r-2 border-l-2 border-purple-400 p-6 mb-3">
          <h1 className="text-xl uppercase py-5 ">
            Asistencia técnica <br /> y Venta de Hardware y <br /> Software.
          </h1>
        </div>
        <p className="hidden text-lg">
          Llevamos a cabo Reparaciones en el Laboratorio y en la Casa en Milán y
          de la Provincia en 24 horas.
        </p>
      </div>
    </div>
  );
};

export default Home;
