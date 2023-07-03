import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// import AboutUs from "./pages/Header/AboutUs";
import ProductContent from "./pages/content/ProductContent";
import Products from "./pages/Header/Products";
import WhatsNew from "./pages/Header/WhatsNew";
import OurStory from "./pages/Header/OurStory";
import Recipes from "./pages/Header/Recipes";
import CheddarPotatoes from "./pages/content/CheddarPotatoes";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductContent />}  />
            <Route path="OurStory" element={<OurStory />} />
            {/* <Route path="AboutUs" element={<AboutUs />} /> */}
            <Route path="Recipes" element={<Recipes />} />
            <Route path="WhatsNew" element={<WhatsNew />} />
            <Route path="Products" element={<Products />} />
            <Route path="CheddarPotatoes" element={<CheddarPotatoes />}/>
          </Route>
        </Routes>
      </BrowserRouter>
 
  {/* <CommanFooter /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
