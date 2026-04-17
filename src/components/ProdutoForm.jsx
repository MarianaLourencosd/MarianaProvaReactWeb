import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function ProdutoForm() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !preco) {
      setMsg("Preencha os campos");
      return;
    }

    try {
      await addDoc(collection(db, "produtos"), { nome, preco });
      setMsg("Produto cadastrado!");
      setNome("");
      setPreco("");
    } catch {
      setMsg("Erro ao salvar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {msg && <p className="success-text">{msg}</p>}

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default ProdutoForm;