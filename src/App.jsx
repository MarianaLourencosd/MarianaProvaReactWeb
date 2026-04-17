import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "produtos"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProdutos(lista);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setPage("login");
  };

  if (user) {
    return (
      <Home user={user} produtos={produtos} logout={logout} />
    );
  }

  return (
    <>
      {page === "login" && (
        <Login setUser={setUser} setPage={setPage} />
      )}

      {page === "register" && (
        <Register setUser={setUser} setPage={setPage} />
      )}
    </>
  );
}

export default App;