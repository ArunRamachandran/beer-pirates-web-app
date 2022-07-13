import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Category } from "./pages/Category";
import { Catalogue } from "./pages/Catalogue";
import { NavBar } from "./components/NavBar";


const PageRoutes = () => (  
    <Routes>
      <Route exact path="/" element={<Category />} />
      <Route exact path="/category" element={<Category />} />
      <Route exact path="/catalogue" element={<Catalogue />} />
    </Routes>
)

const App = () => {

  return (    
      <div className="App">
        <NavBar />
        <PageRoutes />
      </div>
  );
}

export default App;
