import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function ProdutoForm() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [msg, setMsg] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    setMsg("");
    setSucesso(false);

    if (!user) {
      setMsg("Faça login para continuar");
      return;
    }

    if (!nome || !preco) {
      setMsg("Preencha todos os campos");
      return;
    }

    if (Number(preco) <= 0) {
      setMsg("Preço inválido");
      return;
    }

    try {
      await addDoc(collection(db, "produtos"), {
        nome,
        preco: Number(preco),
        userId: user.uid,
      });

      setSucesso(true);
      setMsg("Produto cadastrado com sucesso");

      setNome("");
      setPreco("");
    } catch {
      setMsg("Erro ao salvar produto");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {msg && (
        <p className={sucesso ? "success-text" : "error-text"}>
          {msg}
        </p>
      )}

      <input
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

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default ProdutoForm;