import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const cadastrar = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setMsg("Preencha todos os campos");
      return;
    }

    if (senha.length < 6) {
      setMsg("Senha deve ter pelo menos 6 caracteres");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, senha);
      setUser(res.user);
    } catch (error) {
      setMsg("Erro ao cadastrar (email inválido ou já existe)");
    }
  };

  return (
    <div className="app-container">
      <div className="layout">

        <div className="side-image">
          <img src="/src/assets/comercio.jpg" alt="Cadastro" />
        </div>

        <div className="panel auth-box">

          <h1>Cadastro</h1>

          {msg && <p className="error-text">{msg}</p>}

          <form onSubmit={cadastrar}>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit">Criar conta</button>
          </form>

          <button onClick={() => setPage("login")}>
            Já tenho conta
          </button>

        </div>

      </div>
    </div>
  );
}

export default Register;