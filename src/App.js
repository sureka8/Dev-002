import Agents from "./components/Agents";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Valuation from "./components/Valuation";
import Villa from "./components/Villa";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Specialdeal from "./pages/Specialdeal";
import Store from "./pages/Store";


function App() {
  return (
    <div className="font-display" >
    
    <Home />
    <Villa />
    <Store />
    <Specialdeal />
    <Agents />
    <Clients />
    <Valuation />
    <Blog />
   
    <Footer />
    </div>
  );
}

export default App;
