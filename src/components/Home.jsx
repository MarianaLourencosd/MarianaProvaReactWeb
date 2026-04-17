import StatusBar from "./StatusBar";
import Footer from "./Footer";
import ProdutoForm from "./ProdutoForm";
import ListaProdutos from "./ListaProdutos";
import imagem from "../assets/comercio.jpg";

function Home({ user, produtos, logout }) {
  return (
    <div className="app-container">

      <div className="layout">

        <div className="side-image">
          <img src={imagem} alt="Sistema" />
        </div>

        <div className="panel">

          <StatusBar />

          <p className="success-text">
            Logado: {user?.email}
          </p>

          <button onClick={logout}>Sair</button>

          <ProdutoForm />
          <ListaProdutos produtos={produtos} />

          <Footer />

        </div>

      </div>

    </div>
  );
}

export default Home;