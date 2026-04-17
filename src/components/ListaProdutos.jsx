function ListaProdutos({ produtos }) {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome} - R$ {produto.preco}
        </li>
      ))}
    </ul>
  );
}

export default ListaProdutos;