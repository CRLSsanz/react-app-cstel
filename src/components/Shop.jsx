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
  "https://c1.wallpaperflare.com/preview/547/595/807/business-computer-contemporary-dark-thumbnail.jpg";

const Shop = () => {
  return (
    <div className="" id="?">
      <div className="mb-3">
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
          className="w-5/6 p-2 border mr-3 mb-3"
          type="text"
          placeholder="Search"
        />
        <div className="sticky top-20 inline-block -mb-4">
          <RiShoppingCartLine className="w-10 h-10 p-1 px-2 bg-cyan-400 rounded-lg" />
          <h1 className="absolute -top-2 -right-2 h-5 w-5 text-center text-sm bg-gray-50 rounded-full">
            2
          </h1>
        </div>

        <select className="w-full p-2 border mb-10" name="" id="">
          <option value="">Monitor</option>
          <option value="">Ram</option>
          <option value="">Laptop</option>
        </select>

        {/* CARD */}
        {products.map((item, index) => (
          <div
            key={index}
            className=" bg-gray-50 text-gray-700 border-2 rounded-lg shadow-md mb-5 flex flex-row"
          >
            <img
              src={item.img}
              alt={item.name}
              //style={{ width: "80px" }}
              className="w-[200px] h-[180px] rounded-l-lg"
            />
            <div className="p-4 flex flex-col justify-evenly text-center">
              <h1>{item.name}</h1>
              <h1 className="text-gray-400 text-sm">{item.description}</h1>
              <h1 className="text-xl ">${item.price}.00</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="py-20">footer</div>
    </div>
  );
};

export default Shop;
