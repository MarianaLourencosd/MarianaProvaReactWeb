import { useState, useEffect } from "react";
import StatusBar from "./components/StatusBar";
import Footer from "./components/Footer";
import ProdutoForm from "./components/ProdutoForm";
import ListaProdutos from "./components/ListaProdutos";
import imagem from "./assets/comercio.jpg";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    console.log("Lista de produtos atualizada:", produtos);
  }, [produtos]);
  
  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <div className="app-container">
    <div className="content">
      
      <div className="image-container">
        <img src={imagem} alt="E-commerce" />
      </div>
      <div className="card">
        <StatusBar />
        <ProdutoForm adicionarProduto={adicionarProduto} />
        <ListaProdutos produtos={produtos} />
        <Footer />
      </div>

    </div>
  </div>
  );
}

export default App;