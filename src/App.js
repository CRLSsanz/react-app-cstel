import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Course from "./components/Course";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="bg-gray-50">
        <BrowserRouter>
          <div className="w-full fixed top-0 z-10">
            <Navbar />
          </div>
          <div className={" "}>
            <Routes>
              <Route index element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/course" element={<Course />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
