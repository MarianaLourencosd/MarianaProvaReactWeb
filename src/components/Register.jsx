import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const cadastrar = async (e) => {
    e.preventDefault();

    setMsg("");
    setSucesso(false);

    if (!email || !senha) {
      setMsg("Preencha todos os campos");
      return;
    }

    if (senha.length < 6) {
      setMsg("Senha muito fraca");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, senha);

      setUser(res.user);
      setSucesso(true);
      setMsg("Cadastro feito com sucesso");
    } catch (error) {
      setSucesso(false);

      if (error.code === "auth/email-already-in-use") {
        setMsg("Usuário já existe");
      } else if (error.code === "auth/invalid-email") {
        setMsg("Email inválido");
      } else {
        setMsg("Erro ao criar conta");
      }
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

          {msg && (
            <p className={sucesso ? "success-text" : "error-text"}>
              {msg}
            </p>
          )}

          <form onSubmit={cadastrar}>
            <input
              type="email"
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