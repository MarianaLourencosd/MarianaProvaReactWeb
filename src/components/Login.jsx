import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const login = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setMsg("Preencha todos os campos");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, senha);
      setUser(res.user);
    } catch (error) {
      setMsg("Login não encontrado ou senha incorreta");
    }
  };

  return (
    <div className="app-container">
      <div className="layout">

        <div className="side-image">
          <img src="/src/assets/comercio.jpg" alt="Login" />
        </div>

        <div className="panel auth-box">

          <h1>Login</h1>

          {msg && <p className="error-text">{msg}</p>}

          <form onSubmit={login}>
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

            <button type="submit">Entrar</button>
          </form>

          <button onClick={() => setPage("register")}>
            Criar conta
          </button>

        </div>

      </div>
    </div>
  );
}

export default Login;