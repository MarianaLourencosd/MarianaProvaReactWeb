const ListaProdutos = ({ produtos }) => {
  return (
    <ul>
      {produtos.map((produto, index) => (
        <li key={index}>
          {produto.nome} - R$ {produto.preco}
        </li>
      ))}
    </ul>
  );
};

export default ListaProdutos;
