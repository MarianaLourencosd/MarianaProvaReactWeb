import { useState } from "react";

const ProdutoForm = ({ adicionarProduto }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    adicionarProduto({ nome, preco });

    setNome("");
    setPreco("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProdutoForm;

