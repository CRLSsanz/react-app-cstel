import { useState } from "react";
import { RiShoppingCartLine, RiArrowUpLine } from "react-icons/ri";

const products = [
  {
    name: "Memoria Ram",
    description: "8gb de memoria",
    price: 59,
    img: "https://c1.wallpaperflare.com/preview/402/780/900/computer-memory-chips-technology-ram.jpg",
  },
  {
    name: "USB Memoria",
    description: "capacidad de 32gb",
    price: 29,
    img: "https://c4.wallpaperflare.com/wallpaper/845/690/423/usb-technology-wallpaper-preview.jpg",
  },
  {
    name: "Teclado Htech",
    description: "color negro",
    price: 19,
    img: "https://c0.wallpaperflare.com/preview/784/780/895/cianorte-ofice-house-music.jpg",
  },
  {
    name: "Monitor LG",
    description: "Monitor de ",
    price: 69,
    img: "https://c1.wallpaperflare.com/preview/325/617/134/computer-keyboard-apple-electronics.jpg",
  },
];
const fondo =
  "https://c0.wallpaperflare.com/preview/56/891/619/buy-keyboard-enter-button.jpg";
//"https://c1.wallpaperflare.com/preview/547/595/807/business-computer-contemporary-dark-thumbnail.jpg";

const Shop = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="" id="?">
      <div className="mb-3">
        <h1 className="hidden h-16 bg-gray-200"> </h1>
        <img src={fondo} alt="shop" />
        <h1 className="px-4 text-gray-200 text-xl -mt-20 pb-16">shop</h1>
        <a
          href="#?"
          className="w-9 h-9 fixed bottom-4 right-4 p-1.5 bg-gray-100/50 shadow border-2 rounded-full"
        >
          <h1 className="text-gray-600 text-xl ">
            <RiArrowUpLine /> {""}
          </h1>
        </a>
      </div>

      <div className="px-4 text-gray-700">
        <input
          className="w-full form-input shadow mb-3"
          type="text"
          placeholder="Search"
        />

        <select
          className="w-5/6 md:w-11/12 form-input mr-3 mb-6 shadow-md"
          name=""
          id=""
        >
          <option value="">Category</option>
          <option value="">Monitor</option>
          <option value="">Ram</option>
          <option value="">Laptop</option>
        </select>

        <div className="sticky top-16 z-50 inline-block -mb-3 ">
          <RiShoppingCartLine className="w-10 h-9 p-1 px-2 bg-orange-400 text-white rounded-lg shadow-md shadow-orange-600" />
          <h1 className="absolute -top-2 -right-2 h-5 w-5 text-center text-sm bg-gray-50 text-orange-700 rounded-full text-number shadow-md">
            {count}
          </h1>
        </div>
        {/* CARD */}
        {products.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-50 text-gray-700 border-2 rounded-lg shadow-md mb-5 flex flex-row"
          >
            <img
              src={item.img}
              alt={item.name}
              //style={{ width: "80px" }}
              className="w-[200px] h-[180px] rounded-l-lg"
            />
            <div className="p-3 flex flex-col justify-between text-center">
              <h1>{item.name}</h1>
              <h1 className="text-gray-400 text-sm">{item.description}</h1>
              <h1 className="text-xl text-number ">${item.price}.00</h1>
            </div>
            <h1
              onClick={() => setCount(count + 1)}
              className="absolute bottom-1 left-1 px-2 py-1 rounded-lg border bg-gray-500/50 text-white"
            >
              Add to cart
            </h1>
          </div>
        ))}
      </div>

      <div className="py-20">footer</div>
    </div>
  );
};

export default Shop;
