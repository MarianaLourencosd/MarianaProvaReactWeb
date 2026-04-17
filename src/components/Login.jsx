import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    setMsg("");
    setSucesso(false);

    if (!email || !senha) {
      setMsg("Preencha todos os campos");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, senha);

      setUser(res.user);
      setSucesso(true);
      setMsg("Login feito com sucesso");
    } catch (error) {
      setSucesso(false);

      if (error.code === "auth/user-not-found") {
        setMsg("Usuário não existe");
      } else if (error.code === "auth/wrong-password") {
        setMsg("Senha incorreta");
      } else {
        setMsg("Erro ao fazer login");
      }
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

          {msg && (
            <p className={sucesso ? "success-text" : "error-text"}>
              {msg}
            </p>
          )}

          <form onSubmit={login}>
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