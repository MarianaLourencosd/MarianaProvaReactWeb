import { auth } from "../firebase";

function ListaProdutos({ produtos }) {
  const user = auth.currentUser;

  const meusProdutos = produtos.filter(
    (produto) => produto.userId === user?.uid
  );

  return (
    <ul>
      {meusProdutos.map((produto) => (
        <li key={produto.id}>
          {produto.nome} - R$ {produto.preco}
        </li>
      ))}
    </ul>
  );
}

export default ListaProdutos;