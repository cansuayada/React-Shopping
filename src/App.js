import "./App.css";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";
import Card from "./components/Card";

function App() {
  const { drawer } = useSelector((state) => state.drawer); //drawer varsa card göster
  console.log("drawer", drawer);
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
          {drawer && <Card />}
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;

//*detail:id detail sayfasındakilerin id lerine karşılık gelmesi için
