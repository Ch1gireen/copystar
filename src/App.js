import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/catalog";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
