import { RiArrowUpLine } from "react-icons/ri";
import Contact from "../components/Contact";
import Course from "../components/Course";
import Home from "../components/Home";
import Whatdo from "../components/Whatdo";

//const fondoPanal = "https://raw.githubusercontent.com/CRLSsanz/trade/main/panal1.jpg";
//const fondoCotizar = "https://img.freepik.com/foto-gratis/hermoso-concepto-criptomoneda_23-2149250215.jpg?w=970";
//const fondoCripto = "https://media.istockphoto.com/id/1312767508/es/foto/hombre-de-negocios-que-utiliza-la-banca-en-l%C3%ADnea-de-tabletas-moneda-de-cambio-y-pago-marketing.jpg?b=1&s=612x612&w=0&k=20&c=ZnHwPIBdCT_HT4UmO2TuKhzwiuT6piICZ6zRc4ssapQ=";
const fondo2 =
  "https://c0.wallpaperflare.com/preview/847/634/542/black-business-camera-designer.jpg";

const Main = () => {
  //const page = Params();
  //console.log(page);

  return (
    <div className="">
      <section
        id="?"
        className="h-[calc(85vh)] bg-[#1A2035]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fondo2})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full">
          <Home />
        </div>
      </section>

      <section
        id="s2"
        //id="section2"
        className="min-h-screen bg-gray-100 bg-[#1A2035]XX flex"
        style={
          {
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.99), rgba(0,0,0,0.7)), url(${fondoCotizar})`,
            //backgroundPosition: "50%",
            //backgroundSize: "cover",
            //backgroundAttachment: "fixed",
          }
        }
      >
        <div className="my-auto w-full px-2">
          <h1 className="h-16"> </h1>
          <Whatdo />
        </div>
      </section>

      <section id="section3" className="min-h-[700px] bg-[#1A2035]X flex">
        <div className="my-autoooo w-full">
          <h1 className="hidden h-16"> </h1>
          <Contact />
        </div>
      </section>

      <section
        id="section4"
        className="hidden min-h-[700px] bg-[#1A2035] flexX"
      >
        <div className="my-autoooo w-full px-2">
          <h1 className="h-16"> </h1>
          <Course />
        </div>
      </section>

      <a href="#?" className="sticky bottom-3 flex justify-center p-1.5 ">
        <h1 className="w-9 h-9 p-1.5 text-gray-600 text-xl bg-gray-100/50 shadow border-2 rounded-full">
          <RiArrowUpLine />
        </h1>
      </a>

      {/* FOOTER */}
      <p className="w-full bg-[#1A2035] text-xs text-center py-20">
        All Rights Reserved <span className="font-numero">© 2023 </span>
      </p>
    </div>
  );
};

export default Main;
